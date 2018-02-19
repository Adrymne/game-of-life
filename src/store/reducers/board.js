import { evolve, pipe, over, lensProp, not, pickBy } from 'ramda';
import { createReducer } from 'utils';
import { toKey, fromKey } from 'types';
import { TOGGLE_CELL, CLEAR_BOARD, RESIZE_BOARD } from 'store/actions';

// lensCell :: Cell -> Lens
const lensCell = pipe(toKey, lensProp);

const toggleCell = (state, { payload: cell }) =>
  evolve({ liveCells: over(lensCell(cell), not) }, state);

const isInBounds = (cell, size) => cell.x < size.rows && cell.y < size.cols;
// killOutsiders :: { rows :: Int, cols :: Int } -> Board -> Board
const killOutsiders = size =>
  pickBy((isLive, key) => isLive && isInBounds(fromKey(key), size));

const resizeBoard = (state, { payload: size }) =>
  evolve({ liveCells: killOutsiders(size), size: () => size }, state);

const DEFAULT = {
  liveCells: {},
  size: { rows: 50, cols: 50 }
};
export default createReducer(DEFAULT, {
  [TOGGLE_CELL]: toggleCell,
  [CLEAR_BOARD]: evolve({ liveCells: () => ({}) }),
  [RESIZE_BOARD]: resizeBoard
});
