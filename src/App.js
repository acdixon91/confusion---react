import React, { Component } from "react";
import Main from "./components/MainComponent";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.StrictMode>
        <div>
          <Main />
        </div>
      </React.StrictMode>
    );
  }
}

export default App;

/* Old code */

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//       </header>
//     </div>
//   );
// }
