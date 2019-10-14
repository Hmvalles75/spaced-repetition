import React, { Component } from "react";

const initialState = {
  totalScore: 0,
  wordCorrectCount: 0,
  wordIncorrectCount: 0,
  nextWord: null,
  guess: null,
  preWord: null,
  isCorrect: null,
  answer: null,
  error: null,
  isResultDisplayed: false
};

const LearningContext = React.createContext({
  ...initialState,
  setError: () => {},
  clearError: () => {},
  setNextWord: () => {},
  SetTotalScore: () => {},
  SetWordCorrectCount: () => {},
  setWordIncorrectCount: () => {},
  setGuess: () => {},
  setAnswer: () => {},
  setIsCorrect: () => {},
  reset: () => {},
  setIsResultDisplayed: () => {}
});

export default LearningContext;

export class LearningProvider extends Component {
  state = {
    ...initialState
  };

  setError = error => {
    console.log(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setTotalScore = totalScore => {
    this.setState({ totalScore });
  };

  setWordCorrectCount = wordCorrectCount => {
    this.setState({ wordCorrectCount });
  };

  setWordIncorrectCount = wordIncorrectCount => {
    this.setState({ wordIncorrectCount });
  };
}
