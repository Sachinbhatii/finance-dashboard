# Finance Dashboard Backend

A simple Node.js/Express backend with MongoDB for the Finance Dashboard project.

## Features

- User authentication (JWT-based)
- Manage expenses (CRUD)
- Manage monthly budgets

## Getting Started

1. Install dependencies:

   ```
   npm install
   ```

2. Set up `.env`:

   ```env
   MONGO_URI=mongodb://localhost:27017/finance_dashboard
   JWT_SECRET=your_super_secret_jwt_key
   ```

3. Start MongoDB locally or use MongoDB Atlas.

4. Start the server:

   ```
   npm run dev
   ```

## API Endpoints

- `POST   /api/auth/register` — Register new user
- `POST   /api/auth/login` — User login
- `GET    /api/expenses` — List all expenses (auth required)
- `POST   /api/expenses` — Add new expense (auth required)
- `DELETE /api/expenses/:id` — Delete expense (auth required)
- `GET    /api/budgets/:month` — Get budget for a month (auth required)
- `POST   /api/budgets` — Set budget for a month (auth required)

Use JWT Bearer token in the `Authorization` header for protected routes.
