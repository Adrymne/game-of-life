import { createSelector } from 'reselect';
import { map, range, propEq } from 'ramda';
import { toKey } from 'types';
/*
type Cell = { x :: Int, y :: Int }
type Board = Dict Cell Bool
type BoardSize = { rows :: Int, cols :: Int }

type Board = {
  liveCells :: Board,
  size :: BoardSize
}

type State = {
  board :: Board
}
*/
const boardSize = state => state.board.size;
const liveCells = state => state.board.liveCells;

// getBoard :: State -> [[Cell]]
export const getBoard = createSelector(boardSize, ({ rows, cols }) =>
  map(y => map(x => ({ x, y }), range(0, cols)), range(0, rows))
);

// isLive :: State -> Cell -> Bool
export const isLive = (state, { cell }) =>
  propEq(toKey(cell), true, liveCells(state));
