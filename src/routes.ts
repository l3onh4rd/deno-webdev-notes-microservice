/** 
 * - router file for deno notes microservice api
 * - provides basic notes api routes
 */

import authMiddleware from "./auth/auth_middleware.ts";
import { createNote, deleteNote, readNote, readNotes, readNotesByUsername, updateNote } from "./controller/notes/index.ts";
import { Router } from "./deps.ts";

const router = new Router();

router
  .post("/api/note/:collection", authMiddleware, createNote) // Add a note
  .get("/api/notes/:collection", authMiddleware, readNotes) // Get all notes
  .post("/api/notes/:collection", authMiddleware, readNotesByUsername) // Get all notes by username
  .get("/api/notes/:collection/:id", authMiddleware, readNote) // Get one note
  .put("/api/notes/:collection/:id", authMiddleware, updateNote) // Update a note
  .delete("/api/notes/:collection/:id", authMiddleware, deleteNote); // Delete a note

export default router;