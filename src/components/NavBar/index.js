// Write your code here.
// Write your code here.
import './index.css'

const NavBar = props => {
  const {isPlaying, score, topScore} = props

  return (
    <div className="nav-bar-container">
      <div className="nav-item-container">
        <img
          className="logo-image"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="nav-item logo-heading ">Emoji Game</h1>
      </div>
      {isPlaying && (
        <div className="nav-item-container">
          <p className="nav-item nav-bar-score-ele ">Score: {score}</p>
          <p className="nav-item nav-bar-score-ele ">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
