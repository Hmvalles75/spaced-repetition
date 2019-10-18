import React, { Component } from "react";
import LanguageApiService from "../../services/language-api-service";
import Question from "../../components/Question/Question";
import Answer from "../../components/Answer/Answer";
// import Score from '../../components/Score/Score'
import { WordContext } from "../../contexts/Word";
// import { withRouter } from "react-router-dom";

class LearningRoute extends Component {
  static contextType = WordContext;
  state = { qOra: true, guess: null, loading: true }; // true whenever your on a question

  handleSubmitAnswer = async guess => {
    // console.log(this.context)
    this.setState({ qOra: false, guess: guess, loading: false });
    // try {
    //   const wordObj = await LanguageApiService.getHead(); // should this be getHead()?
    //   this.context.setWordObj({ ...wordObj });
    //    console.log(wordObj)
    // } catch (e) {
    //   console.log(e);
    // }
    this.setState({ loading: false });
  };

  handleNextQuestion = async () => {
    this.setState({ qOra: true });
    try {
      const wordObj = await LanguageApiService.getHead(); // should this be getHead()?
      this.context.setWordObj({ ...wordObj });
      // console.log(wordObj);
    } catch (e) {
      console.log(e);
    }
    this.setState({ loading: false });
  };

  async componentDidMount() {
    try {
      const wordObj = await LanguageApiService.getHead(); // should this be getHead()?
      this.context.setWordObj({ ...wordObj });
      // console.log(wordObj)
    } catch (e) {
      console.log(e);
    }
    this.setState({ loading: false });
  }

  render() {
    // console.log(this.context)
    return (
      <section className="LearningRoute">
        {/* <h2>Learning Page</h2> */}
        {this.state.qOra ? (
          <Question
            handleSubmitAnswer={this.handleSubmitAnswer}
            guess={this.state.guess}
            toggleLoading={this.toggleLoading}
          />
        ) : (
          <Answer
            handleNextQuestion={this.handleNextQuestion}
            guess={this.state.guess}
            guessRes={this.state.guessRes}
            toggleLoading={this.toggleLoading}
          />
        )}
        {/* <Score /> */}
      </section>
    );
  }
}

export default LearningRoute;
