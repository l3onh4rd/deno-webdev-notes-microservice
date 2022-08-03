/**
 * test file for util functions
 */

import { t } from "../../../deps.ts";
import { checkIfUsernamIsTaken } from "../../../utils/index.ts";

Deno.test("test checkIfUsernamIsTaken utils function, should return true for existing user", async () => {
  const expected = true;
  const actual = await checkIfUsernamIsTaken("Leonhard");
  t.assertEquals(actual, expected);
});

Deno.test("test checkIfUsernamIsTaken utils function, should return false for not existing user", async () => {
  const expected = false;
  const actual = await checkIfUsernamIsTaken("test_username");
  t.assertEquals(actual, expected);
});
