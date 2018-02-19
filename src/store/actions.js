export const TOGGLE_CELL = 'TOGGLE_CELL';
export const toggleCell = cell => ({ type: TOGGLE_CELL, payload: cell });

export const CLEAR_BOARD = 'CLEAR_BOARD';
export const clearBoard = () => ({ type: CLEAR_BOARD });

export const RESIZE_BOARD = 'RESIZE_BOARD';
export const resizeBoard = (rows, cols) => ({
  type: RESIZE_BOARD,
  payload: { rows, cols }
});
