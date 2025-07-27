// layout/AppLayout.tsx
import { Outlet, } from "react-router-dom";

import Navbar from './../components/navbar/Navbar';

export default function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
        <main className="flex-1 p-6">
            <Outlet />
        </main>
      <footer className="p-4 border-t text-center text-sm text-gray-500">
        Minimal Library Management System © 2025
      </footer>
    </div>
  );
}
