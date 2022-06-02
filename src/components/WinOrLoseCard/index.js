// Write your code here.
// Write your code here.

import './index.css'

const WinOrLoseCard = props => {
  const {score, onCLickPlayAgain} = props

  let statusText
  let scoreText = 'Score'
  let imageUrl
  if (score === 12) {
    statusText = 'Won'
    scoreText = 'Best Score'
    imageUrl = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  } else {
    statusText = 'Lose'
    imageUrl = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  }

  const clickPlayAgainBtn = () => {
    onCLickPlayAgain()
  }
  return (
    <div className="win-lose-card-container">
      <div>
        <h1>You {statusText}</h1>
        <p>{scoreText}</p>
        <p className="score">{score}/12</p>
        <button
          type="button"
          className="play-again-btn"
          onClick={clickPlayAgainBtn}
        >
          Play Again
        </button>
      </div>
      <div>
        <img className="win-or-lose-image" src={imageUrl} alt="win or lose" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
