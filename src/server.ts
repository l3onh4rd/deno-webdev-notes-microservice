/**
 * - main file of deno notes microservice
 * - starts a new oak application
 * - integrates notes api und user api routes
 */

import { auth_router, kv_router, router } from "./routes.ts";
import { Application, oakCors } from "./deps.ts";

const PORT = 6886;
const app = new Application();

app.use(
  // cors for frontend hosted via s3 bucket on aws
  oakCors({
    origin: [
      "http://webdevcoffe-deno-microservice.s3-website.eu-central-1.amazonaws.com",
    ],
  }),
);

// use note routes
app.use(router.routes());
app.use(router.allowedMethods());
// use kv routes
app.use(kv_router.routes());
app.use(kv_router.allowedMethods());
// use auth routes
app.use(auth_router.routes());
app.use(auth_router.allowedMethods());
// start server
app.listen({ port: PORT });
console.log(`Server listening on port ${PORT}`);
