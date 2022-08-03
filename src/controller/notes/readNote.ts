/**
 * - route to get one note by id
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

// @description: GET single note
// @route GET /api/note/:collection/:id
const readNote = async ({
  params,
  response,
}: {
  params: { id: string; collection: string };
  response: any;
}) => {
  try {
    const URI = `${BASE_URI}/findOne`;
    const query = {
      collection: params.collection,
      database: DATABASE,
      dataSource: DATA_SOURCE,
      filter: { noteId: params.id },
    };
    options.body = JSON.stringify(query);
    const dataResponse = await fetch(URI, options);
    const notes = await dataResponse.json();

    if (notes.document !== null) {
      response.status = 200;
      response.body = {
        success: true,
        data: notes,
      };
    } else {
      response.status = 404;
      response.body = {
        success: false,
        message: "Note was not found",
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

export { readNote };
