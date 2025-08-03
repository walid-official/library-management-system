import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookSchema, type BookFormData } from "@/lib/bookSchema";
import { useAddBookMutation } from "@/features/books/booksApi";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import toast from "react-hot-toast";

const GENRE_OPTIONS = [
  { label: "Fiction", value: "FICTION" },
  { label: "Non-Fiction", value: "NON_FICTION" },
  { label: "Science", value: "SCIENCE" },
  { label: "History", value: "HISTORY" },
  { label: "Biography", value: "BIOGRAPHY" },
  { label: "Fantasy", value: "FANTASY" },
];

export default function CreateBookPage() {
  const [addBook] = useAddBookMutation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookFormData>({
    resolver: zodResolver(bookSchema),
  });

  const onSubmit = async (data: BookFormData) => {
    await addBook(data).unwrap();
    toast.success("Book added successfully!");
    navigate("/books");
  };

  return (
    <Card className="max-w-lg mx-auto p-6 mt-5">
      <CardHeader>
        <CardTitle>Add New Book</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label className="mb-2">Title</Label>
            <Input {...register("title")} placeholder="Book Title" />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title.message}</p>
            )}
          </div>

          <div>
            <Label className="mb-2">Author</Label>
            <Input {...register("author")} placeholder="Author Name" />
            {errors.author && (
              <p className="text-red-500 text-sm">{errors.author.message}</p>
            )}
          </div>

          <div>
            <Label className="mb-2">Genre</Label>
            <select
              {...register("genre")}
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              defaultValue=""
            >
              <option value="" disabled>
                Select Genre
              </option>
              {GENRE_OPTIONS.map(({ label, value }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
            {errors.genre && (
              <p className="text-red-500 text-sm">{errors.genre.message}</p>
            )}
          </div>

          <div>
            <Label className="mb-2">ISBN</Label>
            <Input {...register("isbn")} placeholder="ISBN Number" />
            {errors.isbn && (
              <p className="text-red-500 text-sm">{errors.isbn.message}</p>
            )}
          </div>

          <div>
            <Label className="mb-2">Description</Label>
            <Input {...register("description")} placeholder="Short description" />
          </div>

          <div>
            <Label className="mb-2">Copies</Label>
            <Input
              type="number"
              {...register("copies", { valueAsNumber: true })}
              placeholder="Number of copies"
            />
            {errors.copies && (
              <p className="text-red-500 text-sm">{errors.copies.message}</p>
            )}
          </div>

          <Button type="submit" className="w-full cursor-pointer">
            Add Book
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
