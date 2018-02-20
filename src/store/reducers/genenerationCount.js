import { inc } from 'ramda';
import { createReducer } from 'utils';
import { CLEAR_BOARD, ADVANCE_BOARD } from 'store/actions';

const DEFAULT = 0;
export default createReducer(DEFAULT, {
  [CLEAR_BOARD]: () => 0,
  [ADVANCE_BOARD]: inc
});
