import React from 'react';
import Cell from './board/Cell';
import makeSquare from 'components/makeSquare';
import './Board.css';

const row = new Array(30).fill(0);
const board = new Array(30).fill(row);

const Board = () => (
  <div className="board">
    {board.map((row, i) => (
      <div className="board__row" key={i}>
        {row.map((col, j) => (
          <div className="board__col" key={j}>
            <Cell />
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default makeSquare(Board);
