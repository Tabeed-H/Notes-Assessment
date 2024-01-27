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
  // functions and state dealing with local state of Notes
  const [notes, setNotes] = useState([]);

  // Opens and call function to edit note more like a middle ware function and be removed
  const handleNoteEdit = (note) => {
    openEditNoteModal(note);
  };

  // -------------------------------------------Errors-----------------------------
  // functions and states for Error modal
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
  };

  const closeErrorModal = () => {
    setError({});
    setErrorStatus(false);
  };

  // ------------------------------------------Notes Modal--------------------------------
  // functions and state for new note modal
  // state for add note modal
  const [noteModalStatus, setNoteModalStatus] = useState(false);

  // functions to open noteModal
  const openNoteModal = () => {
    setNoteModalStatus(true);
  };

  // function to close noteModal
  const closeNoteModal = () => {
    setNoteModalStatus(false);
  };

  // ------------------------------------------Edit--------------------------------
  // functions and states for handling edit note
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
  // fetch all notes
  const handleFetchNotes = async () => {
    try {
      const fetchedNotes = await fetchNotes();
      setNotes(fetchedNotes);
    } catch (error) {
      handleNoteModalError({
        title: "Error Occured",
        message: "Error while fetching notes",
        details: error.message,
      });
    }
  };

  // save note
  const handleSaveNote = async (newNote) => {
    try {
      const noteId = await addNewNote(newNote);

      // Fetch updated notes after adding a new note
      await handleFetchNotes();
    } catch (error) {
      handleNoteModalError({
        title: "Error Occured",
        message: "Error while Adding Note!",
        details: error.message,
      });
    }
  };

  // delete note
  const handleNoteDelete = async (note) => {
    try {
      await deleteNote(note.id);
      await handleFetchNotes();
    } catch (error) {
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
      await updateNote(editedNote);
      await handleFetchNotes();
    } catch (error) {
      handleNoteModalError({
        title: "Error Occured",
        message: "Error while Updating Note!",
        details: error.message,
      });
    }
  };

  // handle pin/unpin note
  const handleNotePin = async (note) => {
    try {
      await pinNote(note);
      await handleFetchNotes();
    } catch (error) {
      handleNoteModalError({
        title: "Error Occured",
        message: "Error while changing  Note status!",
        details: error.message,
      });
    }
  };

  // Fetch notes when the component mounts
  useEffect(() => {
    handleFetchNotes();
  }, []);

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
