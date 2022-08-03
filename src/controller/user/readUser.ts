/**
 * - route to read one user by username
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

// @description: GET single note
// @route GET /api/user/:username
const readUser = async ({
  params,
  response,
}: {
  params: { username: string };
  response: any;
}) => {
  try {
    const URI = `${BASE_URI}/findOne`;
    const query = {
      collection: "users",
      database: DATABASE_USER,
      dataSource: DATA_SOURCE,
      filter: { username: params.username },
    };
    options.body = JSON.stringify(query);
    const dataResponse = await fetch(URI, options);
    const user = await dataResponse.json();

    if (user.document !== null) {
      response.status = 200;
      response.body = {
        success: true,
        data: user,
      };
    } else {
      response.status = 404;
      response.body = {
        success: false,
        msg: "No user found",
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

export { readUser };
