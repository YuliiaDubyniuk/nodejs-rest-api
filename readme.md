# Node.js REST API

A RESTful API built with **Node.js** and **Express**. Includes full CRUD operations for user/contact resources, with validation, authentication, and proper error handling.

---

## Features

- REST endpoints for user or contact management:
  - `GET` all items or by ID  
  - `POST` to create  
  - `PATCH` to update  
  - `DELETE` to remove  
- Data storage using MongoDB (via Mongoose)
- Token-based authorization
- Data validation and structured error handling
- Development workflow with nodemon for live reload
- Linting support (`ESLint`) to ensure code quality

---

## Getting Started

### Prerequisites

- Node.js (v14+, LTS recommended)
- npm
- MongoDB

### Installation

```bash
git clone https://github.com/YuliiaDubyniuk/nodejs-rest-api.git
cd nodejs-rest-api
npm install

## Running the Server
- `npm start` &mdash; run server (production)
- `npm run start:dev` &mdash; run server (development)
