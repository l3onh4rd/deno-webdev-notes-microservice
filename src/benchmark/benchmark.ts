/**
 * - file to run benchmarks
 */

import { generateUUID, validatePassword, validateUsername } from "../utils/index.ts";

Deno.bench("run UUID generation", () => {
  generateUUID();
});

Deno.bench("run password validation", () => {
  validatePassword('tHiSIsAR4nd0MP§//W4rd');
});

Deno.bench("run username validation", () => {
  validateUsername('r4andU53rname(');
});
