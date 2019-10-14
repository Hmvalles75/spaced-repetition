import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Wordlist from "../../components/WordList/WordList";
class DashboardRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {}
    }
  };

  startLearning = () => {
    const { history } = this.props;
    history.push("learn");
  };

  render() {
    return (
      <section id="learning-container">
        <Wordlist startLearning={this.startLearning} />
      </section>
    );
  }
}

export default withRouter(DashboardRoute);
