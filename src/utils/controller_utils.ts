/**
 * - function to check if a uuid is already taken during creation process of a note
 */

import { BASE_URI, DATA_API_KEY, DATA_SOURCE, DATABASE } from "../constants.ts";

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "api-key": DATA_API_KEY,
  },
  body: "",
};

async function checkIfUuidIsTaken(
  uuid: string,
  collection: string,
): Promise<boolean> {
  const URI = `${BASE_URI}/findOne`;
  const query = {
    collection: collection,
    database: DATABASE,
    dataSource: DATA_SOURCE,
    filter: { noteId: uuid },
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

async function checkKvIfUuidIsTaken(
  uuid: string,
  collection: string,
): Promise<boolean> {
  
  const kv = await Deno.openKv();

  const result = await kv.get([collection, uuid]);

  if (result.value === null) {
    return false;
  } else {
    return true;
  }
}

export { checkIfUuidIsTaken, checkKvIfUuidIsTaken };
