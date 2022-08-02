/**
 * - router file for deno notes microservice user api
 * - provides user api routes
 */

import authMiddleware from "./auth/auth_middleware.ts";
import { login } from "./controller/login/index.ts";
import { deleteUser, readUser, readUsers, register, updateUser } from "./controller/user/index.ts";
import { Router } from "./deps.ts";


const auth_router = new Router();

auth_router
  .post('/api/user/login', login)
  .post('/api/user/register', register) // Add a user
  .get("/api/users", authMiddleware, readUsers) // Get all users
  .get("/api/user/:username", authMiddleware, readUser) // Get one user
  .delete("/api/user/:username", authMiddleware, deleteUser) // Delete a user
  .put("/api/user/:username", authMiddleware, updateUser); // Update a user

export default auth_router;