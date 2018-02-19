import React from 'react';
import './Stats.css';

const generationCount = 234;

const Stats = () => (
  <div className="options__stats">
    <div>Generations: {generationCount}</div>
  </div>
);

export default Stats;
