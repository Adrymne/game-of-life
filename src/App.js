import React from 'react';
import Board from './app/Board';
import Options from './app/Options';
import SourceLink from './app/SourceLink';
import './App.css';

const App = () => (
  <div className="app-container">
    <Board />
    <div className="app-container__options">
      <Options />
    </div>
    <SourceLink />
  </div>
);

export default App;
