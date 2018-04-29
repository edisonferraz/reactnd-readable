import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ title, children, button, confirm, cancel }) => (
  <div
    className="modal fade show"
    style={{ background: 'rgba(0,0,0,0.2)', display: 'block' }}
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{title}</h5>
          <button type="button" className="close" onClick={cancel}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={cancel}>
            Cancel
          </button>
          <button
            type="button"
            className={`btn btn-${button.type}`}
            onClick={confirm}
          >
            {button.label}
          </button>
        </div>
      </div>
    </div>
  </div>
);

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  button: PropTypes.shape({
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  confirm: PropTypes.func.isRequired,
  cancel: PropTypes.func.isRequired,
};

export default Modal;
