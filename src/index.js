import React, { Component } from "react";
import ReactDOM from "react-dom";
import LoginPage from "./LoginPage";
import App from "./App";
import { UserProvider, UserConsumer } from "./UserContext";
import "./index.css";

import * as serviceWorker from "./serviceWorker";

const Root = () => {
  return (
    <UserProvider>
      <UserConsumer>
        {({ user }) => (user ? <App /> : <LoginPage />)}
      </UserConsumer>
    </UserProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
