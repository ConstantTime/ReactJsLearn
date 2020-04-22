import React from "react";
// import "./App.css";
import Ninjas from "./Ninjas";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> My first react app</h1>
        <p> Welcome </p>
      </header>
      <Ninjas name="Ryu" age="25" belt="black" />
      <Ninjas name="Ryu" age="30" belt="green" />
    </div>
  );
}

export default App;
