import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCategories, getPosts, getPostsByCategory } from 'actions';
import CategoryMenu from 'components/CategoryMenu';
import PostsList from 'components/PostsList';

class PostsContainer extends Component {
  componentDidMount() {
    this.getPosts();
    this.props.getCategories();
  }

  componentDidUpdate(prevProps) {
    const category = this.props.match.params.name;
    if (prevProps.match.params.name !== category) {
      this.getPosts(category);
    }
  }

  getPosts = category => {
    category ? this.props.getPostsByCategory(category) : this.props.getPosts();
  };

  render() {
    const { categories, posts } = this.props;

    return (
      <div>
        <CategoryMenu categories={categories} />

        {posts.length ? (
          <PostsList posts={posts} />
        ) : (
          <p className="alert alert-warning">No Posts</p>
        )}
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
    getPostsByCategory: category => dispatch(getPostsByCategory(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
