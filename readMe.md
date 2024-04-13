# JWT Authentication and Authorization

## 1. Node.js + TypeScript + MongoDB: JWT Authentication

In this article, you'll learn how to add JSON Web Token (JWT) Authentication to your Node.js app with TypeScript, MongoDB, Mongoose, Typegoose, Docker, Redis, and Zod.

![Node.js + TypeScript + MongoDB: JWT Authentication](https://codevoweb.com/wp-content/uploads/2022/04/Node.js-TypeScript-MongoDB-JWT-Authentication.webp)

### Topics Covered

- Setup Development Environment (Optional)
  - Download and Install Node.js
  - Download and Install Docker
  - Download and Install MongoDB Compass
- Node.js, Redis, MongoDB, Typegoose, Docker: JWT Authentication example
- JWT Authentication Flow with Redis, MongoDB, and Node.js
- Project Structure
- Project Setup
  - Initialize a Node.js Project with TypeScript
  - Install the Required Libraries
  - Initialize and Start the Express Server
  - Setting up Redis and MongoDB with Docker Compose
  - Connecting to the MongoDB Docker Container with Mongoose
  - Connecting to Redis Docker Container
- Creating the Database Schema with Typegoose
- How to Generate Private and Public keys for JWT Authentication
- Define Middleware to Sign and Verify JWTs
- Define a Custom Error Handler in Express
- Define the Zod Validation Schema
- Create a Middleware to Validate the User Inputs
- Create a Service to Communicate with the Database
- Create the Authentication Controller
- Create the User Controller to Test Authorization
- Define a function to deserialize the User
- Define a function to check if the user is logged in
- Define a Middleware to Restrict Unauthorized Access
- Create the Authentication Routes
- Update the app.ts file to use the route
- Testing the JWT Authentication Rest API
  - Register users
  - Login user
  - Get Currently Logged in User's Credentials
  - Admin Get All Users

## 2. Node.js + TypeScript + MongoDB: JWT Refresh Token

In this article, you'll learn how to implement JWT Authentication with an Access and a Refresh token using Node.js, TypeScript, MongoDB, Redis, and Docker.

![Node.js + TypeScript + MongoDB: JWT Refresh Token](https://codevoweb.com/wp-content/uploads/2022/04/Node.js-TypeScript-MongoDB-JWT-Refresh-Token.webp)

### Topics Covered

- JWT Refresh Token with Node.js, TypeScript, and MongoDB Overview
- JWT Refresh Token Implementation Flow
- Generate Public and Private Keys for the Token
- Update Environment Variables in Config
- Update the Sign and Verify JWT Utility Functions
- Update the Sign Token Service Function
- Update the Login Controller
- Create a Controller to Refresh Access Token
- Create a Controller to Logout User
- Update the Authentication Routes
- Update app.ts
