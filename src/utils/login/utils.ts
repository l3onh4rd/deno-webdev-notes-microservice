/**
 * - util function to check if a username is taken during registration process
 */

import { DATA_API_KEY, BASE_URI ,DATABASE_USER ,DATA_SOURCE } from "../../constants.ts";

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "api-key": DATA_API_KEY 
  },
  body: ""
};

async function checkIfUsernamIsTaken(username: string): Promise<boolean> {
    const URI = `${BASE_URI}/findOne`;
    const query = {
      collection: "users",
      database: DATABASE_USER,
      dataSource: DATA_SOURCE,
      filter: { username: username }
    };
    options.body = JSON.stringify(query);
    const dataResponse = await fetch(URI, options);
    const response = await dataResponse.json();
    if (response.document === null) {
      return false;
    } else {
      return true;
    }
  }

export { checkIfUsernamIsTaken };