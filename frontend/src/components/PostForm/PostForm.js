import React from 'react';
import PropTypes from 'prop-types';

const PostForm = ({ fields, onChange, sendForm }) => (
  <div className="row justify-content-md-center">
    <p>{JSON.stringify(fields)}</p>
    <br />

    <form
      onSubmit={sendForm}
      className="col col-lg-6 mt-5 jumbotron"
      style={{ paddingTop: '30px', paddingBottom: '30px' }}
    >
      <h1 style={{ fontSize: '36px' }}>New Post</h1>
      <hr />

      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          className="form-control"
          name="title"
          onChange={onChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="">Body</label>
        <input
          type="text"
          className="form-control"
          name="body"
          onChange={onChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="">Author</label>
        <input
          type="text"
          className="form-control"
          name="author"
          onChange={onChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="">Category</label>
        <input type="text" className="form-control" />
      </div>

      <div className="row justify-content-between">
        <div className="col col-lg-3">
          <button className="btn btn-danger btn-block">Cancel</button>
        </div>
        <div className="col col-lg-5">
          <button type="submit" className="btn btn-primary btn-block">
            Create Post
          </button>
        </div>
      </div>
    </form>
  </div>
);

PostForm.propTypes = {
  fields: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  sendForm: PropTypes.func.isRequired,
};

export default PostForm;
