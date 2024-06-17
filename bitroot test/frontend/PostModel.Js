// src/components/PostModal.js
import React from 'react';
import './PostModal.scss'; // Styles using SCSS

const PostModal = ({ isOpen, closeModal, title, body }) => {
  return (
    isOpen && (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <h2 className="modal-title">{title}</h2>
          <p className="modal-body">{body}</p>
        </div>
      </div>
    )
  );
};

export default PostModal;
