# Deno Notes Microservice

Microservice with an API to create, read, update and delete notes. Made with Deno, Deno KV, Deno Deploy, MongoDB and ❤️

## Table of Contents

- [Deno Notes Microservice](#deno-notes-microservice)
  - [General Description](#general-description)
  - [Contribution](#contribution)
  - [Branches](#branches)
  - [Local Setup](#local-setup)
  - [Deno task commands](#deno-task-commands)
  - [Dependency Management](#dependency-managment)
  - [Database(s)](#database(s))
  - [Deployment](#deployment)
  - [Releases](#releases)
- [API documentation](#api-documentation)
  - [Postaman](#postman)
  - [Open API](#openapi)
- [Frontend](#frontend)
  - [General Information](#general-information)
  - [Deployment](#deployment-1)

## General Description

This Microservice provides an API to create, read, update and delete Notes.
Furthermore it provides routes to create users and perform a login. This service
was made for a presentation in July 2022. The service is maintained until now and gets updated frquently. Therefore this repository contains the source code of the service for general
use and contribution to the project.

## Contribution

If you would like to contribute you can contact me and I will provide you access
to the necessary rights. After that you can develop your feature, bugfix or
whatever on a feature branch. Please provide always a update to the changelog
file. If you are finished you can create a pull request to the integration
branch and I will review and test it. If everything is fine I will merge it to
the main branch and it gets deployed to the production server.

## Branches

Beside the main branch this repository has an integration branch named 'int'.
If you contribute please create yourself a feature branch from the integration
branch. Please create a pull request from you feature branch to the integration
branch.

## Local Setup

To use the services locally on your machine please make sure you have the latest
version of deno installed (check latest version on the official [Deno Homepage](https://deno.land/)).
Check the latest changelog entry about the last deno update as well.

To access
the database locally you have to setup environment variables. Please contact me
to get them. If you perform requests locally always keep in mind that you
perform requests to the production database.

To cache all dependencies (similar
to npm/yarn install) run the loadDep task or check the related
[chapter](#dependency-management). Use the deno task commands to start the
application described in the next step.

## Deno task commands

Deno tasks are prewritten commands in the deno.json file to avoid typing long
commands again and again. Please run them from the root folder.

| Task name              | Info                                                                                                                                                                                                                                                                                                       | Command                                                                                                                |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `update`               | upgrades to latest deno release                                                                                                                                                                                                                                                                            | deno upgrade                                                                                                           |
| `start`                | starts the application on localhost:6886                                                                                                                                                                                                                                                                   | deno run --allow-env --allow-net ./src/server.ts                                                            |
| `start-unstable`       | starts the application on localhost:6886 with unstable flag to use unstable features                                                                                                                                                                                                                       | deno run --unstable  --allow-env --allow-net ./src/server.ts                                                                       |
| `test`                 | runs all tests of the project                                                                                                                                                                                                                                                                              | deno test --allow-env --allow-net                                                                                      |
| `test-coverage`        | Generates a test coverage report with coverage files in the coverage_files folder. After that a coverage report file (lcov) is generated. You can process that file with tools like genhtml or online visualization tools. Those files are added to the gitignore and shouldn't be committet to this repository. | deno test --allow-env --allow-net --coverage=coverage_files;deno coverage coverage_files --lcov --output=coverage.lcov |
| `updateDep`            | Updates dependencies from deps.ts file and caches them locally                                                                                                                                                                                                                                             | deno cache --lock=lock.json --lock-write src/deps.ts                                                                   |
| `loadDep`              | Loads dependencies and caches them locally                                                                                                                                                                                                                                                                 | deno cache --lock=json src/deps.ts                                                                                     |
| `benchmark`            | runs benchmarks                                                                                                                                                                                                                                                                                            | deno bench --allow-env src/benchmark/benchmark.ts                                                                      |
| `executable-win`       | Creates executable file for Windows                                                                                                                                                                                                                                                                        | deno compile --target=x86_64-pc-windows-msvc --allow-net --allow-env ./src/server.ts                                   |
| `executable-apple`     | Creates executable file for Apple x86 architecture                                                                                                                                                                                                                                                         | deno compile --target=x86_64-apple-darwin --allow-net --allow-env ./src/server.ts                                      |
| `executable-apple-arm` | Creates executable file for Apple arm architecture                                                                                                                                                                                                                                                         | deno compile --target=aarch64-apple-darwin --allow-net --allow-env ./src/server.ts                                     |
| `executable-linux`     | Creates executable file for Linux                                                                                                                                                                                                                                                                          | deno compile --target=x86_64-unknown-linux-gnu --allow-net --allow-env ./src/server.ts                                 |

## Dependency Management

Although Deno always raves about not having to worry about modules or that there
is no node_modules folder, some dependency management still needs to be done.
All dependencies are specified in the deps.ts file (src/deps.ts) and imported
from there into the respective files. The advantage is that all dependencies are
in one place and can be managed centrally. Since version 1.29, the deno.lock
file is marked as stable and is automatically created when the cache, run or
test command is executed. To ensure that every developer uses the same
dependencies, the deno.lock file is also pushed to the repository. To update the
deno.lock file, simply run the cache, run, or test command. However, a
preconfigured command (deno task updateDep) is provided to update the deno.lock
file. To initially load the correct dependencies, the deno task loadDep command
can be used. The Deno runtime caches all dependencies and manages them on the
machine automatically.

## Database(s)

The notes service uses a Mongo DB Atlas instance deployed with AWS. With the
introduction of Deno KV a new API was introduced to us create, read, read all,
update and delete Notes on a Deno KV instance. Therefore you can use two
different databases depending on which API routes you are using.

At the moment the user management is only handled by the Mongo DB database.

## Deployment

The server is deployed via Deno Deploy. If changes are pushed to the main branch
it deploys the latest changes immidiately. The domain for that server is
https://web-dev-coffee-deno.deno.dev/

!!! KEEP IN MIND THAT THERE IS ONLY ONE DATABASE INSTANCE !!! If you perform
requests locally they affect the production database and the production
deployment as well.

## Releases

From time to time I release a specific state of the repository as a stable
version. This release will be created always from the main branch.

# API documentation

## Postman

Use the .postman_collection.json files from the root folder to import it inside
postman and you can perform requests easily to your local running server or to
the production server. The local requests are ending with '(local)'. The
production requets are ending with '(Deployment)'. Make sure you login with a
valid user before you start. You could create one via the User Api. These
request are only for local use. Your JWT token is valid for 60 minutes. There
are 4 collections.

- Local and Mongo DB database
- Local and Deno KV database
- Production server and Mongo DB database
- Production server and Deno KV database

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
Per default the UI is deactivated. If you would like to use it please contact
me.

## Deployment

The UI is hosted via a s3 bucket on aws. To avoid CORS errors the url of the
bucket is part of the server.ts file. In addition I created a pipeline which
deploys the newest updates to the UI automatically into the bucket if a new
commit is pushed to the ui repository.
