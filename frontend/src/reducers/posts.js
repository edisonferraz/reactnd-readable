import {
  FETCH_POSTS_SUCCESS,
  FETCH_POST_SUCCESS,
  CREATE_POST_SUCCESS,
  DELETE_POST_SUCCESS,
  EDIT_POST_SUCCESS,
  VOTE_POST_SUCCESS,
} from 'actions/constants';

function posts(state = [], action) {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return action.posts;

    case FETCH_POST_SUCCESS:
      return [{ ...action.post }];

    case CREATE_POST_SUCCESS:
      return action.post;

    case EDIT_POST_SUCCESS:
      return [{ ...action.post }];

    case DELETE_POST_SUCCESS:
      return [...state.filter(s => s.id !== action.post.id)];

    case VOTE_POST_SUCCESS:
      return [...state.filter(c => c.id !== action.post.id), action.post];

    default:
      return state;
  }
}

export default posts;
