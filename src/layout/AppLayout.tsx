// layout/AppLayout.tsx
import { Outlet, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 border-b flex gap-4">
        <Link to="/books"><Button variant="outline">All Books</Button></Link>
        <Link to="/create-book"><Button>Add Book</Button></Link>
        <Link to="/borrow-summary"><Button variant="secondary">Borrow Summary</Button></Link>
      </header>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
      <footer className="p-4 border-t text-center text-sm text-gray-500">
        Minimal Library Management System © 2025
      </footer>
    </div>
  );
}
