import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PublicLayout from './components/layout/PublicLayout';
import ProtectedRoute from './components/layout/ProtectedRoute';
import TeacherLayout from './components/layout/TeacherLayout';

import Home from './pages/Home';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Dashboard from './pages/teacher/Dashboard';
import CreateQuiz from './pages/teacher/CreateQuiz';
import QuizResults from './pages/teacher/QuizResults';
import TakeQuiz from './pages/student/TakeQuiz';
import QuizResult from './pages/student/QuizResult';

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/quiz/:id" element={<TakeQuiz />} />
        <Route path="/quiz/:id/result" element={<QuizResult />} />
      </Route>

      <Route
        path="/teacher"
        element={
          <ProtectedRoute>
            <TeacherLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="create-quiz" element={<CreateQuiz />} />
        <Route path="quiz/:id/results" element={<QuizResults />} />
      </Route>
    </Routes>
  );
}

export default App;
