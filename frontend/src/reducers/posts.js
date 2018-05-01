import {
  FETCH_POSTS_SUCCESS,
  FETCH_POST_SUCCESS,
  CREATE_POST_SUCCESS,
  DELETE_POST_SUCCESS,
  EDIT_POST_SUCCESS,
} from 'actions/constants';

function posts(state = [], action) {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return action.posts;

    case FETCH_POST_SUCCESS:
      return action.post;

    case CREATE_POST_SUCCESS:
      return action.post;

    case EDIT_POST_SUCCESS:
      return action.post;

    case DELETE_POST_SUCCESS:
      if (Array.isArray(state)) {
        return [...state.filter(s => s.id !== action.post.id)];
      }
      return action.post;

    default:
      return state;
  }
}

export default posts;
