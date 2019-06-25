import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from './components/Nav/Nav'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
      <h1>Something Dope Is Forming</h1>
      </Router>
    </div>
  );
}

export default App;
