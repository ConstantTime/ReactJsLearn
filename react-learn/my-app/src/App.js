import React, { Component } from "react";
// import "./App.css";
import Ninjas from "./Ninjas";
import AddNinja from "./AddNinja";

class App extends Component {
  state = {
    ninjas: [
      { name: "Ryu", age: 30, belt: "black", id: 1 },
      { name: "Amana", age: 20, belt: "black", id: 2 },
      { name: "Ram", age: 25, belt: "black", id: 3 },
    ],
  };

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas,
    });
  };

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter((ninja) => {
      return ninja.id !== id;
    });
    this.setState({
      ninjas: ninjas,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> My first react app</h1>
          <p> Welcome </p>
        </header>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
