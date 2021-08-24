import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from 'react';
import LoginContainer from "./components/AuthComponent";
import HomeContainer from "./components/HomeComponent";
import SearchContainer from "./components/SearchComponent";
import ForgetPasswordContainer from "./components/ForgetPasswordComponent";
import SignupContainer from "./components/Signup";


import './App.css';
import './QuoteGenerator.css';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Switch>
          <Route path="/" component={LoginContainer} exact />
          <Route path="/forget-password" component={ForgetPasswordContainer} exact />
          <Route path="/sign-up" component={SignupContainer} exact />
          <Route path="/home" component={HomeContainer} exact />
          <Route path="/search" component={SearchContainer} exact />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
