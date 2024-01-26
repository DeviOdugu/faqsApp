// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  constructor(props) {
    super(props)
    const {faqsList} = props
    this.state = {
      faqsList: faqsList.map(eachFaq => ({
        ...eachFaq,
        isClick: true,
      })),
    }
  }

  isClicked = id => {
    this.setState(prevState => ({
      faqsList: prevState.faqsList.map(eachList => {
        if (eachList.id === id) {
          return {
            ...eachList,
            isClick: !eachList.isClick,
          }
        }
        return eachList
      }),
    }))
  }

  render() {
    const {faqsList} = this.state

    return (
      <div className="bg">
        <div className="card-container">
          <h1 className="heading"> FAQs </h1>
          <ul className="lists">
            {faqsList.map(eachList => (
              <FaqItem
                key={eachList.id}
                faqDetails={eachList}
                isClicked={this.isClicked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
