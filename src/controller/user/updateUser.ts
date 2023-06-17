/**
 * - route to update a user
 */

import {
  BASE_URI,
  DATA_API_KEY,
  DATA_SOURCE,
  DATABASE_USER,
} from "../../constants.ts";
import { checkIfUsernamIsTaken } from "../../utils/index.ts";
import { validatePassword, validateUsername } from "../../utils/index.ts";

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "api-key": DATA_API_KEY,
  },
  body: "",
};

// @description: UPDATE single user
// @route PUT /api/user/:username
const updateUser = async ({
  params,
  request,
  response,
}: {
  params: { username: string };
  request: any;
  response: any;
}) => {
  try {
    const body = await request.body();
    const user = await body.value;

    // check if username already exist
    if (await checkIfUsernamIsTaken(user.username)) {
      response.status = 409;
      response.body = {
        success: false,
        message: "Username already exists",
      };
      return;
    }

    // validate pattern of password

    if (!validatePassword(user.password)) {
      response.status = 409;
      response.body = {
        success: false,
        message: "Password pattern is invalid.",
      };
      return;
    }

    // validate pattern of username

    if (!validateUsername(user.username)) {
      response.status = 409;
      response.body = {
        success: false,
        message: "Username pattern is invalid.",
      };
      return;
    }

    const URI = `${BASE_URI}/updateOne`;
    const query = {
      collection: "users",
      database: DATABASE_USER,
      dataSource: DATA_SOURCE,
      filter: { username: params.username },
      update: { $set: { username: user.username } },
    };
    options.body = JSON.stringify(query);
    const dataResponse = await fetch(URI, options);
    const userUpdated = await dataResponse.json();

    if (userUpdated.matchedCount >= 1 && userUpdated.modifiedCount === 0) {
      response.status = 200;
      response.body = {
        success: true,
        message: "User is already up to date.",
        userUpdated,
      };
      return;
    }

    switch (userUpdated.matchedCount) {
      case 0:
        response.status = 404;
        response.body = {
          success: false,
          message: "User was not found",
          userUpdated,
        };
        break;

      case 1:
        response.status = 200;
        response.body = {
          success: true,
          message: "User was successfully updated",
          userUpdated,
        };
        break;

      default:
        response.status = 500;
        response.body = {
          success: false,
          message: "More than one user was updated. Critical error.",
          userUpdated,
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

export { updateUser };
