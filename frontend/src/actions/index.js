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
  votePost,
  getComments,
  addComment,
  updateComment,
  deleteComment,
  voteComment,
};
