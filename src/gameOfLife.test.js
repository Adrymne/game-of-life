import * as sut from './gameOfLife';

it('neighbours', () => {
  const subject = sut.neighbours;
  const cell = { x: 1, y: 2 };

  const result = subject(cell);

  // prettier-ignore
  expect(result).toEqual([
    { x: 0, y: 1 }, { x: 0, y: 2 }, { x: 0, y: 3 },
    { x: 1, y: 1 },                 { x: 1, y: 3 },
    { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 },
  ]);
});

it('frequencies', () => {
  const subject = sut.frequencies;
  const cells = [{ x: 1, y: 1 }, { x: 0, y: 1 }, { x: 1, y: 1 }];

  const result = subject(cells);

  expect(result).toEqual([
    { cell: { x: 0, y: 1 }, times: 1 },
    { cell: { x: 1, y: 1 }, times: 2 }
  ]);
});

describe('willSurvive', () => {
  const subject = sut.willSurvive;
  const toKey = (x, y) => JSON.stringify({ x, y });

  it('lives with 3 live neighbours', () => {
    const prevBoard = 'blah';
    const data = { cell: 'blah blah', times: 3 };

    const result = subject(prevBoard)(data);

    expect(result).toBe(true);
  });

  it('lives with 2 live neighbours if it was also previously alive', () => {
    const prevBoard = { [toKey(1, 1)]: true };
    const data = { cell: { x: 1, y: 1 }, times: 2 };

    const result = subject(prevBoard)(data);

    expect(result).toBe(true);
  });

  it('dies otherwise', () => {
    const prevBoard = 'blah blah';
    const data = n => ({ cell: 'cell', times: n });

    expect(subject(prevBoard)(data(0))).toBe(false);
    expect(subject(prevBoard)(data(1))).toBe(false);
    expect(subject(prevBoard)(data(4))).toBe(false);
    expect(subject(prevBoard)(data(5))).toBe(false);
    expect(subject(prevBoard)(data(6))).toBe(false);
    expect(subject(prevBoard)(data(7))).toBe(false);
    expect(subject(prevBoard)(data(8))).toBe(false);
  });
});

it('fromBoard', () => {
  const subject = sut.fromBoard;
  const toKey = (x, y) => JSON.stringify({ x, y });
  const board = {
    [toKey(0, 1)]: true,
    [toKey(1, 0)]: false
  };

  const result = subject(board);

  expect(result).toEqual([{ x: 0, y: 1 }]);
});

describe('gameOfLife', () => {
  const subject = sut.default;
  const toKey = (x, y) => JSON.stringify({ x, y });

  /*
  - - -    - x -    - - -
  x x x => - x - => x x x
  - - -    - x -    - - -
  */
  it('blinker oscillator', () => {
    const board = {
      [toKey(-1, 0)]: true,
      [toKey(0, 0)]: true,
      [toKey(1, 0)]: true
    };

    const result = subject(board);

    expect(result).toEqual({
      [toKey(0, -1)]: true,
      [toKey(0, 0)]: true,
      [toKey(0, 1)]: true
    });
    expect(subject(result)).toEqual(board);
  });

  /*
  x x - -    x x - -    x x - -
  x x - -    x - - -    x x - -
  - - x x => - - - x => - - x x
  - - x x    - - x x    - - x x
  */
  it('beacon oscillator', () => {
    // prettier-ignore
    const board = {
      [toKey(0, 2)]: true, [toKey(0, 3)]: true, [toKey(1, 2)]: true, [toKey(1, 3)]: true,
      [toKey(2, 0)]: true, [toKey(2, 1)]: true, [toKey(3, 0)]: true, [toKey(3, 1)]: true,
    }

    const result = subject(board);

    // prettier-ignore
    expect(result).toEqual({
      [toKey(0, 2)]: true, [toKey(0, 3)]: true, [toKey(1, 3)]: true,
      [toKey(2, 0)]: true, [toKey(3, 0)]: true, [toKey(3, 1)]: true,
    });
    expect(subject(result)).toEqual(board);
  });
});
