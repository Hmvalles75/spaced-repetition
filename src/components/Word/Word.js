import React from "react";
import "./Word.css";

class Word extends React.Component {
  render() {
    return (
      <div className="word">
        <h4>{this.props.word.original}</h4>
        <p>Correct answer count: {this.props.word.correct_count}</p>
        <p>Incorrect answer count: {this.props.word.incorrect_count}</p>
      </div>
    );
  }
}
export default Word;
