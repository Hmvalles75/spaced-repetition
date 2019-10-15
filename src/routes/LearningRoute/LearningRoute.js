import React, { Component } from 'react'
import Question from '../../components/Question/Question'
import Answer from '../../components/Answer/Answer'
import Score from '../../components/Score/Score'
// import {WordsContext} from '../../contexts/Words'
// import { withRouter } from "react-router-dom";

class LearningRoute extends Component {
  // static contextType = WordsContext
  state = { qOra: true } // true whenever your on a question

  handleSubmitAnswer = () => {
    this.setState({ qOra: false })
  }

  handleNextQuestion = () => {
    this.setState({ qOra: true })
  }

  render() {
    // console.log(this.context)
    return (
      <section className="LearningRoute">
        {/* <h2>Learning Page</h2> */}
        {this.state.qOra ? (
          <Question handleSubmitAnswer={this.handleSubmitAnswer} />
        ) : (
          <Answer handleNextQuestion={this.handleNextQuestion} />
        )}
        {/* <Score /> */}
      </section>
    )
  }
}

export default LearningRoute
