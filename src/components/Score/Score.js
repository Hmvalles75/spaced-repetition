import React, { Component } from "react";
import { WordContext } from "../../contexts/Word";

class Score extends Component {
  static contextType = WordContext;

  render() {
    // console.log(this.context);
    return (
      <section className="DisplayScore">
        <p className="small-total">
          Your total score is:{" "}
          {this.context.guessRes ? this.context.guessRes.totalScore : this.context.wordObj?this.context.wordObj.totalScore:''}
        </p>
      </section>
    );
  }
}

export default Score;
