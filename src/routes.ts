/**
 * - router file for deno notes microservice api
 * - provides basic notes api routes
 * - provides user api routes
 */

import authMiddleware from "./auth/auth_middleware.ts";
import {
  createNote,
  deleteNote,
  readNote,
  readNotes,
  readNotesByUsername,
  updateNote,
} from "./controller/notes/index.ts";
import { login } from "./controller/login/index.ts";
import {
  deleteUser,
  readUser,
  readUsers,
  register,
  updateUser,
} from "./controller/user/index.ts";
import { Router } from "./deps.ts";
import {
  createKvNote,
  deleteKvNote,
  readKvNote,
  readKvNotes,
  updateKvNote,
} from "./controller/kv_notes/index.ts";

const router = new Router();
router.use(authMiddleware);

router
  .post("/api/note/:collection", createNote) // Add a note
  .get("/api/notes/:collection", readNotes) // Get all notes
  .post("/api/notes/:collection", readNotesByUsername) // Get all notes by username
  .get("/api/notes/:collection/:id", readNote) // Get one note
  .put("/api/notes/:collection/:id", updateNote) // Update a note
  .delete("/api/notes/:collection/:id", deleteNote); // Delete a note

const kv_router = new Router();
kv_router.use(authMiddleware);

kv_router
  .post("/api/kv/note/:collection", createKvNote) // Add a note
  .get("/api/kv/notes/:collection", readKvNotes) // Get all notes
  // .post("/api/kv/notes/:collection", readKvNotesByUsername) // currently not implemented // Get all notes by username
  .get("/api/kv/notes/:collection/:id", readKvNote) // Get one note
  .put("/api/kv/notes/:collection/:id", updateKvNote) // Update a note
  .delete("/api/kv/note", deleteKvNote); // Delete a note

const auth_router = new Router();

auth_router
  .post("/api/user/login", login)
  .post("/api/user/register", register) // Add a user
  .get("/api/users", authMiddleware, readUsers) // Get all users
  .get("/api/user/:username", authMiddleware, readUser) // Get one user
  .delete("/api/user/:username", authMiddleware, deleteUser) // Delete a user
  .put("/api/user/:username", authMiddleware, updateUser); // Update a user

export { auth_router, kv_router, router };
