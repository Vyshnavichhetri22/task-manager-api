# Task Manager REST API

A beginner-friendly REST API built using **Node.js** and **Express.js** to manage tasks. It supports the four main CRUD operations: Create, Read, Update, and Delete.

## Features

- Get all tasks
- Get a single task by ID
- Create a new task
- Update an existing task
- Delete a task
- JSON request and response handling
- Basic input validation and error handling
- Appropriate HTTP status codes

## Technologies Used

- Node.js
- Express.js
- JavaScript

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Vyshnavichhetri22/task-manager-api.git
```

### 2. Navigate to the project folder

```bash
cd task-manager-api
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the server

```bash
npm start
```

If your project does not have a `start` script, run:

```bash
node server.js
```

Replace `server.js` with your actual main JavaScript filename if it is different.

The server runs at:

`http://localhost:3000`

## API Endpoints

Base URL: `http://localhost:3000`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/tasks` | Get all tasks |
| GET | `/api/tasks/:id` | Get a task by ID |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

## Example Requests

### Create a Task

**POST** `/api/tasks`

Request body:

```json
{
  "title": "Learn REST API",
  "description": "Practice Express CRUD operations"
}
```

### Update a Task

**PUT** `/api/tasks/1`

Request body:

```json
{
  "title": "Learn Express.js",
  "description": "Practice building REST APIs",
  "completed": true
}
```

## HTTP Status Codes

| Status Code | Meaning |
|---|---|
| 200 | Request successful |
| 201 | Resource created successfully |
| 400 | Invalid request data |
| 404 | Resource or route not found |

## Testing

The API can be tested using **Hoppscotch**, Postman, or curl.

For POST and PUT requests, select JSON as the request body format and use the `Content-Type: application/json` header.

## Data Storage

This project currently uses an in-memory JavaScript array to store tasks. Data is temporary and resets whenever the server restarts.

## Author

**Vyshnavi Chhetri**