import React, { useState, useEffect } from "react";
import { fetchNotes, addNewNote, deleteNote, updateNote, pinNote } from "./api";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Notes from "./Components/Pages/Notes";
import Trash from "./Components/Pages/Trash";
import SideOptions from "./Components/Others/SideOptions";
import Menu from "./Components/Others/Menu";
import NoteModal from "./Components/Modals/NoteModal";
import ErrorModal from "./Components/Modals/ErrorModal";
import EditNoteModal from "./Components/Modals/EditNoteModal";
const App = () => {
  // -------------------------------------------Notes------------------------------
  const [notes, setNotes] = useState([]);

  const handleNoteEdit = (note) => {
    openEditNoteModal(note);
    console.log("Edit" + note.id);
  };

  // -------------------------------------------Errors-----------------------------
  // State for Error modal
  const [errorStatus, setErrorStatus] = useState(false);

  // Error Object
  const [error, setError] = useState({});

  // handle Error modal
  const handleNoteModalError = (errorMessage) => {
    closeNoteModal();
    setError((error) => ({
      ...error,
      title: errorMessage.title,
      message: errorMessage.message,
      details: errorMessage.details,
    }));
    setErrorStatus(true);
    console.log(error);
  };

  const closeErrorModal = () => {
    setError({});
    setErrorStatus(false);
  };

  // ------------------------------------------Notes Modal--------------------------------
  // state for add note modal
  const [noteModalStatus, setNoteModalStatus] = useState(false);

  // functions for noteModal
  const openNoteModal = () => {
    setNoteModalStatus(true);
  };

  const closeNoteModal = () => {
    setNoteModalStatus(false);
  };

  // ------------------------------------------Edit--------------------------------
  // State for EditNoteModal
  const [editNoteModalStatus, setEditNoteModalStatus] = useState(false);
  const [selectedNoteForEdit, setSelectedNoteForEdit] = useState({});

  // Function to open EditNoteModal
  const openEditNoteModal = (note) => {
    setSelectedNoteForEdit(note);
    setEditNoteModalStatus(true);
  };

  // Function to close EditNoteModal
  const closeEditNoteModal = () => {
    setSelectedNoteForEdit({});
    setEditNoteModalStatus(false);
  };

  // ----------------------------------api calls----------------------------
  const handleFetchNotes = async () => {
    try {
      const fetchedNotes = await fetchNotes();
      setNotes(fetchedNotes);
    } catch (error) {
      console.error("Failed to fetch notes:", error.message);
      handleNoteModalError({
        title: "Error Occured",
        message: "Error while fetching notes",
        details: error.message,
      });
    }
  };

  const handleSaveNote = async (newNote) => {
    try {
      const noteId = await addNewNote(newNote);
      console.log("New note added with ID:", noteId);

      // Fetch updated notes after adding a new note
      await handleFetchNotes();
    } catch (error) {
      // Handle error if needed
      console.error("Failed to add a new note:", error.message);
      handleNoteModalError({
        title: "Error Occured",
        message: "Error while Adding Note!",
        details: error.message,
      });
    }
  };

  const handleNoteDelete = async (note) => {
    try {
      await deleteNote(note.id);
      // Fetch updated notes after adding a new note
      await handleFetchNotes();
    } catch (error) {
      console.error("Error deleting note:", error);
      handleNoteModalError({
        title: "Error Occured",
        message: "Error while Deleting Note!",
        details: error.message,
      });
    }
  };

  // Function to save edited note
  const saveEditedNote = async (editedNote) => {
    try {
      await updateNote(editedNote); // Call the updateNote function from api.js
      await handleFetchNotes(); // Fetch updated notes from the backend
    } catch (error) {
      console.error("Error updating note:", error);
      handleNoteModalError({
        title: "Error Occured",
        message: "Error while Updating Note!",
        details: error.message,
      });
    }
  };

  const handleNotePin = async (note) => {
    try {
      await pinNote(note); // Call the pinNote function from api.js
      await handleFetchNotes(); // Fetch updated notes from the backend
    } catch (error) {
      console.error("Error pinning/unpinning note:", error);
      // Handle error
    }
  };

  // Fetch notes when the component mounts
  useEffect(() => {
    handleFetchNotes();
  }, []); // Empty dependency array ensures it only runs once

  return (
    <Router>
      {noteModalStatus && (
        <NoteModal
          isOpen={noteModalStatus}
          onClose={closeNoteModal}
          onSave={handleSaveNote}
          onError={handleNoteModalError}
        />
      )}
      {errorStatus && (
        <ErrorModal
          isOpen={errorStatus}
          onClose={closeErrorModal}
          title={error.title}
          message={error.message}
          details={error.details}
        />
      )}
      {editNoteModalStatus && (
        <EditNoteModal
          isOpen={editNoteModalStatus}
          onClose={closeEditNoteModal}
          onSave={saveEditedNote}
          note={selectedNoteForEdit}
        />
      )}
      <div className="main-container">
        <div className="upper-container">
          <Menu />
        </div>
        <div className="lower-container">
          <div className="left-container">
            <SideOptions addNoteBtn={openNoteModal} />
          </div>
          <div className="right-container">
            <Routes>
              <Route
                path="/"
                element={
                  <Notes
                    notes={notes}
                    onEdit={handleNoteEdit}
                    onDelete={handleNoteDelete}
                    onPin={handleNotePin}
                  />
                }
              />
              <Route path="/trash" element={<Trash />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
