import { getCategories } from './categories';

import {
  getPosts,
  getPostById,
  getPostsByCategory,
  createPost,
  editPost,
  deletePost,
  votePost,
} from './posts';

import {
  getComments,
  addComment,
  deleteComment,
  updateComment,
  voteComment,
} from './comments';

export default {
  getCategories,
  getPosts,
  getPostById,
  getPostsByCategory,
  createPost,
  editPost,
  deletePost,
  getComments,
  addComment,
  deleteComment,
  updateComment,
  voteComment,
  votePost,
};
