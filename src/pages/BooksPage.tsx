import { useGetBooksQuery, useDeleteBookMutation } from "@/features/books/booksApi";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Link } from "react-router-dom";

export default function BooksPage() {
  const { data: books, isLoading, isError } = useGetBooksQuery();
  console.log(books)
  const [deleteBook] = useDeleteBookMutation();

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this book?")) {
      await deleteBook(id).unwrap();
    }
  };

  if (isLoading) return <p className="text-center mt-10">Loading books...</p>;
  if (isError) return <p className="text-center mt-10 text-red-500">Failed to fetch books.</p>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">📚 All Books</h1>
        <Link to="/create-book">
          <Button>Add Book</Button>
        </Link>
      </div>

      <Table>
        <TableCaption>A list of all books in the library.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Genre</TableHead>
            <TableHead>ISBN</TableHead>
            <TableHead>Copies</TableHead>
            <TableHead>Availability</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {books?.data?.map((book: any) => (
            <TableRow key={book?._id}>
              <TableCell className="font-medium">{book?.title}</TableCell>
              <TableCell>{book?.author}</TableCell>
              <TableCell>{book?.genre}</TableCell>
              <TableCell>{book?.isbn}</TableCell>
              <TableCell>{book?.copies}</TableCell>
              <TableCell>
                {book?.copies > 0 ? (
                  <span className="text-green-600 font-semibold">Available</span>
                ) : (
                  <span className="text-red-500 font-semibold">Unavailable</span>
                )}
              </TableCell>
              <TableCell className="flex justify-end gap-2">
                <Link to={`/edit-book/${book._id}`}>
                  <Button size="sm">Edit</Button>
                </Link>
                <Link to={`/borrow/${book._id}`}>
                  <Button size="sm" variant="secondary">Borrow</Button>
                </Link>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDelete(book._id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
