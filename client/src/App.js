import React from 'react';
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';
import { BrowserRouter as Router, Route,Redirect } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
      <Redirect to="/"></Redirect>
    </Router>
  );
}

export default App;
