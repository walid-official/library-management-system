import { useParams, useNavigate } from "react-router-dom";
import { useGetBookQuery } from "@/features/books/booksApi";
import { Button } from "@/components/ui/button";

const BookDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetBookQuery(id || "");

  if (isLoading) return <p className="flex justify-center items-center min-h-[80vh] text-3xl mt-10">Loading book details...</p>;
  if (isError || !data?.data) return <p className="text-center mt-10 text-red-500">Error loading book details</p>;

  const book = data.data;

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-extrabold text-gray-800">{book.title}</h1>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => navigate(-1)}>⬅ Back</Button>
          <Button onClick={() => navigate(`/edit-book/${book._id}`)}>✏️ Edit</Button>
        </div>
      </div>

      {/* Card Container */}
      <div className="bg-white shadow-xl rounded-xl p-6 space-y-6 border border-gray-200">
        {/* Description Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">📖 Description</h2>
          <p className="text-gray-600 leading-relaxed">{book.description}</p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-gray-600">👤 Author</h3>
            <p className="text-gray-800">{book.author}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-600">🏷️ Genre</h3>
            <p className="text-gray-800 capitalize">{book.genre.replace("_", " ").toLowerCase()}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-600">🔢 ISBN</h3>
            <p className="text-gray-800">{book.isbn}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-600">📦 Copies Available</h3>
            <p className="text-gray-800">{book.copies}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-600">📆 Created</h3>
            <p className="text-gray-800">{new Date(book.createdAt).toLocaleDateString()}</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-600">✅ Availability</h3>
            <p className={`font-semibold ${book.available ? "text-green-600" : "text-red-500"}`}>
              {book.available ? "Available" : "Unavailable"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
