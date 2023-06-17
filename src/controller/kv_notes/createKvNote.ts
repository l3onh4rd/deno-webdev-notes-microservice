/**
 * - route to create a note with Deno KV
 */

import { checkKvIfUuidIsTaken } from "../../utils/controller_utils.ts";
import { generateUUID } from "../../utils/index.ts";

// @description: ADD single note
// @route POST /api/kv/notes/:collection
const createKvNote = async ({
  params,
  request,
  response,
}: {
  params: { collection: string };
  request: any;
  response: any;
}) => {
  try {
    if (!request.hasBody) {
      response.status = 400;
      response.body = {
        success: false,
        msg: "No Data",
      };
    } else {
      const body = await request.body();
      const note = await body.value;
      let uuid = "";

      // check for title
      if (note.notesTitle === undefined) {
        response.status = 400;
        response.body = {
          success: false,
          message: "A title for the note is missing.",
        };
        return;
      }

      const kv = await Deno.openKv();

      // create a uuid for the note which is not already taken
      do {
        try {
          uuid = generateUUID();
        } catch (error) {
          console.log(error);
        }
      } while (await checkKvIfUuidIsTaken(uuid, params.collection));

      note.noteId = uuid;
      const date = Date.now();
      note.createdAt = date;
      note.updatedAt = date;

      await kv.set([params.collection, uuid, note.username], note);

      response.status = 201;
      response.body = {
        success: true,
        data: note,
        uuid,
      };
    }
  } catch (err) {
    response.status = 500;
    response.body = {
      success: false,
      msg: err.toString(),
    };
  }
};

export { createKvNote };
