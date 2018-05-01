import React from 'react';
import PropTypes from 'prop-types';
import PostItem from 'components/PostItem';

const PostsList = ({ posts, deletePost }) => (
  <div className="row mb-2">
    {posts.map(
      (post, index) =>
        index === 0 ? (
          <div key={post.id} className="col-md-12">
            <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
              <div className="col-md-6 px-0">
                <PostItem post={post} index={index} deletePost={deletePost} />
              </div>
            </div>
          </div>
        ) : (
          <div key={post.id} className="col-md-6">
            <div className="card flex-md-row mb-4 box-shadow h-md-250_">
              <div className="card-body d-flex flex-column align-items-start">
                <PostItem post={post} deletePost={deletePost} />
              </div>
            </div>
          </div>
        )
    )}
  </div>
);

PostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  deletePost: PropTypes.func.isRequired,
};

export default PostsList;
