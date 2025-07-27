
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

const Navbar = () => {
    return (
        <div>
        <header className="p-4 border-b flex gap-4">
            <Link to="/books"><Button variant="outline">All Books</Button></Link>
            <Link to="/create-book"><Button>Add Book</Button></Link>
            <Link to="/borrow-summary"><Button variant="secondary">Borrow Summary</Button></Link>
          </header>
        </div>
    );
};

export default Navbar;