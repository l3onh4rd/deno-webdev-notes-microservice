/**
 * - file to run benchmarks
 */

import { generateUUID } from "../utils/index.ts";

Deno.bench("run UUID generate function", () => {
  generateUUID();
});
