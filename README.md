# Deno Notes Microservice

Microservice for notes data transfer. Made with Deno, MongoDB and ❤️ Test

## General Description

This Microservice provides an API to create, read, update and delete Notes.
Furthermore it provides routes to create User and perform a login. This service
was made for a 'WebDev' presentation in july 2022. One outcome of this
presentation was that this service could be used for other presentations.
Therefore this repository contains the source code of the service for general
use and contribution to the project.

## Contribution

If you would like to contribute you can contact me and I will provide you access
to the necessary rights. After that you can develop your feature, bugfix or
whatever on a feature branch. Please provide always a update to the changelog
file. If you are finished you can create a pull request to the integration
branch and I will review and test it. If everything is fine I will merge it to
the main branch and it gets deployed to the production server.

## Branches

Beside the main branch this repository contains an integration branch ('int').
If you contribute please create yourself a feature branch from the integration
branch. Please create a pull request from you feature branch to the integration
branch. The main branch should be locked.

## Local Setup

To use the services locally on your machine please make sure you have the latest
version of deno installed ([check latest version here](https://deno.land/)).
Check the latest changelog entry about the last deno update as well. To access
the database locally you have to setup environment variables. Please contact me
to get them. If you perform requests locally always keep in mind that you
perform requests to the production database. Use the deno task commands to start
the application described in the next step.

## Deno task commands

Deno tasks are prewritten commands in the deno.json file to avoid typing long
commands again and again. Currently 5 tasks are available. Please run them
always from the root folder.

- deno task start: starts the application on localhost:6886
- deno task test: runs all tests of the project
- deno task updateDep: updates all dependencies integrated in the deps.ts file
  and caches them locally
- deno task loadDep: loads all dependencies from the lock.json file
- deno task benchmark: runs benchmarks

## Deployment

The server is deployed via Deno Deploy. If changes are pushed to the main branch
it deploys the latest changes immidiately. The domain for that server is
https://web-dev-coffee-deno.deno.dev/

!!! KEEP IN MIND THAT THERE IS ONLY ONE DATABASE INSTANCE !!! If you perform
requests locally they affect the production database and the production
deployment as well.

For further details please contact me.

# API documentation

## Postman

Use the 'Deno Notes Microservice.postman_collection.json' file from the root
folder to import it inside postman and you can perform requests easily to your
local running server or to the production server. The local requests are ending
with '(local)'. The production requets are ending with '(Deployment)'. Make sure
you login with a valid user before you start. You could create one via the User
Api. These request are only for local use. Your JWT token is valid for 5
minutes.

## OpenAPI

The API documentation is made with OpenAPI and is located in the api.yaml file.
More information will follow...

To use it install VS Code extension 'OpenAPI Designer' from 'philosowaffle' and
run it from the command palette. It should automatically open the api.yaml file.

# Frontend

## General Information

I created an Angular (v14) frontend for that API to easily use the API and play
around with it. You can visit the UI
[here](http://webdevcoffe-deno-microservice.s3-website.eu-central-1.amazonaws.com).
Per default the UI is deactivated. If you would like to use it please cantact
me.

## Deployment

The UI is hosted via a s3 bucket on aws. To avoid CORS errors the url of the
bucket is part of the server.ts file. In addition I created a pipeline which
deploys the newest updates to the UI automatically into the bucket if a new
commit is pushed to the ui repository.
