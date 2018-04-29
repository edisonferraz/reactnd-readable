import {
  FETCH_POSTS_SUCCESS,
  CREATE_POST_SUCCESS,
  DELETE_POST_SUCCESS,
} from 'actions/constants';

function posts(state = [], action) {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return action.posts;
    case CREATE_POST_SUCCESS:
      return [...state, action.post];
    case DELETE_POST_SUCCESS:
      return [...state.filter(s => s.id !== action.post.id)];
    default:
      return state;
  }
}

export default posts;
