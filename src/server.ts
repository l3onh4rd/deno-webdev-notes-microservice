/**
 * - main file of deno notes microservice
 * - starts a new oak application
 * - integrates notes api und user api routes
 */

import router from "./routes.ts";
import auth_router from "./auth_routes.ts";
import { Application, oakCors } from "./deps.ts";

const PORT = 6886;
const app = new Application();

app.use(
  // cors for frontend hosted via s3 bucket on aws
  oakCors({
    origin: [
      "http://webdevcoffe-deno-microservice.s3-website.eu-central-1.amazonaws.com",
      "http://localhost:3000",
      "http://webdev-notes-flow.s3-website.eu-central-1.amazonaws.com"
    ],
  }),
);

// use note routes
app.use(router.routes());
app.use(router.allowedMethods());
// use auth routes
app.use(auth_router.routes());
app.use(auth_router.allowedMethods());
// start server
app.listen({ port: PORT });
console.log(`Server listening on port ${PORT}`);
