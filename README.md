# Backend Workflow for Video Streaming

## Project Setup
1. Create database relation diagram ([Click Here](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj))
2. Add devDependencies : `npm i -D prettier` & `npm i -D nodemon`
3. Connect Database - MongoDB for this project
   1. Wrap in Try-Catch
   2. Use async
4. Setup middlewares like cors, cookieParser, static - "public" folder, etc.
5. Build "Utils" as required
6. Create Model Schema
   - Mongoose Midleware (Hooks) - don't use arrow function in pre hooks coz they don't have context (this and super) [Read More](https://mongoosejs.com/docs/middleware.html)
   - Pre Hook - performs an action/function just before save, update, delete, etc.
   - Mongoose Methods - custom methods (like pre-built updateOne, deleteOne)
   - JWT - bearer token (like a key, whoever posseses gets access) [Read More](https://github.com/auth0/node-jsonwebtoken)
   - Access Token and Refresh Token
7. Handling Files
   - Done using third party services - AWS, Cloudinary, etc.
   - Uploading files to **Cloudinary**
   - Setup Multer Middleware : [Multer](https://github.com/expressjs/multer) (Other package: `express-fileupload`)

## HTTP
![HTTP Methods](image-1.png)
![HTTP Status Code](image.png)

## Project Logic
1. Routes
   - Use standard practices to write APIs, eg: `/api/v1/users`
   - Routes and App Router
2. Controllers
   - logic building (user data fetch, validate, create, verify)
   - using utils (asyncHandler, ApiError, ApiResponse, etc)
   - sending cookies
   - database operations must have `await` and wrap in try-catch
3. Authentication
   - middleware - required multiple times
   - when accessToken expires, can fetch refreshToken from DB and regenerate accessToken without troubling user
4. Pipelines