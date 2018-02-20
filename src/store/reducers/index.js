import { combineReducers } from 'redux-loop';
import board from './board';
import isActive from './active';
import generationCount from './genenerationCount';

export default combineReducers({ board, isActive, generationCount });
