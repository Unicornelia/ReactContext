import React, { Component } from 'react'
import ReactDOM from "react-dom";
import LoginPage from './LoginPage';
import App from './App'
import UserContext from './UserContext';
import { FAKE_USER } from './api';
import "./index.css";

import * as serviceWorker from "./serviceWorker";


class Root extends Component {
  state = {
    currentUser: null
  };

  handleLogin = user => {
    this.setState({ currentUser: user })
  }

  handleLogout = () => {
    this.setState({ currentUser: null })
  }

  render() {
    return (
      <UserContext.Provider
        value={{
          user: this.state.currentUser,
          onLogin: this.handleLogin,
          onLogout: this.handleLogout
        }}
      >

        {this.state.currentUser ? (
          <App />
        ) : (
          <LoginPage />
        )}
      </UserContext.Provider>
    )
  }
}

ReactDOM.render(<Root />, document.querySelector("#root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
