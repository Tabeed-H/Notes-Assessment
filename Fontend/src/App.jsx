import React, { useState } from "react";
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
  const [notes, setNotes] = useState([
    {
      _id: 1,
      title: "Note 1",
      tagline: "This is note.",
      body: "This is the body of Note",
      isDeleted: false,
      isPinned: false,
    },
    {
      _id: 2,
      title: "Note 2",
      tagline: "This is note.",
      body: "This is the body of Note",
      isDeleted: false,
      isPinned: true,
    },
    {
      _id: 3,
      title: "Note 3",
      tagline: "This is note.",
      body: "This is the body of Note",
      isDeleted: false,
      isPinned: false,
    },
    {
      _id: 4,
      title: "Note 4",
      tagline: "This is note.",
      body: "This is the body of Note",
      isDeleted: false,
      isPinned: true,
    },
    {
      _id: 5,
      title: "Note 5",
      tagline: "This is note.",
      body: "This is the body of Note",
      isDeleted: false,
      isPinned: false,
    },
    {
      _id: 6,
      title: "Note 6",
      tagline: "This is note.",
      body: "This is the body of Note i am going to make the body of this onte a bit big so to tess the scroll and height and shit what if i increase it even more evne more functk it we type shia;dklfjasl;dkfha;sdfj;ahdflkjahsdlfkjahldjkfa;klfdlakjhdflkjahslfdkjhaldjfh",
      isDeleted: false,
      isPinned: false,
    },
    {
      _id: 7,
      title: "Note 7",
      tagline: "This is note.",
      body: "This is the body of Note",
      isDeleted: false,
      isPinned: false,
    },
    {
      _id: 8,
      title: "Note 8",
      tagline: "This is note.",
      body: "This is the body of Note",
      isDeleted: false,
      isPinned: false,
    },
  ]);
  const handleSaveNote = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const handleNoteDelete = (note) => {
    console.log("delete" + note._id);
  };

  const handleNoteEdit = (note) => {
    openEditNoteModal(note);
    console.log("Edit" + note._id);
  };

  const handleNotePin = (note) => {
    console.log("pin" + note._id);
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

  // handle new Notes
  const addNewNote = (note) => {
    console.log(note);
    handleSaveNote(note);
  };

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

  // Function to save edited note
  const saveEditedNote = (editedNote) => {
    // Implement your logic to save the edited note
    console.log("Edited Note:", editedNote);
  };

  return (
    <Router>
      {noteModalStatus && (
        <NoteModal
          isOpen={noteModalStatus}
          onClose={closeNoteModal}
          onSave={addNewNote}
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
