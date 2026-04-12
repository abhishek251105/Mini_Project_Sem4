import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TeacherHeader from './TeacherHeader';

export default function TeacherLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <TeacherHeader />
      <div className="flex min-h-0 flex-1">
        <Sidebar />
        <main className="flex-1 overflow-auto p-6 lg:p-10">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
