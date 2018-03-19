import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getCategories, getPosts, getPostsByCategory, orderBy } from 'actions';
import CategoryMenu from 'components/CategoryMenu';
import PostsList from 'components/PostsList';

import { orderPosts } from 'utils/filters';

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

  setSorting = filter => {
    this.props.orderBy(filter);
  };

  render() {
    const { categories, posts } = this.props;

    return (
      <div>
        <CategoryMenu categories={categories} setSorting={this.setSorting} />

        {posts.length ? (
          <PostsList posts={posts} />
        ) : (
          <p className="alert alert-warning">No Posts</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    posts: orderPosts(state.posts, state.orderBy),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => dispatch(getCategories()),
    getPosts: () => dispatch(getPosts()),
    getPostsByCategory: category => dispatch(getPostsByCategory(category)),
    orderBy: filter => dispatch(orderBy(filter)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
