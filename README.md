# Express MongoDB CRUD API

This project is a CRUD (Create, Read, Update, Delete) API backend built with Express.js and MongoDB Atlas. It follows the MVC (Model-View-Controller) architecture pattern, utilizing controllers, models, and routes.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your local machine.

- MongoDB Atlas account for database storage.

- Express.js framework knowledge.

## Setup

```bash
cd express-mongodb-crud-api
```
```bash
npm install
```

-Configure MongoDB Atlas connection:

-Create a .env file in the root directory.

-Add your MongoDB Atlas connection string to the .env file:

###env

-Copy code
```
-MONGODB_URI=your_connection_string_here
```

##Start the server:

```bash
npm run dev
```

##Usage

-Make HTTP requests to the provided routes for CRUD operations:

-GET /api/resource: Retrieve all resources.

-GET /api/resource/:id: Retrieve a specific resource by ID.

-POST /api/resource: Create a new resource.

-PUT /api/resource/:id: Update a resource by ID.

-DELETE /api/resource/:id: Delete a resource by ID.

```
##License

This project is licensed under the MIT License.
```
