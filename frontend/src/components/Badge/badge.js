import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({ label, value }) => (
  <span className="btn btn-light btn-sm mr-2 mb-2 disabled">
    {label ? `${label}: ` : ''}
    <span className="badge badge-light">{value}</span>
  </span>
);

Badge.defaultProps = {
  label: '',
};

Badge.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default Badge;
