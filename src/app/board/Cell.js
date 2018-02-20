import React from 'react';
import './Cell.css';
import { applySpec } from 'ramda';
import { connect } from 'react-redux';
import { isLive } from 'store/selectors';
import * as actions from 'store/actions';

const Cell = ({ isLive, toggleCell, cell }) => (
  <div
    className={`board__cell ${isLive ? 'live' : 'dead'}`}
    onClick={() => toggleCell(cell)}
  />
);

const mapStateToProps = applySpec({ isLive });
export default connect(mapStateToProps, actions)(Cell);
