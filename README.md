Project Name:- BrainBuzz

Group Members

Abhishek Yadav-2400520100006

Antrikshya Gupta-2400520100018

Ayush Sharma - 2400520100026

Aditya Pal - 2400520100009

Archit Saxena - 2400520100021

# BrainBuzz - Quiz Maker Platform

## Description
BrainBuzz is a modern, full-stack Quiz Maker platform designed to bridge the gap between educators and students. It provides a seamless environment for teachers to create, manage, and analyze quizzes, while offering students an intuitive portal to take quizzes and view their results. The application ensures secure authentication and a responsive, interactive user interface.

## Features
- **Role-based Authentication**: Secure login and registration for Teachers and Students using JWT.
- **Teacher Dashboard**: 
  - Create and manage custom quizzes.
  - View comprehensive results and analytics for quizzes taken by students.
- **Student Portal**:
  - Browse available quizzes.
  - Interactive quiz-taking interface.
  - Instant access to quiz results and performance feedback.
- **Modern UI/UX**: Responsive design tailored for all devices, smooth transitions, and intuitive navigation.
- **Secure Backend**: Protected API routes and robust data validation.

## Tech Stack
- **Frontend**: React (Vite), Tailwind CSS, Zustand (State Management), Framer Motion (Animations), Axios, React Router, React Hook Form, Lucide React (Icons).
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB (with Mongoose).
- **Security & Utilities**: JWT for authentication, bcryptjs for password hashing, CORS, Dotenv.

## Installation
For detailed step-by-step instructions, please refer to the `installation.txt` file included in this repository. 

1. **Clone the repository**
   ```bash
   git clone <repository_url>
   cd Mini_Project_Sem4
   ```
2. **Backend Setup**
   ```bash
   cd backend
   npm install
   # Configure .env file
   npm run dev
   ```
3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   # Configure .env file
   npm run dev
   ```

## Usage
- The application will be accessible at `http://localhost:5173`.
- The backend API runs on `http://localhost:5000` (or as configured).
- Register as a Teacher to start creating quizzes or log in as a Student to participate.

## Project Structure
```text
Mini_Project_Sem4/
├── backend/            # Express.js REST API
│   ├── config/         # Database and server configuration
│   ├── controllers/    # API endpoint logic (auth, quiz)
│   ├── middleware/     # Custom Express middlewares (e.g., authentication)
│   ├── models/         # Mongoose schemas for MongoDB
│   ├── routes/         # Express router definitions
│   └── server.js       # Backend application entry point
└── frontend/           # React frontend application
    ├── src/
    │   ├── components/ # Reusable UI components and layouts
    │   ├── pages/      # Distinct application views (Home, Dashboard, etc.)
    │   ├── services/   # Axios API configurations and calls
    │   ├── store/      # Zustand stores for global state
    │   └── App.jsx     # Main React application and routing component
```


## API Documentation 
### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Authenticate user and return JWT

### Quizzes
- `GET /api/quiz` - Retrieve all available quizzes
- `POST /api/quiz` - Create a new quiz (Teacher only)
- `GET /api/quiz/:id` - Retrieve a specific quiz
- `POST /api/quiz/:id/submit` - Submit quiz answers and calculate results
- `GET /api/quiz/:id/results` - Fetch quiz results (Teacher only)


## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author / Credits
Developed as part of Mini Project Semester 4.
