# MERN Authentication Website

This is a web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It provides authentication functionality for users to sign up, log in, and access protected routes.

## Description

The goal of this project is to create a full-stack web application where users can set and track their goals. The backend is built with Node.js and Express.js, utilizing MongoDB as the database with Mongoose for modeling and interacting with the database. The frontend is developed using React.js, and it communicates with the backend via RESTful APIs. Authentication is implemented using JWT (JSON Web Tokens).

## Features

- User authentication (signup, login)
- Protected routes for authenticated users
- Ability to set and track goals
- Responsive design for a seamless user experience across devices

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
Install dependencies for both the backend and frontend:

bash
Copy code
cd mern-authentication-website
npm install
cd frontend
npm install
Set up environment variables:

Create a .env file in the backend directory with the following variables:

makefile
Copy code
PORT=5000
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
Run the application:

bash
Copy code
npm run dev
This command will concurrently start the backend server and frontend development server.

Open your browser and navigate to http://localhost:3000 to view the application.

Technologies Used
MongoDB: A NoSQL database used to store user information and goals.
Express.js: A web application framework for Node.js used to build the backend server and API endpoints.
React.js: A JavaScript library for building user interfaces used to create the frontend of the application.
Node.js: A JavaScript runtime environment used to run the backend server.
JWT (JSON Web Tokens): Used for authentication and creating secure tokens for user sessions.
bcryptjs: Library used for hashing passwords before storing them in the database.
Axios: Promise-based HTTP client for making requests to the backend API.
React Router DOM: Library used for handling navigation and routing in the React application.
Concurrently: Library used to run multiple commands concurrently.
Nodemon: Utility used to automatically restart the server when changes are made to the code during development.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
MongoDB
Express.js
React.js
Node.js
JWT
bcrypt.js
