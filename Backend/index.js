// index.js

const express = require("express");
const admin = require("firebase-admin");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

// Initialize Firebase Admin SDK
const serviceAccount = require("C:/Users/Tabeed/OneDrive/Documents/notes-ecac3-firebase-adminsdk-nnp46-e1c070a296.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// Enable CORS
app.use(cors());
app.use(express.json());

// Firestore Database Reference
const db = admin.firestore();

// API Route to Get All Notes
app.get("/api/notes", async (req, res) => {
  try {
    const notesSnapshot = await db.collection("notes").get();
    const notes = notesSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.json({ notes });
  } catch (error) {
    console.error("Error fetching notes:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// API Route to add a new note
app.post("/api/add", async (req, res) => {
  try {
    console.log(req.body);
    const { title, tagline, body, isDeleted, isPinned } = req.body;

    const notesRef = db.collection("notes");

    const newNote = {
      title,
      tagline,
      body,
      isDeleted: false,
      isPinned: false,
    };

    const addedNote = await notesRef.add(newNote);

    res.status(201).json({ success: true, noteId: addedNote.id });
  } catch (error) {
    console.error("Error adding a new note:", error.message);
    res.status(500).json({ success: false, error: "Failed to add a new note" });
  }
});

// API Route to delete a note
app.delete("/api/delete/:id", async (req, res) => {
  try {
    const noteId = req.params.id;

    const noteRef = db.collection("notes").doc(noteId);
    const noteSnapshot = await noteRef.get();

    if (!noteSnapshot.exists) {
      return res.status(404).json({ success: false, error: "Note not found" });
    }

    await noteRef.delete();

    res.json({ success: true });
  } catch (error) {
    console.error("Error deleting a note:", error.message);
    res
      .status(500)
      .json({ success: false, error: "Failed to delete the note" });
  }
});

// API Route to Update Note
app.put("/api/update/:id", async (req, res) => {
  try {
    const noteId = req.params.id;
    const { title, tagline, body, isDeleted, isPinned } = req.body;

    const noteRef = db.collection("notes").doc(noteId);

    await noteRef.update({
      title,
      tagline,
      body,
    });

    res.json({ success: true });
  } catch (error) {
    console.error("Error updating note:", error);
    res.status(500).json({ success: false, error: "Failed to update note" });
  }
});

// API Route to pin/unpin a note
app.put("/api/pin/:id", async (req, res) => {
  try {
    const noteId = req.params.id;
    const { isPinned } = req.body;

    const noteRef = db.collection("notes").doc(noteId);

    await noteRef.update({
      isPinned,
    });

    res.json({ success: true });
  } catch (error) {
    console.error("Error pinning/unpinning note:", error);
    res.status(500).json({ success: false, error: "Failed to pin/unpin note" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
