import {
  FETCH_COMMENTS_SUCCESS,
  ADD_COMMENT_SUCCESS,
  UPDATE_COMMENT_SUCCESS,
  DELETE_COMMENT_SUCCESS,
  VOTE_COMMENT_SUCCESS,
} from 'actions/constants';

function comments(state = [], action) {
  switch (action.type) {
    case FETCH_COMMENTS_SUCCESS:
      return action.comments;

    case ADD_COMMENT_SUCCESS:
      return [...state, action.comment];

    case UPDATE_COMMENT_SUCCESS:
      return [...state.filter(c => c.id !== action.comment.id), action.comment];

    case DELETE_COMMENT_SUCCESS:
      return [...state.filter(c => c.id !== action.comment.id)];

    case VOTE_COMMENT_SUCCESS:
      return [...state.filter(c => c.id !== action.comment.id), action.comment];

    default:
      return state;
  }
}

export default comments;
