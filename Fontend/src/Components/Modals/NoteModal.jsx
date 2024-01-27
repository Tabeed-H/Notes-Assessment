import React, { useState } from "react";
import "./NoteModal.css";

const NoteModal = ({ isOpen, onClose, onSave, onError }) => {
  const [title, setTitle] = useState("");
  const [tagline, setTagline] = useState("");
  const [body, setBody] = useState("");

  const handleSave = () => {
    if (title.length === 0) {
      onError({
        title: "Error!",
        message: "Title is empty!",
        details: "You Should give your note a title..:)",
      });
      return;
    }

    onSave({
      title,
      tagline,
      body,
      isDeleted: false,
      isPinned: false,
    });
    setTitle("");
    setTagline("");
    setBody("");

    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="modal-container" onClick={onClose}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">Add New Note</div>
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
                    fill="red"
                  />
                </svg>
              </button>
            </div>
            <div className="modal-content">
              <label>Title:</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <label>Tagline Line</label>
              <textarea
                value={tagline}
                onChange={(e) => setTagline(e.target.value)}
              />

              <label>Body</label>
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button className="comm-save-btn" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NoteModal;
