import '../styles/App.css';
import React, { Component } from "react";
import Board from "./Board";

class App extends Component {
  render() {
    return (
      <div className="App">
        <img className="Header"
             src="./assets/icons/trello-clone-logo.svg"
             alt="Trello Clone Icon"></img>
        <Board>
        </Board>
      </div>
    );
  }
}

export default App;
