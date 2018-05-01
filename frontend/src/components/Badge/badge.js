import React from 'react';
import PropTypes from 'prop-types';

const Badge = ({ label, value }) => (
  <span className="btn btn-light btn-sm mr-2 mb-2 disabled">
    {label ? `${label}: ` : ''}
    <span className="badge badge-light">{value}</span>
  </span>
);

Badge.defaultProps = {
  label: 'label',
  value: 0,
};

Badge.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.any, PropTypes.number]),
};

export default Badge;
