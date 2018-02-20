import * as sut from './selectors';

it('getBoard', () => {
  const subject = sut.getBoard;
  const state = { board: { size: { rows: 3, cols: 3 } } };

  const result = subject(state);

  expect(result).toEqual([
    [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }],
    [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }],
    [{ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }]
  ]);
});
