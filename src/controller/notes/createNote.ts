/**
 * - route to create a note
 */

import { DATA_API_KEY, BASE_URI, DATABASE, DATA_SOURCE } from "../../constants.ts";
import { checkIfUuidIsTaken, generateUUID } from "../../utils/index.ts";

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "api-key": DATA_API_KEY 
  },
  body: ""
};

// @description: ADD single note
// @route POST /api/notes/:collection
const createNote = async ({
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
      let uuid = '';

      // check for title
      if (note.notesTitle === undefined) {
        response.status = 400;
        response.body = {
          success: false,
          message: "A title for the note is missing."
        };
        return;
      }

      // create a uuid for the note which is not already taken
      do {
        try {
          uuid = generateUUID();
        } catch (error) {
          console.log(error);
        }
      } while (await checkIfUuidIsTaken(uuid, params.collection));

      note.noteId = uuid;
      const date = Date.now();
      note.createdAt = date;
      note.updatedAt = date;
      const URI = `${BASE_URI}/insertOne`;
      const query = {
        collection: params.collection,
        database: DATABASE,
        dataSource: DATA_SOURCE,
        document: note
      };
      options.body = JSON.stringify(query);
      const dataResponse = await fetch(URI, options);
      const { insertedId } = await dataResponse.json();
                
      response.status = 201;
      response.body = {
        success: true,
        data: note,
        insertedId
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

export { createNote };