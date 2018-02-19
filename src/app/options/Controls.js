import React from 'react';
import { Button } from 'reactstrap';
import FA from '@fortawesome/react-fontawesome';
import { faPlay, faSyncAlt } from '@fortawesome/fontawesome-free-solid';
import './Controls.css';
import { connect } from 'react-redux';
import { clearBoard } from 'store/actions';

const Controls = ({ clearBoard }) => (
  <div className="options__controls">
    <Button outline color="success" title="Start game">
      <FA icon={faPlay} />
    </Button>
    <Button outline color="warning" title="Clear board" onClick={clearBoard}>
      <FA icon={faSyncAlt} />
    </Button>
  </div>
);

export default connect(undefined, { clearBoard })(Controls);
