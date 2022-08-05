/**
 * - dependency file
 */

// oak dependencies
export { Context } from "https://deno.land/x/oak@v10.4.0/mod.ts";
export { Application, Router } from "https://deno.land/x/oak@v10.4.0/mod.ts";
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
export * as benchmark from "https://deno.land/std@0.151.0/testing/bench.ts";
export { v4 } from "https://deno.land/std@0.151.0/uuid/mod.ts";
export * as t from "https://deno.land/std@0.151.0/testing/asserts.ts";