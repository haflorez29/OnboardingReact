import React from "react";
import logo from "./logo.svg";
import "./App.css";
import  Welcome from "./components/Welcome";
import Imagine from "./components/Imagine";

function App() {
  return (
    <div className="container-fluid">
      <header>
        <Welcome />
        <Imagine/>
      </header>
    </div>
  )
}

export default App;
