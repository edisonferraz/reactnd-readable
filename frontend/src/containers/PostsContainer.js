import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  getCategories,
  getPosts,
  getPostsByCategory,
  orderBy,
  deletePost,
  votePost,
} from 'actions';
import CategoryMenu from 'components/CategoryMenu';
import PostsList from 'components/PostsList';

import { orderPosts } from 'utils/filters';

class PostsContainer extends Component {
  componentDidMount() {
    this.getPosts();
    this.props.getCategories();
  }

  componentDidUpdate(prevProps) {
    const oldCategory = prevProps.match.params.name;
    const category = this.props.match.params.name;
    if (oldCategory !== category) {
      this.getPosts(category);
    }
  }

  getPosts = category => {
    if (category) {
      this.props.getPostsByCategory(category);
    } else {
      this.props.getPosts();
    }
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
          <PostsList
            posts={posts}
            deletePost={this.props.deletePost}
            votePost={this.props.votePost}
          />
        ) : (
          <p className="alert alert-warning">No Posts</p>
        )}
      </div>
    );
  }
}

PostsContainer.defaultProps = {
  match: {},
};

PostsContainer.propTypes = {
  match: PropTypes.objectOf(PropTypes.any),
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  getCategories: PropTypes.func.isRequired,
  getPosts: PropTypes.func.isRequired,
  getPostsByCategory: PropTypes.func.isRequired,
  orderBy: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  votePost: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  categories: state.categories,
  posts: orderPosts([...state.posts], state.orderBy),
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategories()),
  getPosts: () => dispatch(getPosts()),
  getPostsByCategory: category => dispatch(getPostsByCategory(category)),
  orderBy: filter => dispatch(orderBy(filter)),
  deletePost: postId => dispatch(deletePost(postId)),
  votePost: (postId, vote) => dispatch(votePost(postId, vote)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
