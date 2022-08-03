/**
 * - route to read all notes by collection
 */

import {
  BASE_URI,
  DATA_API_KEY,
  DATA_SOURCE,
  DATABASE,
} from "../../constants.ts";

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "api-key": DATA_API_KEY,
  },
  body: "",
};

// @description: GET all notes
// @route GET /api/notes/:collection
const readNotes = async ({
  params,
  request,
  response,
}: {
  params: { collection: string };
  request: any;
  response: any;
}) => {
  try {
    const URI = `${BASE_URI}/find`;
    const query = {
      collection: params.collection,
      database: DATABASE,
      dataSource: DATA_SOURCE,
    };
    options.body = JSON.stringify(query);
    const dataResponse = await fetch(URI, options);
    const allNotes = await dataResponse.json();

    switch (allNotes.documents.length) {
      case 0:
        response.status = 200;
        response.body = {
          success: true,
          notesCount: allNotes.documents.length,
          message: `No notes found`,
          data: allNotes,
        };
        break;
      default:
        response.status = 200;
        response.body = {
          success: true,
          notesCount: allNotes.documents.length,
          data: allNotes,
        };
        break;
    }
  } catch (err) {
    response.status = 500;
    response.body = {
      success: false,
      msg: err.toString(),
    };
  }
};

export { readNotes };
