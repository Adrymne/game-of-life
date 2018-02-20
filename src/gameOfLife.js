import {
  compose,
  sequence,
  of,
  transduce,
  reject,
  equals,
  map,
  append,
  pipe,
  sort,
  groupWith,
  contains,
  prop,
  chain,
  filter
} from 'ramda';
// Based on: https://rhnh.net/2012/01/02/conway's-game-of-life-in-haskell/
/*
Algorithm:
1. For each live cell, generate its neighbours
2. Accumulate all the neighbours into a single array
3. Count how many times each Cell appeared as a neighbour (i.e. how mnay live neighbours it has)
4. Cell lives if:
  - it has 3 neighbours, OR
  - it has 2 neighbours and was previously alive
  Otherwise, it dies
*/

// based on: https://gist.github.com/artisin/6fd1e9305f6a1ce087df
const OFFSETS = sequence(of, [[-1, 0, 1], [-1, 0, 1]]);
// neighbours :: Cell -> [Cell]
export const neighbours = cell =>
  transduce(
    compose(
      reject(equals([0, 0])),
      map(([dx, dy]) => ({ x: cell.x + dx, y: cell.y + dy }))
    ),
    (xs, x) => append(x, xs),
    [],
    OFFSETS
  );

const compareCoord = (a, b) => a - b;
const compareCells = (a, b) => compareCoord(a.x, b.x) || compareCoord(a.y, b.y);
// frequencies :: [Cell] -> [{ cell :: Cell, times :: Int }]
export const frequencies = pipe(
  sort(compareCells),
  groupWith(equals),
  map(xs => ({ cell: xs[0], times: xs.length }))
);

// willSurvive :: [Cell] -> { cell :: Cell, times :: Int } -> Bool
export const willSurvive = liveCells => ({ cell, times }) =>
  times === 3 || (times === 2 && contains(cell, liveCells));

// survivors :: [Cell] -> [{ cell :: Cell, times :: Int }] -> [Cell]
const survivors = liveCells =>
  transduce(
    compose(filter(willSurvive(liveCells)), map(prop('cell'))),
    (xs, x) => append(x, xs),
    []
  );

// gameOfLife :: [Cell] -> [Cell]
export default liveCells =>
  pipe(chain(neighbours), frequencies, survivors(liveCells))(liveCells);
