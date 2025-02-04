import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div className="modal d-block bg-dark bg-opacity-50">
      <div className="modal-dialog">
        <div className="modal-content p-4">
          <h2>Portal Modal</h2>
          <button className="btn btn-danger" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root") // Rendered outside the main DOM tree
  );
};

export default Modal;
