import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCategories, getPosts } from 'actions';

class PostsContainer extends Component {
  componentDidMount() {
    this.props.getCategories();
    this.props.getPosts();
  }

  render() {
    const { categories, posts } = this.props;

    return (
      <div>
        <div className="nav-scroller py-1">
          <nav className="nav d-flex justify-content-between_">
            {categories.map(cat => (
              <a key={cat.name} className="p-2 text-muted" href="#">
                {cat.name}
              </a>
            ))}
          </nav>
        </div>

        {posts.map(
          (post, index) =>
            index === 0 ? (
              <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                <div className="col-md-6 px-0">
                  <strong className="d-inline-block">{post.category}</strong>
                  <h1 className="display-4 font-italic">{post.title}</h1>
                  <p className="lead my-3">{post.body}</p>
                  <p className="lead mb-0">
                    <a href="#" class="text-white font-weight-bold">
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
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  posts: state.posts,
});

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => dispatch(getCategories()),
    getPosts: () => dispatch(getPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
