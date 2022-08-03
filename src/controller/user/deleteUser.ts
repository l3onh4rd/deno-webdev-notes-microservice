/**
 * - route to delete a user
 */

import {
  BASE_URI,
  DATA_API_KEY,
  DATA_SOURCE,
  DATABASE_USER,
} from "../../constants.ts";

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "api-key": DATA_API_KEY,
  },
  body: "",
};

// @description: DELETE single user
// @route DELETE /api/user/:username
const deleteUser = async ({
  params,
  response,
}: {
  params: { username: string };
  response: any;
}) => {
  try {
    const URI = `${BASE_URI}/deleteOne`;
    const query = {
      collection: "users",
      database: DATABASE_USER,
      dataSource: DATA_SOURCE,
      filter: { username: params.username },
    };
    options.body = JSON.stringify(query);
    const dataResponse = await fetch(URI, options);
    const userDeleted = await dataResponse.json();

    if (userDeleted.deletedCount >= 1) {
      response.status = 200;
      response.body = {
        success: true,
        userDeleted,
      };
    } else {
      response.status = 200;
      response.body = {
        success: false,
        message: "No note was deleted",
        userDeleted,
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

export { deleteUser };
