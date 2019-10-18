import React from "react";
import LanguageApiService from "../../services/language-api-service";
import { WordContext } from "../../contexts/Word";
import Score from "../Score/Score";
import "./Question.css";

export default class Question extends React.Component {
  static contextType = WordContext;

  // check if correct, and move to <Answer /> component
  handleSubmit = async e => {
    e.preventDefault();
    const guess = e.target.guess.value;
    try {
      const guessRes = await LanguageApiService.postListGuess({ guess: guess });
      this.context.setGuessRes({ ...guessRes });
      this.props.handleSubmitAnswer(guess);
      console.log("guessRes:", guessRes);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    // console.log(this.context)
    return (
      <div className="Question">
        <h2>Translate the word:</h2>
        <span className="Question-word">
          {this.context.guessRes ? this.context.guessRes.nextWord : this.context.wordObj?this.context.wordObj.nextWord:''}
        </span>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="learn-guess-input">
            What's the translation for this word?
          </label>
          <input type="text" id="learn-guess-input" name="guess" required />
          <button type="submit">Submit your answer</button>
        </form>
        <Score />
        <div className="Question-info">
          <p>
            You have answered this word correctly{" "}
            {this.context.wordObj ? this.context.wordObj.wordCorrectCount : ""}{" "}
            times.
          </p>
          <p>
            You have answered this word incorrectly{" "}
            {this.context.wordObj
              ? this.context.wordObj.wordIncorrectCount
              : ""}{" "}
            times.
          </p>
        </div>
      </div>
    );
  }
}
