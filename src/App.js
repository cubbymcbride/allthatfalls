import React from 'react';
import routes from "./Routes";

import Nav from "./components/Nav/Nav";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      {routes}
    </div>
  );
}

// let styles = {
//   bg: {
//     backgroundColor: '#696969',
//     height: '100vh',
//     width: '100vw'

//   }
// }

export default App;
