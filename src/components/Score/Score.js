import React, { Component } from 'react'
import { WordContext } from '../../contexts/Word'

class Score extends Component {
  static contextType = WordContext

  render() {
    // console.log(this.context)
    return (
      <section className="DisplayScore">
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
