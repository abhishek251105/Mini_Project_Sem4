import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, LogOut } from 'lucide-react';
import useAuthStore from '../../store/useAuthStore';

export default function TeacherHeader() {
  const { teacher, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="glass sticky top-0 z-50 h-16 w-full shrink-0 border-b backdrop-blur">
      <div className="flex h-full items-center justify-between px-4 lg:px-8">
        <Link to="/teacher/dashboard" className="flex items-center space-x-2 text-primary-600">
          <BookOpen className="h-6 w-6" />
          <span className="text-xl font-bold">BrainBuzz</span>
        </Link>
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium text-gray-700">
            Welcome, {teacher?.name || 'Teacher'}
          </span>
          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center space-x-1 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
          >
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
}
