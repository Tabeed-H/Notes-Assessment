// components/Pages/Notes.jsx
import React from "react";
import Note from "../Others/Note";
import "./Notes.css";

const Notes = ({ notes, onEdit, onDelete, onPin }) => {
  const notesPerPage = 6; // max number of notes on one page

  const [currentPage, setCurrentPage] = React.useState(1); // for pagination sets the current page number

  // handler for changing pages when notes are >6
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // handler to handle note edition
  const handleEdit = (note) => {
    onEdit(note);
  };

  // handler to handel note deletion
  const handleDelete = (note) => {
    onDelete(note);
  };

  // handler to handle note Pin/unpin
  const handlePin = (note) => {
    onPin(note);
  };

  // Pagination login
  const startIndex = (currentPage - 1) * notesPerPage; // gets the starting page
  const endIndex = startIndex + notesPerPage; // gets the ending page
  const currentNotes = notes.slice(startIndex, endIndex); // current number of notes

  // Separate pinned and regular notes
  const pinnedNotes = notes.filter((note) => note.isPinned);
  const regularNotes = notes.filter((note) => !note.isPinned);

  const totalPages = Math.ceil(regularNotes.length / notesPerPage); // calculates the total number of pages
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
