import { BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react';
import LoginContainer from "./components/AuthComponent";
import HomeContainer from "./components/HomeComponent";
import './App.css';
import './QuoteGenerator.css';

function App() {
  return (
    <div>
      <Router>
        <Route path="/" component={LoginContainer} exact />
        <Route path="/home" component={HomeContainer} exact />
      </Router>
    </div>
  );
}

export default App;
