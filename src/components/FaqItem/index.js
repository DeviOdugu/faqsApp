// Write your code here.
import './index.css'

const FaqItem = props => {
  const {faqDetails, isClicked} = props
  const {id, questionText, answerText, isClick} = faqDetails
  const click = isClick
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
  const altText = isClick ? 'plus' : 'minus'

  const onClicked = () => {
    isClicked(id)
  }

  return (
    <li className="card">
      <div className="a">
        <h1 className="question"> {questionText} </h1>
        <img
          src={click}
          alt={altText}
          height="15px"
          width="15px"
          onClick={onClicked}
          className="image"
        />
      </div>
      {!isClick && (
        <div>
          <hr />
          <p className="answer"> {answerText} </p>
        </div>
      )}
    </li>
  )
}

export default FaqItem
