import React from 'react';
import { Outlet } from 'react-router-dom';
import PublicNavbar from './PublicNavbar';

export default function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <PublicNavbar />
      <div className="flex-1 flex flex-col pt-16">
        <Outlet />
      </div>
    </div>
  );
}
