import React from 'react';
import './Stats.css';
import { connect } from 'react-redux';
import { applySpec } from 'ramda';
import { generationCount } from 'store/selectors';

const Stats = ({ generationCount }) => (
  <div className="options__stats">
    <div>Generations: {generationCount}</div>
  </div>
);

export default connect(applySpec({ generationCount }))(Stats);
