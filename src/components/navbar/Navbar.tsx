import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b py-2">
      <div className="px-4 h-16 flex items-center justify-between mx-auto max-w-7xl">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <BookOpen className="h-8 w-8 text-emerald-600" />
          <span className="ml-2 text-xl font-bold text-gray-900">LibraryPro</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex ml-auto gap-4">
          <Link to="/" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Home
          </Link>
          <Link to="/books" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            All Books
          </Link>
          <Link to="/create-book" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Add Book
          </Link>
          <Link to="/borrow-summary" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Borrow Summary
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden ml-auto text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu links */}
      {isOpen && (
        <nav className="md:hidden flex flex-col gap-2 px-4 pb-4">
          <Link to="/" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Home
          </Link>
          <Link to="/books" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            All Books
          </Link>
          <Link to="/create-book" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Add Book
          </Link>
          <Link to="/borrow-summary" className="text-sm font-medium hover:text-emerald-600 transition-colors">
            Borrow Summary
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
