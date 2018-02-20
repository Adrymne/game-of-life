export const TOGGLE_CELL = 'TOGGLE_CELL';
export const toggleCell = cell => ({ type: TOGGLE_CELL, payload: cell });

export const CLEAR_BOARD = 'CLEAR_BOARD';
export const clearBoard = () => ({ type: CLEAR_BOARD });

export const RESIZE_BOARD = 'RESIZE_BOARD';
export const resizeBoard = (rows, cols) => ({
  type: RESIZE_BOARD,
  payload: { rows, cols }
});

export const TOGGLE_ACTIVE = 'TOGGLE_ACTIVE';
export const toggleActive = () => ({ type: TOGGLE_ACTIVE });

export const ADVANCE_BOARD = 'ADVANCE_BOARD';
export const advanceBoard = () => ({ type: ADVANCE_BOARD });
