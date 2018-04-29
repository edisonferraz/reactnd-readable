import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CategoryMenu = ({ categories, setSorting }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light rounded mb-3">
    <div className="collapse navbar-collapse" id="navbarsExample09">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            all
          </Link>
        </li>
        {categories.map(category => (
          <li className="nav-item" key={category.name}>
            <Link className="nav-link" to={`/categories/${category.name}`}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>

      <ul className="navbar-nav">
        <li className="nav-item">
          <select
            className="form-control"
            onChange={e => setSorting(e.target.value)}
          >
            <option value="">order posts by:</option>
            <option value="byScoreHighest">highest score</option>
            <option value="byScoreLowest">lowest score</option>
            <option value="byDateNewest">newest</option>
            <option value="byDateOldest">oldest</option>
          </select>
        </li>
      </ul>

      <Link className="btn btn-primary ml-2" to="/posts/new">
        + New Post
      </Link>
    </div>
  </nav>
);

CategoryMenu.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSorting: PropTypes.func.isRequired,
};

export default CategoryMenu;
