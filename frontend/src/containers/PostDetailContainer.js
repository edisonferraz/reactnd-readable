import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  getPostById,
  deletePost,
  votePost,
  getComments,
  addComment,
  updateComment,
  deleteComment,
  voteComment,
} from 'actions';

import PostItem from 'components/PostItem';
import { CommentsList, CommentsForm } from 'components/Comments';
import { orderComments } from 'utils/filters';

class PostDetailContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: {
        body: '',
        author: '',
      },
      commentUpdate: false,
      showCommentForm: false,
    };

    this.postId = this.props.match.params.id;
  }

  componentDidMount = () => {
    if (this.postId) {
      this.props.getPostById(this.postId);
      this.props.getComments(this.postId);
    }
  };

  onChange = e => {
    this.setState({
      comment: {
        ...this.state.comment,
        [e.target.name]: e.target.value,
      },
    });
  };

  showCommentForm = () => {
    this.clearState();
    this.setState({
      showCommentForm: !this.state.showCommentForm,
    });
  };

  sendFormComment = e => {
    e.preventDefault();
    const timestamp = Date.now();

    if (this.state.commentUpdate) {
      const commentUpdated = {
        timestamp,
        ...this.state.comment,
      };
      this.props.updateComment(commentUpdated).then(() => {
        this.clearState();
      });
    } else {
      const comment = {
        id: timestamp.toString(),
        timestamp,
        parentId: this.postId,
        ...this.state.comment,
      };

      this.props.addComment(comment).then(() => {
        this.clearState();
        this.props.getPostById(this.postId);
      });
    }
  };

  editComment = comment => {
    this.setState({ comment, commentUpdate: true, showCommentForm: true });
  };

  cancelComment = () => {
    this.clearState();
  };

  clearState = () => {
    this.setState({
      comment: {
        body: '',
        author: '',
      },
      commentUpdate: false,
      showCommentForm: false,
    });
  };

  deleteComment = commentId => {
    this.props.deleteComment(commentId).then(() => {
      this.props.getPostById(this.postId);
    });
  };

  render() {
    if (this.props.post.length === 0) {
      this.props.history.push('/404');
    }

    return (
      <div className="mt-5">
        <div className="my-3 p-3 bg-white rounded box-shadow">
          <PostItem
            post={{ ...this.props.post[0] }}
            deletePost={this.props.deletePost}
            showCommentForm={this.showCommentForm}
            votePost={this.props.votePost}
            detail
          />
        </div>

        {this.state.showCommentForm && (
          <CommentsForm
            comment={this.state.comment}
            commentUpdate={this.state.commentUpdate}
            onChange={this.onChange}
            sendFormComment={this.sendFormComment}
            cancelComment={this.cancelComment}
            showCommentForm={this.showCommentForm}
          />
        )}
        <CommentsList
          comments={this.props.comments}
          deleteComment={this.deleteComment}
          editComment={this.editComment}
          voteComment={this.props.voteComment}
        />
      </div>
    );
  }
}

PostDetailContainer.defaultProps = {
  comments: [],
};

PostDetailContainer.propTypes = {
  post: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  getPostById: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  votePost: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf(PropTypes.any),
  getComments: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  updateComment: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  voteComment: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  post: state.posts,
  comments: orderComments([...state.comments]),
});

const mapDispatchToProps = dispatch => ({
  getPostById: postId => dispatch(getPostById(postId)),
  deletePost: postId => dispatch(deletePost(postId)),
  votePost: (postId, vote) => dispatch(votePost(postId, vote)),
  getComments: postId => dispatch(getComments(postId)),
  addComment: comment => dispatch(addComment(comment)),
  updateComment: commentId => dispatch(updateComment(commentId)),
  deleteComment: commentId => dispatch(deleteComment(commentId)),
  voteComment: (commentId, vote) => dispatch(voteComment(commentId, vote)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostDetailContainer)
);
