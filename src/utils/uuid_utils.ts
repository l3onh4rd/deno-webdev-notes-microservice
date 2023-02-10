/**
 * - function to generate a uuid
 */

import { v4 } from "../deps.ts";

function generateUUID(): string {
  const uuid = crypto.randomUUID();

  if (v4.validate(uuid)) {
    return uuid;
  } else {
    throw Error("Uuid could not be created...");
  }
}

export { generateUUID };
