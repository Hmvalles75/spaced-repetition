import React, { Component } from "react";
import { Link } from "react-router-dom";
import LanguageApiService from "../../services/language-api-service";
import UserContext from "../../contexts/UserContext";

import "./Dashboard.css";

class Dashboard extends Component {
  static contextType = UserContext;

  componentDidMount() {
    setTimeout(() => {
      this.setState({ error: null });
      LanguageApiService.getUserInfo()
        .then(res => {
          this.context.setLanguage(res.language);
          this.context.setWords(res.words);
        })
        .catch(res => {
          this.setState({ error: res.error });
        });
    }, 200);
  }

  renderUserInfo = () => {
    return <p>{this.context.user.name}'s stats:</p>;
  };

  renderLanguageInfo = () => {
    const { language = {} } = this.context;
    return (
      <div>
        <h2>Learn {language.name}</h2>
        <p>Total correct answers: {language.total_score}</p>
      </div>
    );
  };

  renderSubHeading = () => {
    const { words = [] } = this.context;
    const list = words.map(word => {
      return (
        <li key={word.id} className="wordListItem">
          <h4>{word.original}</h4>
          correct answer count: {word.correct_count}
          <br />
          incorrect answer count: {word.incorrect_count}
        </li>
      );
    });
    console.log(this.context.words);
    return (
      <div>
        <h3>Words to practice:</h3>
        <ul className="wordlist">{list}</ul>
      </div>
    );
  };

  render() {
    return (
      <div>
        <p className="dashboard">Dashboard</p>

        {this.renderLanguageInfo()}
        {this.renderUserInfo()}
        {this.renderSubHeading()}
        <Link className="practiceButton" to="/learn">
          Start practicing
        </Link>
        <div className="empty"></div>
      </div>
    );
  }
}

export default Dashboard;
