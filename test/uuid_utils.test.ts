/**
 * test file for uuids
 */

import { t, v4 } from "../src/deps.ts";
import { generateUUID } from "../src/utils/index.ts";

Deno.test("test generateUUID function", () => {
  const actual = generateUUID();
  t.assertEquals(v4.validate(actual), true);
});
