import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPostById, deletePost } from 'actions';

import PostItem from 'components/PostItem';

class PostDetailContainer extends Component {
  componentDidMount = () => {
    const postId = this.props.match.params.id;
    if (postId) {
      this.props.getPostById(postId);
    }
  };

  render() {
    return (
      <div className="mt-5">
        <PostItem
          post={this.props.post}
          deletePost={this.props.deletePost}
          detail
        />
      </div>
    );
  }
}

PostDetailContainer.propTypes = {
  getPostById: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  post: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

const mapStateToProps = state => ({
  post: state.posts,
});

const mapDispatchToProps = dispatch => ({
  getPostById: postId => dispatch(getPostById(postId)),
  deletePost: postId => dispatch(deletePost(postId)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostDetailContainer)
);
