import React, { Component } from "react";
import { Link } from "react-router-dom";
import TokenService from "../../services/token-service";
import UserContext from "../../contexts/UserContext";
import "./Header.css";

class Header extends Component {
  static contextType = UserContext;

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  renderLogoutLink() {
    return (
      <div className="header-options">
        <p className="display-user">Logged in as: <span className="user-name">{this.context.user.name}</span></p>
        <nav className="logout">
          <Link onClick={this.handleLogoutClick} to="/login">
            Logout
          </Link>
        </nav>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <nav>
        <Link to="/login">Login</Link> <Link to="/register">Sign up</Link>
      </nav>
    );
  }

  render() {
    return (
      <header role="banner">
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
        <h1>
          <Link to="/">Spaced repetition</Link>
        </h1>
      </header>
    );
  }
}

export default Header;
