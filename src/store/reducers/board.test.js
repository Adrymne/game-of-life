import subject from './board';
import {
  toggleCell,
  clearBoard,
  resizeBoard,
  advanceBoard
} from 'store/actions';

const toKey = (x, y) => JSON.stringify({ x, y });

describe('TOGGLE_CELL', () => {
  it('dead cell', () => {
    const state = { liveCells: { [toKey(1, 1)]: true } };
    const action = toggleCell({ x: 0, y: 0 });

    const result = subject(state, action);

    expect(result).toEqual({
      liveCells: { [toKey(1, 1)]: true, [toKey(0, 0)]: true }
    });
  });

  it('live cell', () => {
    const state = { liveCells: { [toKey(0, 0)]: true, [toKey(0, 1)]: true } };
    const action = toggleCell({ x: 0, y: 0 });

    const result = subject(state, action);

    expect(result).toEqual({
      liveCells: { [toKey(0, 0)]: false, [toKey(0, 1)]: true }
    });
  });
});

it('CLEAR_BOARD', () => {
  const state = { liveCells: 'blah' };
  const action = clearBoard();

  const result = subject(state, action);

  expect(result).toEqual({ liveCells: {} });
});

it('RESIZE_BOARD', () => {
  const state = {
    liveCells: {
      [toKey(11, 3)]: true,
      [toKey(1, 19)]: true,
      [toKey(9, 20)]: true
    },
    size: 'blah'
  };
  const action = resizeBoard(20, 10);

  const result = subject(state, action);

  expect(result).toEqual({
    liveCells: { [toKey(1, 19)]: true },
    size: { rows: 20, cols: 10 }
  });
});

it('ADVANCE_BOARD', () => {
  const state = {
    liveCells: {
      [toKey(0, 0)]: true,
      [toKey(-1, 0)]: true,
      [toKey(1, 0)]: true
    }
  };
  const action = advanceBoard();

  const result = subject(state, action);

  expect(result).toEqual({
    liveCells: {
      [toKey(0, 0)]: true,
      [toKey(0, -1)]: true,
      [toKey(0, 1)]: true
    }
  });
});
