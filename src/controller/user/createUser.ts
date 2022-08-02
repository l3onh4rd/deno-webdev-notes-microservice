/**
 * - route to create a user
 */

import { DATA_API_KEY, BASE_URI, DATABASE_USER, DATA_SOURCE } from "../../constants.ts";
import { bcrypt } from "../../deps.ts";
import { checkIfUsernamIsTaken } from "../../utils/index.ts";

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "api-key": DATA_API_KEY 
  },
  body: ""
};

// @description: add single user
// @route POST /api/user/register
const register = async ({
  request,
  response,
}: {
  request: any;
  response: any;
}) => {
  try {
    if (!request.hasBody) {
      response.status = 400;
      response.body = {
        success: false,
        msg: "No Data",
      };
    } else {
      const body = await request.body();
      const user = await body.value;
      const URI = `${BASE_URI}/insertOne`;
      
      // get & hash password and save hash
      user.password = bcrypt.hashSync(user.password, await bcrypt.genSaltSync(10));

      // check if username already exist
      if (await checkIfUsernamIsTaken(user.username)) {
        response.status = 409;
        response.body = {
          success: false,
          message: "Username already exists"
        };
        return;
      }

      const query = {
        collection: "users",
        database: DATABASE_USER,
        dataSource: DATA_SOURCE,
        document: user
      };
      options.body = JSON.stringify(query);
      const dataResponse = await fetch(URI, options);
      const { insertedId } = await dataResponse.json();
                
      response.status = 201;
      response.body = {
        success: true,
        data: {
          "username": user.username,
        },
        insertedId
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

export { register };