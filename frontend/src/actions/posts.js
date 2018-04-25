import Api from 'api';
import {
  FETCH_POSTS_SUCCESS,
  CREATE_POST_SUCCESS,
  EDIT_POST_SUCCESS,
} from './constants';

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

const createPostSuccess = post => ({
  type: CREATE_POST_SUCCESS,
  post,
});

export const createPost = data => dispatch =>
  new Promise(resolve => {
    resolve();
    Api.createPost(data).then(post => dispatch(createPostSuccess(post)));
  });

const editPostSuccess = post => ({
  type: EDIT_POST_SUCCESS,
  post,
});

export const editPost = data => dispatch =>
  new Promise(resolve => {
    resolve();
    Api.editPost(data).then(post => dispatch(editPostSuccess(post)));
  });
