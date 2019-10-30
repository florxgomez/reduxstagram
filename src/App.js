import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Single from './components/Single';
import Header from "./components/Header";
import home from './pages/home'

const App = () => {
  
 
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <Header />
      <Switch>
      <Route exact path='/' component={home} />
      <Route exact path="/view/:postId" component={Single} />
      </Switch>
    </Router>
  );
};

export default App;
