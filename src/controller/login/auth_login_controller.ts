/**
 * - route to login
 */

import key from "../../key.ts";
import { DATA_API_KEY, BASE_URI, DATABASE_USER, DATA_SOURCE } from "../../constants.ts";
import { Header, Context, bcrypt, Payload, getNumericDate, create } from "../../deps.ts";

const header: Header = {
  alg: "HS512",
  typ: "JWT",
};

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "api-key": DATA_API_KEY 
  },
  body: ""
};

export const login = async (ctx: Context) => {
  const body = await ctx.request.body();
  const value = await body.value;

  try {
    
    // search for user in database
    const user_response = await checkForUser(value.username);

    // check if user exists
    if (user_response.document === null) {
      ctx.response.status = 404;
      ctx.response.body = {
        message: 'User was not found. Please try again later or create an account.'
      }
      return;
    }
    // get password hash of user in database
    const pw_hash = user_response.document.password;

    // verify hash and proceed login
    if (value.username === user_response.document.username && bcrypt.compareSync(value.password, pw_hash)) {
      await proceedLogin(user_response, ctx);
      return;
    } else {
      ctx.response.status = 422;
      ctx.response.body = {
        message: 'Invalid username or password'
      };
    }

  } catch (error) {
    ctx.response.status = 500;
    ctx.response.body = {
      message: 'Notes Microservie caused internal server error',
      error: error.stack
    };
  }
};

/**
 * Function to check user with param username exists
 * Functions sends a request to mongo database API and returns a user if it exists or null if no one exists with this username
 * @param username 
 * @returns user data by username
 */
async function checkForUser(username: any) {
  const URI = `${BASE_URI}/findOne`;
  const query = {
    collection: "users",
    database: DATABASE_USER,
    dataSource: DATA_SOURCE,
    filter: { username: username }
  };
  options.body = JSON.stringify(query);
  const dataResponse = await fetch(URI, options);
  return await dataResponse.json();
}

/**
 * Function to return a jwt token if username and password combination was correct
 * @param user_response data of user
 * @param ctx Context
 * @returns 
 */
async function proceedLogin(user_response: any, ctx: Context) {
  const payload: Payload = {
    iss: String(user_response.document.username + user_response.document.password),
    exp: getNumericDate(300)
  }
  // Create JWT and send it to user
  const jwt = await create(header, payload, key);
  if (jwt) {
    ctx.response.status = 200;
    ctx.response.body = {
      id: user_response.document._id,
      username: user_response.document.username,
      jwt,
    }
  } else {
    ctx.response.status = 500;
    ctx.response.body = {
      message: 'Internal server error'
    }
  }
  return;
}
