
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const Navbar = () => {
    return (
        <div>
          <header className=" border-b py-2">
           <div className='px-3 lg:px-4 h-16 flex items-center   mx-auto max-w-7xl'>
                <Link to="/" className="flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-emerald-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">LibraryPro</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
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
           </div>
            </header>
        </div>
    );
};

export default Navbar;