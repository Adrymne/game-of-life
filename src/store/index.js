import { createStore, compose } from 'redux';
import { install } from 'redux-loop';
import rootReducer from './reducers';
import { toggleActive } from 'store/actions';

const store = createStore(
  rootReducer,
  compose(
    install(),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : v => v
  )
);
store.dispatch(toggleActive());

export default store;
