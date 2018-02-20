import React from 'react';
import Cell from './board/Cell';
import makeSquare from 'components/makeSquare';
import './Board.css';
import { applySpec } from 'ramda';
import { connect } from 'react-redux';
import { getBoard } from 'store/selectors';

const Board = ({ board }) => (
  <div className="board">
    {board.map((row, y) => (
      <div className="board__row" key={y}>
        {row.map((cell, x) => (
          <div className="board__col" key={x}>
            <Cell cell={cell} />
          </div>
        ))}
      </div>
    ))}
  </div>
);

const mapStateToProps = applySpec({ board: getBoard });
export default makeSquare(connect(mapStateToProps)(Board));
