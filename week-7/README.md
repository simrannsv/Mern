# Week 7 — Capstone Project: Blog App

Full stack MERN blog application with authentication, CRUD operations, and deployment.

---

## Project Structure

### frontend
React.js frontend for the blog application

### backend
Node.js + Express backend API

---

## Features
- User registration and login with JWT authentication
- Create, read, update, delete blog posts
- Protected routes for authenticated users
- Responsive UI
- API integration between React and Express

---

## Tech Stack
- React.js + React Router
- Node.js + Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcrypt for password hashing
- CSS for styling

---

## How to Run

### Backend
```bash
cd backend
npm install
```
Add your `.env` file:
```
DB_URL=your_mongodb_url
PORT=3000
SECRET_KEY=your_secret_key
```
```bash
node server.js
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

---

## API Endpoints

### Auth
- POST /user-api/register — Register a new user
- POST /user-api/login    — Login and get token

### Blog Posts
- GET    /blog-api/posts       — Get all posts
- POST   /blog-api/addPost     — Create a post
- PUT    /blog-api/update/:id  — Update a post
- DELETE /blog-api/delete/:id  — Delete a post
