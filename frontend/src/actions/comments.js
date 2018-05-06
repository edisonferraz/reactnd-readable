import Api from '../api';
import {
  FETCH_COMMENTS_SUCCESS,
  ADD_COMMENT_SUCCESS,
  DELETE_COMMENT_SUCCESS,
  UPDATE_COMMENT_SUCCESS,
  VOTE_COMMENT_SUCCESS,
} from './constants';

const fetchCommentsSuccess = comments => ({
  type: FETCH_COMMENTS_SUCCESS,
  comments,
});

export const getComments = postId => dispatch => {
  Api.getComments(postId).then(comments => {
    return dispatch(fetchCommentsSuccess(comments));
  });
};

const addCommentSuccess = comment => ({
  type: ADD_COMMENT_SUCCESS,
  comment,
});

export const addComment = data => dispatch => {
  return new Promise(resolve => {
    Api.addComment(data).then(comment => dispatch(addCommentSuccess(comment)));
    resolve();
  });
};

const updateCommentSuccess = comment => ({
  type: UPDATE_COMMENT_SUCCESS,
  comment,
});

export const updateComment = data => dispatch => {
  return new Promise(resolve => {
    Api.updateComment(data).then(comment =>
      dispatch(updateCommentSuccess(comment))
    );
    resolve();
  });
};

const deleteCommentSuccess = comment => ({
  type: DELETE_COMMENT_SUCCESS,
  comment,
});

export const deleteComment = commentId => dispatch =>
  Api.deleteComment(commentId).then(comment =>
    dispatch(deleteCommentSuccess(comment))
  );

const voteCommentSuccess = comment => ({
  type: VOTE_COMMENT_SUCCESS,
  comment,
});

export const voteComment = (commentId, vote) => dispatch =>
  Api.voteComment(commentId, vote).then(comment =>
    dispatch(voteCommentSuccess(comment))
  );
