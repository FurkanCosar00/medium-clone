import React from 'react';

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>

        {children}
      </div>

      <style jsx>
        {`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .modal-content {
          background: #fff;
          padding: 20px;
          border-radius: 8px;
          max-width: 500px;
          width: 100%;
        }
        .modal-close {
          background: none;
          border: none;
          font-size: 1.5rem;
          position: absolute;
          top: 10px;
          right: 10px;
          cursor: pointer;
        }
        `}
      </style>
    </div>
  );
};

export default Modal;
