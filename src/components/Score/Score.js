import React, { Component } from 'react'
import { WordsContext } from '../../contexts/Words'

class Score extends Component {
  static contextType = WordsContext

  render() {
    // console.log(this.context)
    return (
      <section className="Score">
        <p>
          Your total score is:{' '}
          {this.context.wordObj
            ? this.context.wordObj.totalScore
            : 'null'}
        </p>
      </section>
    )
  }
}

export default Score
