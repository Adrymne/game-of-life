import { combineReducers } from 'redux-loop';
import board from './board';
import isActive from './active';

export default combineReducers({ board, isActive });
