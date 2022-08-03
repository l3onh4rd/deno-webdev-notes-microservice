/**
 * test file for uuids
 */

import { t, v4 } from "../../../deps.ts";
import { generateUUID } from "../../../utils/index.ts";

Deno.test("test generateUUID function", () => {
  const actual = generateUUID();
  t.assertEquals(v4.validate(actual), true);
});
