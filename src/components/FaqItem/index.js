import {Component} from 'react'
import './index.css'

const plusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png '
const minusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png '
class FaqItem extends Component {
  state = {isActive: false}

  onToggleIsActive = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  renderAnswer = () => {
    const {isActive} = this.state
    const {faqDetails} = this.props
    const {answerText} = faqDetails

    if (isActive) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  renderImage = () => {
    const {isActive} = this.state
    const imageUrl = isActive ? minusImage : plusImage
    const altText = isActive ? 'minus' : 'plus'

    return (
      <div>
        <button
          className="button"
          type="button"
          onClick={this.onToggleIsActive}
        >
          <img src={imageUrl} alt={altText} className="image" />
        </button>
      </div>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails
    return (
      <div>
        <li className="faq-item">
          <div className="question-container">
            <h1 className="question">{questionText}</h1>
            {this.renderImage()}
          </div>
          {this.renderAnswer()}
        </li>
      </div>
    )
  }
}
export default FaqItem
