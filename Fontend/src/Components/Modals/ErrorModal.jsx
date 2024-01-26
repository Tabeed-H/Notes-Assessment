import React from "react";
import "./ErrorModal.css";

const ErrorModal = ({ isOpen, onClose, title, message, details }) => {
  const handleModalClick = (e) => {
    // Prevent closing the modal if the modal box is clicked
    e.stopPropagation();
  };

  const handleBackgroundClick = () => {
    // Close the modal when clicking on the background
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="error-modal-container" onClick={handleBackgroundClick}>
          <div className="error-modal-box" onClick={handleModalClick}>
            <div className="error-modal-header">
              <div className="error-modal-title">{title}</div>
              <button className="close-btn" onClick={onClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M4.70711 3.29289C4.31658 2.90237 3.68342 2.90237 3.29289 3.29289C2.90237 3.68342 2.90237 4.31658 3.29289 4.70711L10.5858 12L3.29289 19.2929C2.90237 19.6834 2.90237 20.3166 3.29289 20.7071C3.68342 21.0976 4.31658 21.0976 4.70711 20.7071L12 13.4142L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L13.4142 12L20.7071 4.70711C21.0976 4.31658 21.0976 3.68342 20.7071 3.29289C20.3166 2.90237 19.6834 2.90237 19.2929 3.29289L12 10.5858L4.70711 3.29289Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
            <div className="error-modal-content">
              <p>{message}</p>
              <p>{details}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ErrorModal;
