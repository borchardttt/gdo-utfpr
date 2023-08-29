import React from 'react';

const Modal = ({ title, children, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className='w-50' onClick={onClose}>
          &times;
        </button>
        <h2>{title}</h2>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
