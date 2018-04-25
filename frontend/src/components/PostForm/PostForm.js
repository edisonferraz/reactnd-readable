import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const PostForm = ({ fields, categories, onChange, sendForm }) => (
  <div className="row justify-content-md-center">
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
          value={fields.title}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="">Body</label>
        <input
          type="text"
          className="form-control"
          name="body"
          onChange={onChange}
          value={fields.body}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="">Author</label>
        <input
          type="text"
          className="form-control"
          name="author"
          onChange={onChange}
          value={fields.author}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="">Category</label>
        <select
          className="form-control"
          name="category"
          onChange={onChange}
          value={fields.category}
          required
        >
          <option value="">choose one</option>
          {categories.map(category => (
            <option key={category.name} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="row justify-content-between">
        <div className="col col-lg-3">
          <Link className="btn btn-danger btn-block" to="/">
            Cancel
          </Link>
        </div>
        <div className="col col-lg-5">
          <button type="submit" className="btn btn-primary btn-block">
            {fields.id ? 'Edit Post' : 'Create Post'}
          </button>
        </div>
      </div>
    </form>
  </div>
);

PostForm.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

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
