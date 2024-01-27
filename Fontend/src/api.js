const URL = "https://notes-backend-v2tu.onrender.com";
export const fetchNotes = async () => {
  try {
    const response = await fetch(`${URL}/api/notes`);
    if (!response.ok) {
      throw new Error("Failed to fetch notes");
    }

    const data = await response.json();
    return data.notes;
  } catch (error) {
    console.error("Error fetching notes:", error.message);
    throw error;
  }
};
export const addNewNote = async (note) => {
  try {
    const response = await fetch(`${URL}/api/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });

    if (!response.ok) {
      throw new Error("Failed to add a new note");
    }

    const data = await response.json();
    return data.noteId;
  } catch (error) {
    console.error("Error adding a new note:", error.message);
    throw error;
  }
};

export const deleteNote = async (noteId) => {
  try {
    const response = await fetch(`${URL}/api/delete/${noteId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete note");
    }

    const data = await response.json();
    return data.message;
  } catch (error) {
    console.error("Error deleting note:", error.message);
    throw error;
  }
};
export const updateNote = async (editedNote) => {
  try {
    const response = await fetch(`${URL}/api/update/${editedNote.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedNote),
    });

    if (!response.ok) {
      throw new Error("Failed to update note");
    }

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error("Error updating note:", error.message);
    throw error;
  }
};
export const pinNote = async (note) => {
  try {
    const response = await fetch(`${URL}/api/pin/${note.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isPinned: !note.isPinned }),
    });

    if (!response.ok) {
      throw new Error("Failed to pin/unpin note");
    }

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error("Error pinning/unpinning note:", error.message);
    throw error;
  }
};
