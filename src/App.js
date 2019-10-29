import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Single from './components/Single';
import Header from "./components/Header";
import home from './pages/home'

const App = () => {
  return (
    <Router>
    <Header />
      <Switch>
      <Route exact path='https://florxgomez.github.io/reduxstagram/' component={home} />
      <Route exact path="https://florxgomez.github.io/reduxstagram/view/:postId" component={Single} />
      </Switch>
    </Router>
  );
};

export default App;
