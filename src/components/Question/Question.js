import React from 'react'
// import LanguageApiService from '../../services/language-api-service'
import { WordsContext } from '../../contexts/Words'
import Score from '../Score/Score'
import './Question.css'

export default class Question extends React.Component {
  static contextType = WordsContext

  // check if correct, and move to <Answer /> component
  handleSubmit = e => {
    e.preventDefault()
    this.props.handleSubmitAnswer()
  }

  render() {
    // console.log(this.context)
    return (
      <div className="Question">
        <h2>Translate the word:</h2>
          <span className="Question-word">
            {this.context.wordObj ? this.context.wordObj.nextWord : ''}
          </span>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="learn-guess-input">
            What's the translation for this word?
          </label>
          <input type="text" id="learn-guess-input" name="username" required />
          <button type="submit">Submit your answer</button>
        </form>
        <Score />
        <div className="Question-info">
          <p>
            You have answered this word correctly{' '}
            {this.context.wordObj ? this.context.wordObj.wordCorrectCount : ''}{' '}
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
      </div>
    )
  }
}
