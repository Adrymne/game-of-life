import { propOr, identity } from 'ramda';

export const createReducer = (initial, spec) => (state = initial, action) =>
  propOr(identity, action.type, spec)(state, action);
