import React from 'react';
import routes from "./Routes";
import axios from "axios";
import Nav from "./components/Nav/Nav";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <h1>Something Dope Is Forming</h1>
      {routes}
    </div>
  );
}

let styles = {
  bg: {
    backgroundColor: '#696969',
    height: '100vh',
    width: '100vw'

  }
}

export default App;
