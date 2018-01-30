import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CategoryMenu = ({ categories }) => (
  <div className="nav-scroller py-1">
    <nav className="nav d-flex justify-content-between_">
      {categories.map(category => (
        <Link
          key={category.name}
          className="p-2 text-muted"
          to={`/categories/${category.name}`}
        >
          {category.name}
        </Link>
      ))}
    </nav>
  </div>
);

CategoryMenu.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default CategoryMenu;
