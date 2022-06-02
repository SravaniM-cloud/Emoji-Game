// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emoji, onClickEmoji} = props
  const {emojiUrl, emojiName, id} = emoji

  const clickEmoji = () => {
    onClickEmoji(id)
  }

  return (
    <li className="emoji-card-item">
      <button type="button" className="button" onClick={clickEmoji}>
        <img className="emoji-image" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
