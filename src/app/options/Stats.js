import React from 'react';
import './Stats.css';

const dimensions = { rows: 30, cols: 30 };
const generationCount = 234;

const Stats = () => (
  <div className="options__stats">
    <div>{`Size: ${dimensions.rows} x ${dimensions.cols}`}</div>
    <div>Generations: {generationCount}</div>
  </div>
);

export default Stats;
