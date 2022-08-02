/**
 * - implementation of put/update route for a note by id
 */

import { DATA_API_KEY, BASE_URI ,DATABASE ,DATA_SOURCE } from "../../constants.ts";

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "api-key": DATA_API_KEY 
  },
  body: ""
};

// @description: UPDATE single note
// @route PUT /api/note/:collection/:id
const updateNote = async ({
    params,
    request,
    response,
  }: {
    params: { collection: string, id: string };
    request: any;
    response: any;
  }) => {
    try {
      const body = await request.body();
      const note = await body.value;
      const URI = `${BASE_URI}/updateOne`;
      note.updatedAt = Date.now();
      const query = {
        collection: params.collection,
        database: DATABASE,
        dataSource: DATA_SOURCE,
        filter: { noteId: params.id },
        update: { $set: note  }
      };
      options.body = JSON.stringify(query);
      const dataResponse = await fetch(URI, options);
      const noteUpdated = await dataResponse.json();

      if (noteUpdated.matchedCount >= 1 && noteUpdated.modifiedCount === 0) {
        response.status = 200;
          response.body = { 
            success: true,
            message: "Note is already up to date.",
            noteUpdated
          };
          return;
      }

      switch (noteUpdated.matchedCount) {
        case 0:
          response.status = 404;
          response.body = { 
            success: false,
            message: "Note was not found",
            noteUpdated
          };
          break;

        case 1:
          response.status = 200;
          response.body = { 
            success: true,
            noteUpdated 
          };
          break;
      
        default:
          response.status = 200;
          response.body = { 
            success: false,
            message: "More than one note was updated. Critical error.",
            noteUpdated 
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

  export { updateNote };