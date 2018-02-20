import { propOr, identity, curry } from 'ramda';
import { Future } from 'fluture';

export const createReducer = (initial, spec) => (state = initial, action) =>
  propOr(identity, action.type, spec)(state, action);

// runSubscription :: (State -> Future a (Maybe Action)) -> GetState -> Dispatch -> Future a ()
// Helper for creating an Elm-like subscription
export const runSubscription = curry((sub, getState, dispatch) =>
  sub(getState()).chain(action => {
    if (!action) {
      return Future.of(undefined);
    }
    dispatch(action);
    return runSubscription(sub, getState, dispatch);
  })
);
