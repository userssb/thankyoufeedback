import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    isSelected: true,
  }

  onClickEmoji = () => {
    this.setState({isSelected: !isSelected})
  }

  renderQuestion = () => {
    const {isSelected} = this.state
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="bg-cont">
        <div className="app-cont">
          <h1>How satisfied are you with our customer support performance?</h1>
          <ul className="emoj-cont">
            {emojis.map(eachemoji => (
              <li key={eachemoji.id}>
                <button
                  type="button"
                  className="emoji-btn"
                  onClick={this.onClickEmoji}
                >
                  <img
                    src={eachemoji.imageUrl}
                    alt={eachemoji.name}
                    className="emoji"
                  />
                  <br /> <p>{eachemoji.name}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderThanksScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="bg-cont">
        <div className="app-cont">
          <img src={loveEmojiUrl} alt="love emoji" className="love-image" />
          <h1 className="thank-you-text">Thank You!</h1>
          <p className="description">
            We will use your feedback to improve our customer support
            performance.
          </p>
        </div>
      </div>
    )
  }

  render() {
    const {isSelected} = this.state
    return (
      <div className="app-container">
        <div className="feedback-card">
          {isSelected ? this.renderQuestion() : this.renderThanksScreen()}
        </div>
      </div>
    )
  }
}

export default Feedback
