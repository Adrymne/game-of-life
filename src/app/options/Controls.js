import React from 'react';
import { Button } from 'reactstrap';
import FA from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faPause,
  faSyncAlt
} from '@fortawesome/fontawesome-free-solid';
import './Controls.css';
import { applySpec } from 'ramda';
import { connect } from 'react-redux';
import { isActive } from 'store/selectors';
import * as actions from 'store/actions';

const Controls = ({ isActive, clearBoard, toggleActive }) => (
  <div className="options__controls">
    <Button outline color="success" title="Start game" onClick={toggleActive}>
      <FA icon={isActive ? faPause : faPlay} />
    </Button>
    <Button outline color="warning" title="Clear board" onClick={clearBoard}>
      <FA icon={faSyncAlt} />
    </Button>
  </div>
);

const mapStateToProps = applySpec({ isActive });
export default connect(mapStateToProps, actions)(Controls);
