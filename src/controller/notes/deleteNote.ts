/**
 * - route to delete one note
 */

import { DATA_API_KEY, BASE_URI, DATABASE, DATA_SOURCE } from "../../constants.ts";

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "api-key": DATA_API_KEY 
  },
  body: ""
};

// @description: DELETE single note
// @route DELETE /api/note/:collection/:id
const deleteNote = async ({
    params,
    response,
  }: {
    params: { collection: string, id: string };
    response: any;
  }) => {
    try {
      const URI = `${BASE_URI}/deleteOne`;
      const query = {
        collection: params.collection,
        database: DATABASE,
        dataSource: DATA_SOURCE,
        filter: { noteId: params.id }
      };
      options.body = JSON.stringify(query);
      const dataResponse = await fetch(URI, options);
      const noteDeleted = await dataResponse.json();

      if (noteDeleted.deletedCount >= 1) {
        response.status = 200;
        response.body = {
          success: true,
          noteDeleted
        };
      } else {
        response.status = 404;
        response.body = {
          success: false,
          message: "No note was deleted",
          noteDeleted
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

  export { deleteNote };