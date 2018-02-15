import React from 'react';
import './Cell.css';

const state = () => {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return 'live';
    case 1:
      return 'dead';
    case 2:
      return 'unknown';
    default:
      return '';
  }
};

const Cell = ({ contents }) => (
  <div className={`board__cell ${state()}`}>{contents}</div>
);

export default Cell;
