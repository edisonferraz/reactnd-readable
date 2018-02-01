import Api from 'api';
import { FETCH_POSTS_SUCCESS } from './constants';

const fetchPostsSuccess = posts => ({
  type: FETCH_POSTS_SUCCESS,
  posts,
});

export const getPosts = dispatch => dispatch => {
  Api.getPosts().then(posts => dispatch(fetchPostsSuccess(posts)));
};

export const getPostsByCategory = (category, dispatch) => dispatch => {
  Api.getPostsByCategory(category).then(posts =>
    dispatch(fetchPostsSuccess(posts))
  );
};
