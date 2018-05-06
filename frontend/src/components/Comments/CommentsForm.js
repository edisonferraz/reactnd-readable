import React from 'react';
import PropTypes from 'prop-types';

const CommentsForm = ({
  comment,
  commentUpdate,
  onChange,
  sendFormComment,
  cancelComment,
  showCommentForm,
}) => (
  <div className="my-3 p-3 bg-white rounded box-shadow">
    <h6 className="border-bottom border-gray pb-2">
      {commentUpdate ? 'Edit' : 'Add New'} Comment
    </h6>
    <form onSubmit={sendFormComment}>
      <div className="row">
        <div className="col-4 mb-3">
          <label>comment</label>
          <input
            className="form-control"
            type="text"
            name="body"
            value={comment.body}
            onChange={onChange}
            required
          />
        </div>
      </div>

      <div className="row">
        <div className="col-4 mb-3">
          <label>author</label>
          <input
            className="form-control"
            type="text"
            name="author"
            value={comment.author}
            onChange={onChange}
            required
          />
        </div>
      </div>

      <div className="row">
        <div className="col-4">
          <button className="btn btn-success btn-sm float-right">
            {commentUpdate ? 'Update' : 'Add'} Comment
          </button>
          <button
            className="btn btn-dark btn-sm mr-2 float-right"
            onClick={showCommentForm}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  </div>
);

CommentsForm.propTypes = {};

export default CommentsForm;
