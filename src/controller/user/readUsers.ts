/**
 * - route to read all users
 */

import { BASE_URI, DATABASE_USER, DATA_API_KEY, DATA_SOURCE } from "../../constants.ts";

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "api-key": DATA_API_KEY 
  },
  body: ""
};

// @description: GET all user
// @route GET /api/users
const readUsers = async ({ 
    request,
    response 
  }: { 
    request: any,
    response: any;
   }) => {
    try {
      const URI = `${BASE_URI}/find`;
      const query = {
        collection: "users",
        database: DATABASE_USER,
        dataSource: DATA_SOURCE
      };
      options.body = JSON.stringify(query);
      const dataResponse = await fetch(URI, options);
      const allUser = await dataResponse.json();
      
      switch (allUser.documents.length) {
        case 0:
          response.status = 200;
          response.body = {
            success: true,
            notesCount: allUser.documents.length,
            message: `No notes found`,
            data: allUser,
          };
          break;      
        default:
          response.status = 200;
            response.body = {
              success: true,
              notesCount: allUser.documents.length,
              data: allUser,
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

  export { readUsers };