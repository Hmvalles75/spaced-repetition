import React, { Component } from 'react'
import { WordContext } from '../../contexts/Word'
import Score from '../Score/Score'

class Answer extends Component {
  static contextType = WordContext

  correct = () => {
    // console.log('correct():', this.context.wordObj)
    return (
      <div className="DisplayFeedback">
        <h2>You were correct! :D</h2>
        <p >
          The correct translation for {this.context.wordObj.nextWord} was {this.context.guessRes.answer} and you chose {this.props.guess}!
          {/* The correct translation for {Testnextword} was 
          {test-answer-from-incorrect-guess} and you chose {test-guess-incorrect}! */}
        </p>
      </div>
    )
  }

  incorrect = () => {
    return (
      <div className="DisplayFeedback">
        <h2>Good try, but not quite right :(</h2>
        <p>
          The correct translation for {this.context.wordObj.nextWord} was{' '}
          {this.context.guessRes.answer} and you chose {this.props.guess}!
        </p>
      </div>
    )
  }

  componentDidMount(){
    if (this.context.guessRes){
      this.context.setWordObj({...this.context.wordObj, totalScore:this.context.guessRes.totalScore})
    }
  }

  render() {
    // console.log(this.context)
    if (this.context.guessRes) {
      return (
        <section className="Answer">
          {this.context.guessRes.isCorrect ? this.correct() : this.incorrect()}
          <button onClick={this.props.handleNextQuestion}>Try another word!</button>
          <Score />
          <div className="Question-info">
            <p>
              You have answered this word correctly{' '}
              {this.context.wordObj
                ? this.context.wordObj.wordCorrectCount
                : ''}{' '}
              times.
            </p>
            <p>
              You have answered this word incorrectly{' '}
              {this.context.wordObj
                ? this.context.wordObj.wordIncorrectCount
                : ''}{' '}
              times.
            </p>
          </div>
        </section>
      )
    }
    return (
      <section className="Answer">
        <p>error...</p>
      </section>
    )
  }
}

export default Answer
