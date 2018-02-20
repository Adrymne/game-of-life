import {
  evolve,
  pipe,
  over,
  lensProp,
  not,
  pickBy,
  sequence,
  of,
  transduce,
  filter,
  map,
  range,
  set
} from 'ramda';
import gameOfLife from 'gameOfLife';
import { createReducer } from 'utils';
import { toKey, fromKey } from 'types';
import {
  TOGGLE_CELL,
  CLEAR_BOARD,
  RESIZE_BOARD,
  ADVANCE_BOARD
} from 'store/actions';

// REDUCERS

// lensCell :: Cell -> Lens
const lensCell = pipe(toKey, lensProp);

const toggleCell = (state, { payload: cell }) =>
  evolve({ liveCells: over(lensCell(cell), not) }, state);

// isInBounds :: (Cell, BoardSize) -> Bool
const isInBounds = (cell, size) => cell.x < size.cols && cell.y < size.rows;
// killOutsiders :: BoardSize -> Board -> Board
const killOutsiders = size =>
  pickBy((isLive, key) => isLive && isInBounds(fromKey(key), size));
const resizeBoard = (state, { payload: size }) =>
  evolve({ liveCells: killOutsiders(size), size: () => size }, state);

// INITIAL STATE

// randomIsLive :: () -> Bool
const randomIsLive = () => Math.random() < 0.15;
// generateCoords :: BoardSize -> [[Int, Int]]
// based on: https://gist.github.com/artisin/6fd1e9305f6a1ce087df
const generateCoords = ({ rows, cols }) =>
  sequence(of, [range(0, rows), range(0, cols)]);
// randomizeBoard :: BoardSize -> Board
const randomizeBoard = size =>
  transduce(
    pipe(filter(randomIsLive), map(([x, y]) => lensCell({ x, y }))),
    (board, lens) => set(lens, true, board),
    {},
    generateCoords(size)
  );

const DEFAULT_SIZE = { rows: 50, cols: 50 };
const DEFAULT = {
  liveCells: randomizeBoard(DEFAULT_SIZE),
  size: DEFAULT_SIZE
};

export default createReducer(DEFAULT, {
  [TOGGLE_CELL]: toggleCell,
  [CLEAR_BOARD]: evolve({ liveCells: () => ({}) }),
  [RESIZE_BOARD]: resizeBoard,
  [ADVANCE_BOARD]: evolve({ liveCells: gameOfLife })
});
