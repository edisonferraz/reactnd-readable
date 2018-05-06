import { getCategories } from './categories';
import {
  getPosts,
  getPostById,
  getPostsByCategory,
  createPost,
  editPost,
  deletePost,
} from './posts';
import { orderBy } from './orderBy';
import {
  getComments,
  addComment,
  updateComment,
  deleteComment,
  voteComment,
} from './comments';

export {
  getCategories,
  getPosts,
  getPostById,
  getPostsByCategory,
  orderBy,
  createPost,
  editPost,
  deletePost,
  getComments,
  addComment,
  updateComment,
  deleteComment,
  voteComment,
};
