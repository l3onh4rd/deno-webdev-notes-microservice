# Changelog of WebDev Notes Microservice (Deno)

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
