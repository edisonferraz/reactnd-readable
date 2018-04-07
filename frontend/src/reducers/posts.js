import { FETCH_POSTS_SUCCESS, CREATE_POST_SUCCESS } from 'actions/constants';

function posts(state = [], action) {
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      return action.posts;
    case CREATE_POST_SUCCESS:
      return [...state, action.post];
    default:
      return state;
  }
}

export default posts;
