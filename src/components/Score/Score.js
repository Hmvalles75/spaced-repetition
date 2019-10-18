import React, { Component } from "react";
import { WordContext } from "../../contexts/Word";

class Score extends Component {
  static contextType = WordContext;

  render() {
    // console.log(this.context);
    return (
      <section className="DisplayScore">
        <p>
          Your total score is:{" "}
          {this.context.guessRes ? this.context.guessRes.totalScore : "null"}
        </p>
      </section>
    );
  }
}

export default Score;
