import React, { Component } from "react";
// import "./App.css";
import Ninjas from "./Ninjas";

class App extends Component {
  state = {
    ninjas: [
      { name: "Ryu", age: 30, belt: "black", id: 1 },
      { name: "Amana", age: 20, belt: "black", id: 2 },
      { name: "Ram", age: 25, belt: "black", id: 3 },
    ],
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> My first react app</h1>
          <p> Welcome </p>
        </header>
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
