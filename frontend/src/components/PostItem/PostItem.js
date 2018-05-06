import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import Badge from 'components/Badge';
import { convertTimestampToDate } from 'utils/date';
import Modal from 'components/Modal';

class PostItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
      showModal: false,
    };
  }

  deletePostModal = post => {
    this.setState({
      post,
      showModal: true,
    });
  };

  render() {
    const { post, index, detail, deletePost, showCommentForm } = this.props;

    return (
      <div>
        <strong className="d-inline-block mb-2 text-primary">
          <Badge label="author" value={post.author} />
          <Badge label="category" value={post.category} />
          <Badge label="votes" value={post.voteScore} />
        </strong>
        {index === 0 ? (
          <h1 className="display-4 font-italic">
            <Link className="text-white" to={`/posts/detail/${post.id}`}>
              {post.title}
            </Link>
          </h1>
        ) : (
          <h3>
            {detail ? (
              post.title
            ) : (
              <Link className="text-dark" to={`/posts/detail/${post.id}`}>
                {post.title}
              </Link>
            )}
          </h3>
        )}
        <div className="mb-1 text-muted">
          {convertTimestampToDate(post.timestamp)}
        </div>
        <p className="lead my-3">{post.body}</p>
        <p>
          {detail ? null : (
            <Link
              className="btn btn-light btn-sm mr-2"
              to={`/posts/detail/${post.id}`}
              title="Continue reading"
            >
              Continue reading
            </Link>
          )}

          <Link
            className="btn btn-light btn-sm mr-2"
            to={`/posts/edit/${post.id}`}
            title="edit"
          >
            <span className="oi oi-pencil" />
          </Link>
          <button
            className="btn btn-light btn-sm mr-2"
            onClick={() => this.deletePostModal(post)}
          >
            <span className="oi oi-trash" />
          </button>

          {detail && (
            <button
              className="btn btn-light btn-sm mr-2"
              onClick={showCommentForm}
            >
              <span className="oi oi-plus" /> Add Comment
            </button>
          )}
        </p>

        {this.state.showModal ? (
          <Modal
            title={this.state.post.title}
            button={{ type: 'danger', label: 'Yes, Delete' }}
            confirm={() => {
              deletePost(this.state.post.id).then(() =>
                this.props.history.push('/')
              );
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

PostItem.defaultProps = {
  index: 1,
  detail: false,
  showCommentForm: null,
};

PostItem.propTypes = {
  post: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  index: PropTypes.number,
  deletePost: PropTypes.func.isRequired,
  detail: PropTypes.bool,
  showCommentForm: PropTypes.func,
};

export default withRouter(PostItem);
