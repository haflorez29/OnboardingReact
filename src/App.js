import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Welcome } from './components/Welcome';

function App() {
  return (
    <div className="container-fluid">
      <header>
       <Welcome/>
      </header>
    </div>
  );
}

export default App;
