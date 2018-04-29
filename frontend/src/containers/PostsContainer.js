import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'components/Modal';

import {
  getCategories,
  getPosts,
  getPostsByCategory,
  orderBy,
  deletePost,
} from 'actions';
import CategoryMenu from 'components/CategoryMenu';
import PostsList from 'components/PostsList';

import { orderPosts } from 'utils/filters';

class PostsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
      showModal: false,
    };
  }

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
    if (category) {
      this.props.getPostsByCategory(category);
    } else {
      this.props.getPosts();
    }
  };

  setSorting = filter => {
    this.props.orderBy(filter);
  };

  deletePostModal = post => {
    this.setState({
      post,
      showModal: true,
    });
  };

  render() {
    const { categories, posts } = this.props;

    return (
      <div>
        <CategoryMenu categories={categories} setSorting={this.setSorting} />

        {posts.length ? (
          <PostsList posts={posts} deletePostModal={this.deletePostModal} />
        ) : (
          <p className="alert alert-warning">No Posts</p>
        )}

        {this.state.showModal ? (
          <Modal
            title={this.state.post.title}
            button={{ type: 'danger', label: 'Yes, Delete' }}
            confirm={() => {
              this.props.deletePost(this.state.post.id);
              this.setState({ showModal: false });
            }}
            cancel={() => this.setState({ showModal: false })}
          >
            <p className="alert alert-warning">
              Are you sure you want to delete this post?
            </p>
          </Modal>
        ) : null}
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
};

const mapStateToProps = state => ({
  categories: state.categories,
  posts: orderPosts(state.posts, state.orderBy),
});

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategories()),
  getPosts: () => dispatch(getPosts()),
  getPostsByCategory: category => dispatch(getPostsByCategory(category)),
  orderBy: filter => dispatch(orderBy(filter)),
  deletePost: postId => dispatch(deletePost(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
