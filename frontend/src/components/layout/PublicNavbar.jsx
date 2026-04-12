import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import useAuthStore from '../../store/useAuthStore';

/** Shown on /quiz/:id and /quiz/:id/result — no auth store, no teacher UI. */
function StudentQuizNav() {
  return (
    <nav className="glass sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2 text-primary-600">
          <BookOpen className="h-6 w-6" />
          <span className="text-xl font-bold">BrainBuzz</span>
        </Link>
        <span className="text-sm text-gray-500">Student quiz</span>
      </div>
    </nav>
  );
}

/** Home, login, register — teacher shortcuts never include logout (logout lives under /teacher only). */
function MarketingNav() {
  const { isAuthenticated } = useAuthStore();

  return (
    <nav className="glass sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2 text-primary-600">
          <BookOpen className="h-6 w-6" />
          <span className="text-xl font-bold">Brainbuzz</span>
        </Link>

        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <Link
              to="/teacher/dashboard"
              className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 transition-colors"
            >
              Teacher dashboard
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm font-medium text-gray-700 hover:text-primary-600 transition-colors"
              >
                Log in
              </Link>
              <Link
                to="/register"
                className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 transition-colors"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default function PublicNavbar() {
  const { pathname } = useLocation();
  const isStudentQuizView = /^\/quiz\/[^/]+(\/result)?\/?$/.test(pathname);

  if (isStudentQuizView) {
    return <StudentQuizNav />;
  }

  return <MarketingNav />;
}
