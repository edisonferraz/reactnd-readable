import React from 'react';
import PropTypes from 'prop-types';

import Badge from 'components/Badge';
import { convertTimestampToDate } from 'utils/date';

const CommentsList = ({ comments, deleteComment, editComment, voteComment }) =>
  comments.length > 0 && (
    <div className="my-3 p-3 bg-white rounded box-shadow">
      <h6 className="border-bottom border-gray pb-2 mb-0">Comments</h6>

      {comments.map(comment => (
        <div key={comment.id} className="media text-muted pt-3">
          <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <div>
              <Badge
                label=""
                value={convertTimestampToDate(comment.timestamp)}
              />
              <Badge label="votes" value={comment.voteScore} />

              <button
                className="btn btn-light btn-sm mr-2 mb-2"
                onClick={() => voteComment(comment.id, 'upVote')}
              >
                <span className="oi oi-thumb-up" />
              </button>

              <button
                className="btn btn-light btn-sm mr-2 mb-2"
                onClick={() => voteComment(comment.id, 'downVote')}
              >
                <span className="oi oi-thumb-down" />
              </button>

              <button
                className="btn btn-light btn-sm mr-2 mb-2 float-right"
                onClick={() => deleteComment(comment.id)}
              >
                <span className="oi oi-trash" />
              </button>
              <button
                className="btn btn-light btn-sm mr-2 mb-2 float-right"
                onClick={() => editComment(comment)}
              >
                <span className="oi oi-pencil" />
              </button>
            </div>

            <strong className="d-block text-gray-dark">{comment.author}</strong>
            {comment.body}
          </div>
        </div>
      ))}
    </div>
  );

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteComment: PropTypes.func.isRequired,
  editComment: PropTypes.func.isRequired,
  voteComment: PropTypes.func.isRequired,
};

export default CommentsList;
