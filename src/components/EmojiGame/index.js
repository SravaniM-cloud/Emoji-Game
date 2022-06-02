/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import EmojiCard from '../EmojiCard'

import NavBar from '../NavBar'

import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    isPlaying: true,
    score: 0,
    topScore: 0,
    prevEmojiList: [],
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  onClickEmoji = id => {
    let returnObj
    this.setState(prevState => {
      if (!prevState.prevEmojiList.includes(id) && prevState.score === 11) {
        returnObj = {
          score: prevState.score + 1,
          isPlaying: false,
        }
      } else if (!prevState.prevEmojiList.includes(id)) {
        returnObj = {
          prevEmojiList: [...prevState.prevEmojiList, id],
          score: prevState.score + 1,
        }
      } else
        returnObj = {
          isPlaying: false,
        }
      return returnObj
    })
  }

  getEmojiListContainer = () => {
    const emojiList = this.shuffledEmojisList()

    return (
      <ul className="emojis-whole-list-container">
        {emojiList.map(eachEmoji => (
          <EmojiCard
            emoji={eachEmoji}
            key={eachEmoji.id}
            onClickEmoji={this.onClickEmoji}
          />
        ))}
      </ul>
    )
  }

  onCLickPlayAgain = () => {
    let {topScore} = this.state
    const {score} = this.state
    if (topScore < score) {
      topScore = score
    }

    this.setState({
      prevEmojiList: [],
      score: 0,
      topScore,
      isPlaying: true,
    })
  }

  render() {
    const {isPlaying, score, topScore} = this.state

    return (
      <div className="emoji-game-bg-container">
        <NavBar score={score} topScore={topScore} isPlaying={isPlaying} />
        <div className="display-card-container">
          {isPlaying && this.getEmojiListContainer()}
          {!isPlaying && (
            <WinOrLoseCard
              score={score}
              onCLickPlayAgain={this.onCLickPlayAgain}
            />
          )}
        </div>
      </div>
    )
  }
}
export default EmojiGame
