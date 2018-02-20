import React from 'react';
import Stats from './options/Stats';
import DimensionsInput from './options/DimensionsInput';
import Controls from './options/Controls';
import './Options.css';

const Options = () => (
  <div className="options">
    <h1>Game of Life</h1>
    <Stats />
    <div className="options__input">
      <DimensionsInput />
      <Controls />
    </div>
  </div>
);

export default Options;
