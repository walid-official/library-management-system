import { useGetBooksQuery } from "@/features/books/booksApi";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HomeBooks = () => {
  const { data: books, isLoading, isError } = useGetBooksQuery();
  const navigate = useNavigate();

  if (isLoading) return <p className="flex justify-center items-center min-h-[80vh] text-3xl mt-10">Loading books...</p>;
  if (isError) return <p className="text-center mt-10 text-red-500">Failed to fetch books.</p>;

  const recentBooks = books?.data?.slice(0, 6);

  return (
    <section className="max-w-7xl mx-auto my-16 px-4">
      {/* Section Heading */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">📚 Discover Recent Books</h2>
          <p className="text-gray-500">Explore our latest additions to the library</p>
        </div>
        <Link to="/books">
          <Button className="cursor-pointer">Show All Books</Button>
        </Link>
      </div>

      {/* Cards Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentBooks?.map((book: any) => (
          <div
            key={book._id}
            onClick={() => navigate(`/books/${book._id}`)}
            className="bg-white rounded-xl shadow-md p-5 cursor-pointer hover:shadow-lg transition duration-300 border border-gray-100"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-1">{book.title}</h3>
            <p className="text-gray-600 mb-1">👤 {book.author}</p>
            <p className="text-gray-500 mb-3">📚 {book.genre}</p>
            <div>
              {book.copies > 0 ? (
                <span className="inline-block bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full">
                  Available
                </span>
              ) : (
                <span className="inline-block bg-red-100 text-red-700 text-sm font-medium px-3 py-1 rounded-full">
                  Unavailable
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeBooks;
