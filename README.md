## Finance Dashboard

Finance Dashboard is a full-stack web application that helps users track, visualize, and manage their personal or business finances. Users can register, log in, and securely store income, expenses, and categories, with dashboards and charts for insightful analysis.

---

### How to Run the Project

#### Backend

1. **Install dependencies:**
   ```sh
   cd backend
   npm install
   ```
2. **Set up environment variables:**
   - Create a `.env` file in the `backend` folder with the following:
     ```
     MONGO_URI=your-mongodb-uri
     JWT_SECRET=your-secret-key
     PORT=5000
     ```
3. **Start the backend server:**
   ```sh
   npm run dev
   ```
   The backend will run on [http://localhost:5000](http://localhost:5000).

#### Frontend

1. **Install dependencies:**
   ```sh
   cd frontend
   npm install
   ```
2. **Start the frontend development server:**
   ```sh
   npm run dev
   ```
   The frontend will run on [http://localhost:5173](http://localhost:5173).

---

### Features

- User authentication (register/login)
- Add, edit, and delete financial transactions
- Categorize income and expenses
- View financial summaries and charts
- Responsive and user-friendly dashboard

---