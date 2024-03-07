# Changelog of WebDev Notes Microservice (Deno)

## Next Release

### Features

- added start-unstable task
  - currently it uses the unstable-kv flag

### Updates

- updated deno v1.27.1 -> v1.41.1
- updated std v0.162.0 -> v0.218.2

## 0.4.0

### Features

- added deno.lock file
- added "deno task update" (performs deno upgrade) to avoid confusion with deno
  upgrade
- removed lock.json file (replaced by deno.lock file)
  ([Issue 31](https://github.com/l3onh4rd/deno-webdev-notes-microservice/issues/31))
- adapted loadDep and updateDep task accordingly to the new deno.lock file
  ([Issue 31](https://github.com/l3onh4rd/deno-webdev-notes-microservice/issues/31))
- bench command is stable
- refined permissons for start and test task
  ([Issue 4](https://github.com/l3onh4rd/deno-webdev-notes-microservice/issues/4))
- added execute task to create exetuable file (added file to git ignore as well)
  ([Issue 33](https://github.com/l3onh4rd/deno-webdev-notes-microservice/issues/33))
- combined auth and notes router in one file, use auth middleware generally for
  notes router
  ([Issue 34](https://github.com/l3onh4rd/deno-webdev-notes-microservice/issues/34))
- Username pattern validation - min. 8 characters, max. 30 characters, only
  alphanumeric values
  ([Issue 35](https://github.com/l3onh4rd/deno-webdev-notes-microservice/issues/35))
  ([Issue 40](https://github.com/l3onh4rd/deno-webdev-notes-microservice/issues/40))
  ([Issue 41](https://github.com/l3onh4rd/deno-webdev-notes-microservice/issues/41))
- Password pattern validation - min. 12 characters, max. 64 characters, only
  alphanumeric values and ! " § % & / ( ) = ? : ; -
  ([Issue 35](https://github.com/l3onh4rd/deno-webdev-notes-microservice/issues/35))
  ([Issue 40](https://github.com/l3onh4rd/deno-webdev-notes-microservice/issues/40))
  ([Issue 41](https://github.com/l3onh4rd/deno-webdev-notes-microservice/issues/41))
- added coverage report command to generate lcov report file
  ([Issue 55](https://github.com/l3onh4rd/deno-webdev-notes-microservice/issues/55))
- added api to create, read, read all, update and delte notes with Deno KV as
  database
  ([Issue 70](https://github.com/l3onh4rd/deno-webdev-notes-microservice/issues/70))

### Updates

- updated deno v1.27.1 -> v1.34.3
- updated std v0.162.0 -> v0.192.0

## 0.3.0

### Features

-removed deno std/bench.ts dependency

### Updates

- updated deno to v1.26.2
- updated std to v0.160.0
- updated deno to v1.26.1
- updated std to v0.159.0
- updated deno to v1.26.0
- updated std to v0.158.0
- updated deno to v1.25.4
- updated std to v0.157.0
- updated deno to v1.25.3
- updated std to v0.156.0
- updated deno to v1.25.2
- updated std to v0.155.0

## 0.2.0

### Features

- jwt token is valid for 1 hours

### Updates

- updated deno to v1.25.1
- updated std to v0.154.0
- updated deno to v1.25.0
- updated std to v0.153.0
- updated deno to v1.24.3
- updated std to v0.152.0

## 0.1.0

### Features

- updating updatedAt date on updating process
- check for notes title (subtitle not mandatory) during creation
- read many notes route returns now a list of notes and not a list one listed
  notes
- createdAt date added
- updatedAt date added

### Bug Fixes

- updated to bcrypt lib version 0.4.0 to ensure correct validation of password
  hashes
- not returning password hash on register
- returning http status code 404 on deleting note if note id was not found

### Updates

- updated deno to v1.24.2
- updated std to v0.151.0
- updated deno to v1.24.1
- updated std to v0.150.0
- updated deno to v1.24.0
- updated std to v0.149.0
- updated deno to v1.23.4
- updated std to v0.148.0
- updated deno to v1.23.3
- updated std to v0.147.0
- updated deno to v1.23.2
- updated std to v0.146.0
- updated deno to v1.23.1
- updated std to v0.145.0
- updated deno to v1.23.0
- updated std to v0.144.0
- updated deno to v1.22.3
- updated std to v0.143.0
- updated deno to v1.22.2
- updated std to v0.142.0
- updated deno to v1.22.1
- updated std to v0.141.0
- updated deno to v1.22.0
- updated std to v0.140.0
- updated deno to v1.21.3
- updated std to v0.139.0
- updated deno to v1.21.2
- updated std to v0.138.0
- updated deno to v1.21.1
- updated std to v0.137.0
- updated deno to v1.21.0
- updated std to v0.136.0
- updated deno to 1.20.6
- updated std to 0.135.0
- updated deno to 1.20.5
- updated std to 0.134.0

## Before first version

- basic tests
- some benchmarks
- depedency file
- login
- api to create, read, update, delete user
- api to create, read, update, delete notes
- added changelog ;)
