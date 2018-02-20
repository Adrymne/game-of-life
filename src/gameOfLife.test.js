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

  it('lives with 3 live neighbours', () => {
    const liveCells = 'blah';
    const data = { cell: 'blah blah', times: 3 };

    const result = subject(liveCells)(data);

    expect(result).toBe(true);
  });

  it('lives with 2 live neighbours if it was also previously alive', () => {
    const liveCells = [{ x: 1, y: 1 }];
    const data = { cell: { x: 1, y: 1 }, times: 2 };

    const result = subject(liveCells)(data);

    expect(result).toBe(true);
  });

  it('dies otherwise', () => {
    const liveCells = 'blah blah';
    const data = n => ({ cell: 'cell', times: n });

    expect(subject(liveCells)(data(0))).toBe(false);
    expect(subject(liveCells)(data(1))).toBe(false);
    expect(subject(liveCells)(data(4))).toBe(false);
    expect(subject(liveCells)(data(5))).toBe(false);
    expect(subject(liveCells)(data(6))).toBe(false);
    expect(subject(liveCells)(data(7))).toBe(false);
    expect(subject(liveCells)(data(8))).toBe(false);
  });
});

describe('gameOfLife', () => {
  const subject = sut.default;

  /*
  - - -    - x -    - - -
  x x x => - x - => x x x
  - - -    - x -    - - -
  */
  it('blinker oscillator', () => {
    const cells = [{ x: -1, y: 0 }, { x: 0, y: 0 }, { x: 1, y: 0 }];

    const result = subject(cells);

    expect(result).toEqual([{ x: 0, y: -1 }, { x: 0, y: 0 }, { x: 0, y: 1 }]);
    expect(subject(result)).toEqual(cells);
  });

  /*
  x x - -    x x - -    x x - -
  x x - -    x - - -    x x - -
  - - x x => - - - x => - - x x
  - - x x    - - x x    - - x x
  */
  it('beacon oscillator', () => {
    // prettier-ignore
    const cells = [
      { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 1, y: 2 }, { x: 1, y: 3 },
      { x: 2, y: 0 }, { x: 2, y: 1 }, { x: 3, y: 0 }, { x: 3, y: 1 }
    ];

    const result = subject(cells);

    // prettier-ignore
    expect(result).toEqual([
      { x: 0, y: 2 }, { x: 0, y: 3 }, { x: 1, y: 3 },
      { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 3, y: 1 }
    ]);
    expect(subject(result)).toEqual(cells);
  });
});
