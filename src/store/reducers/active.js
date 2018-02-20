import { loop, Cmd } from 'redux-loop';
import { not, pipe } from 'ramda';
import { createReducer } from 'utils';
import { TOGGLE_ACTIVE } from 'store/actions';
import { runGame } from 'store/effects';

// run :: State -> (State, Cmd)
const run = isActive =>
  loop(
    isActive,
    isActive
      ? Cmd.run(runGame, { args: [Cmd.getState, Cmd.dispatch] })
      : Cmd.none
  );

const DEFAULT = false;
export default createReducer(DEFAULT, {
  [TOGGLE_ACTIVE]: pipe(not, run)
});
