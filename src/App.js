import React from 'react';
import Board from './app/Board';
import Options from './app/Options';
import './App.css';

const App = () => (
  <div className="app-container">
    <Board />
    <div className="app-container__options">
      <Options />
    </div>
  </div>
);

export default App;
