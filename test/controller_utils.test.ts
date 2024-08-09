/**
 * test file for util functions
 */

import { assertEquals } from "../src/deps.ts";
import { checkIfUsernamIsTaken } from "../src/utils/index.ts";

Deno.test("test checkIfUsernamIsTaken utils function, should return true for existing user", async () => {
  const expected = true;
  const actual = await checkIfUsernamIsTaken("Leonhard");
  assertEquals(actual, expected);
});

Deno.test("test checkIfUsernamIsTaken utils function, should return false for not existing user", async () => {
  const expected = false;
  const actual = await checkIfUsernamIsTaken("test_username");
  assertEquals(actual, expected);
});
