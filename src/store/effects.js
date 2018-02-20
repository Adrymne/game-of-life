import Future from 'fluture';
import { runSubscription } from 'utils';
import { isActive } from 'store/selectors';
import { advanceBoard } from 'store/actions';

const UPDATE_DELAY = 100; //ms

const gameSub = runSubscription(
  state =>
    isActive(state)
      ? Future.after(UPDATE_DELAY, advanceBoard())
      : Future.of(undefined)
);
export const runGame = (getState, dispatch) =>
  gameSub(getState, dispatch).promise();
