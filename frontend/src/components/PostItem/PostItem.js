import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Badge from 'components/Badge';
import { convertTimestampToDate } from 'utils/date';

const PostItem = ({ post, index }) => (
  <div>
    <strong className="d-inline-block mb-2 text-primary">
      <Badge label="author" value={post.author} />
      <Badge label="category" value={post.category} />
      <Badge label="votes" value={post.voteScore} />
    </strong>

    {index === 0 ? (
      <h1 className="display-4 font-italic">
        <a className="text-white" href="/">
          {post.title}
        </a>
      </h1>
    ) : (
      <h3>
        <a className="text-dark" href="/">
          {post.title}
        </a>
      </h3>
    )}

    <div className="mb-1 text-muted">
      {convertTimestampToDate(post.timestamp)}
    </div>

    <p className="lead my-3">{post.body}</p>

    <p>
      <a href="/" className="btn btn-light btn-sm" title="Continue reading">
        Continue reading
      </a>

      <Link
        className="btn btn-light btn-sm ml-2"
        to={`/posts/edit/${post.id}`}
        title="edit"
      >
        <span className="oi oi-pencil" />
      </Link>
      <Link className="btn btn-light btn-sm ml-2" to="/" title="remove">
        <span className="oi oi-trash" />
      </Link>
    </p>
  </div>
);

PostItem.defaultProps = {
  index: null,
};

PostItem.propTypes = {
  post: PropTypes.objectOf(PropTypes.any).isRequired,
  index: PropTypes.number,
};

export default PostItem;
