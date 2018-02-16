import React from 'react';
import Stats from './options/Stats';
import DurationInput from './options/DurationInput';
import Controls from './options/Controls';
import './Options.css';

const Options = () => (
  <div className="options">
    <h1>Game of Life</h1>
    <Stats />
    <div className="options__input">
      <DurationInput />
      <Controls />
    </div>
  </div>
);

export default Options;
