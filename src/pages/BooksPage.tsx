import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
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
import { useDeleteBookMutation, useGetBooksQuery } from "@/features/books/booksApi";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function BooksPage() {
  const { data: books, isLoading, isError } = useGetBooksQuery();
  const [deleteBook] = useDeleteBookMutation();

  const handleDelete = async (id: string) => {
    try {
      await deleteBook(id).unwrap();
      toast.success("Book deleted successfully!");
    } catch {
      toast.error("Failed to delete book.");
    }
  };

  if (isLoading) return <p className="text-center mt-10">Loading books...</p>;
  if (isError) return <p className="text-center mt-10 text-red-500">Failed to fetch books.</p>;

  return (
    <div className="max-w-7xl mx-auto mt-5 px-3">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">📚 All Books</h1>
        <Link to="/create-book">
          <Button className="cursor-pointer">Add Book</Button>
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
                  <Button size="sm" className="cursor-pointer">Edit</Button>
                </Link>
                <Link to={`/borrow/${book._id}`}>
                  <Button size="sm" className="cursor-pointer border" variant="secondary">Borrow</Button>
                </Link>
                
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button size="sm" className="cursor-pointer" variant="destructive">Delete</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. The book "{book.title}" will be permanently deleted.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel className="cursor-pointer">Cancel</AlertDialogCancel>
                      <AlertDialogAction
                      className="cursor-pointer"
                        onClick={() => handleDelete(book._id)}
                      >
                        Yes, Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}