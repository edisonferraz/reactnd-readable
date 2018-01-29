import Api from 'api';
import { FETCH_POSTS_SUCCESS } from './constants';

const fetchPostsSuccess = posts => ({
  type: FETCH_POSTS_SUCCESS,
  posts,
});

export const getPosts = dispatch => {
  return dispatch => {
    Api.getPosts().then(posts => dispatch(fetchPostsSuccess(posts)));
  };
};
