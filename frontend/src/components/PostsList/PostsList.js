import React from 'react';
import PropTypes from 'prop-types';

const PostsList = ({ posts }) => {
  return (
    <div>
      {posts.map(
        (post, index) =>
          index === 0 ? (
            <div
              key={post.id}
              className="jumbotron p-3 p-md-5 text-white rounded bg-dark"
            >
              <div className="col-md-6 px-0">
                <strong className="d-inline-block">{post.category}</strong>
                <h1 className="display-4 font-italic">{post.title}</h1>
                <p className="lead my-3">{post.body}</p>
                <p className="lead mb-0">
                  <a href="#" className="text-white font-weight-bold">
                    Continue reading...
                  </a>
                </p>
              </div>
            </div>
          ) : null
      )}

      <div className="row mb-2">
        {posts.map(
          (post, index) =>
            index === 0 ? (
              ''
            ) : (
              <div key={post.id} className="col-md-6">
                <div className="card flex-md-row mb-4 box-shadow h-md-250_">
                  <div className="card-body d-flex flex-column align-items-start">
                    <strong className="d-inline-block mb-2 text-primary">
                      {post.category}
                    </strong>
                    <h3 className="mb-0">
                      <a className="text-dark" href="#">
                        {post.title}
                      </a>
                    </h3>
                    {/*<div className="mb-1 text-muted">Nov 12</div>*/}
                    <p className="card-text mb-auto">{post.body}</p>
                    <a href="#">Continue reading</a>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

PostsList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostsList;
