/**
 * - handles jwt validation
 * - forwards to request on successful validation
 * - return 401 on failed validation
 */

import { Context, verify } from "../deps.ts";
import key from '../key.ts';

const authMiddleware = async (ctx: Context, next: any) => {

  const headers: Headers = ctx.request.headers;
  const authorization = headers.get('Authorization');
  // if statement to immidiately return 401 if no jwt token was provided
  if (!authorization) {
    ctx.response.status = 401;
    return;
  }
  // Header Authorization provides jwt like this "Bearer jwt", cut it just to the jwt
  const jwt = authorization.split(' ')[1];
  if (!jwt) {
    ctx.response.status = 401;
    return;
  }
  try {
    // if verification is successful, redirect to next route
    if (await verify(jwt, key)){
      await next(jwt);
      return;
    } 
  } catch (error) {
    ctx.response.status = 401;
    ctx.response.body = {message: 'Invalid jwt token'};
  }  
}

export default authMiddleware;