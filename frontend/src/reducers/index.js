import { combineReducers } from 'redux';
import { ADD_POST, ADD_COMMENT } from '../actions';

function posts(state = {}, action) {
  switch (action.type) {
    case ADD_POST:
      return state;
    default:
      return state;
  }
}

function comments(state = {}, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return state;
    default:
      return state;
  }
}

export default combineReducers({ posts, comments });
