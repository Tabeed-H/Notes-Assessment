// components/Pages/Notes.jsx
import React from "react";
import Note from "../Others/Note";
import "./Notes.css";

const Notes = ({ notes, onEdit, onDelete, onPin }) => {
  const notesPerPage = 6;

  const [currentPage, setCurrentPage] = React.useState(1);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleEdit = (note) => {
    onEdit(note);
  };
  const handleDelete = (note) => {
    onDelete(note);
  };
  const handlePin = (note) => {
    onPin(note);
  };

  const startIndex = (currentPage - 1) * notesPerPage;
  const endIndex = startIndex + notesPerPage;
  const currentNotes = notes.slice(startIndex, endIndex);

  // Separate pinned and regular notes
  const pinnedNotes = notes.filter((note) => note.isPinned);
  const regularNotes = notes.filter((note) => !note.isPinned);

  const totalPages = Math.ceil(regularNotes.length / notesPerPage);
  return (
    <div className="notes-container">
      <h2>Notes</h2>
      {pinnedNotes.length > 0 && (
        <div className="pinned-section">
          <h3>Pinned</h3>
          <div className="pinned-container">
            {pinnedNotes.map((note, index) => (
              <Note
                key={index}
                note={note}
                onNoteEdit={handleEdit}
                onNoteDelete={handleDelete}
                onNotePin={handlePin}
              />
            ))}
          </div>
        </div>
      )}
      {regularNotes.length > 0 && (
        <>
          <h3>All Notes</h3>
          <div className="grid-container">
            {currentNotes.map((note, index) => (
              <Note
                key={index}
                note={note}
                onNoteEdit={handleEdit}
                onNoteDelete={handleDelete}
                onNotePin={handlePin}
              />
            ))}
          </div>
          <div className="pagination-container">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={currentPage === index + 1 ? "active" : ""}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>
      )}

      {pinnedNotes.length === 0 && regularNotes.length === 0 && (
        <p>No notes available.</p>
      )}
    </div>
  );
};

export default Notes;
