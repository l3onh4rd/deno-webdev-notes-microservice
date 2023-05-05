/**
 * - dependency file
 */

// oak dependencies
export {
  Application,
  Context,
  Router,
} from "https://deno.land/x/oak@v11.1.0/mod.ts";
export { oakCors } from "https://deno.land/x/cors@v1.2.2/oakCors.ts";

// bcrypt dependencies
export * as bcrypt from "https://deno.land/x/bcrypt@v0.4.0/mod.ts";

// jwt dependencies
export {
  create,
  getNumericDate,
  verify,
} from "https://deno.land/x/djwt@v2.4/mod.ts";
export type { Header, Payload } from "https://deno.land/x/djwt@v2.4/mod.ts";

// deno std dependencies
export { v4 } from "https://deno.land/std@0.186.0/uuid/mod.ts";
export * as t from "https://deno.land/std@0.186.0/testing/asserts.ts";
