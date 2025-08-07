import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookSchema, type BookFormData } from "@/lib/bookSchema";
import { useGetBookQuery, useUpdateBookMutation } from "@/features/books/booksApi";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const GENRE_OPTIONS = [
  { label: "Fiction", value: "FICTION" },
  { label: "Non-Fiction", value: "NON_FICTION" },
  { label: "Science", value: "SCIENCE" },
  { label: "History", value: "HISTORY" },
  { label: "Biography", value: "BIOGRAPHY" },
  { label: "Fantasy", value: "FANTASY" },
];

export default function EditBookPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: bookResponse, isLoading,refetch } = useGetBookQuery(id!);

  // Extract actual book data from API response
  const book = bookResponse?.data;

  const [updateBook] = useUpdateBookMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookFormData>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      title: "",
      author: "",
      genre: "",
      isbn: "",
      description: "",
      copies: 1,
    },
  });

  React.useEffect(() => {
    if (book) {
      reset({
        title: book.title || "",
        author: book.author || "",
        genre: book.genre || "",
        isbn: book.isbn || "",
        description: book.description || "",
        copies: book.copies ?? 1,
      });
    }
  }, [book, reset]);

  const onSubmit = async (data: BookFormData) => {
    await updateBook({ id: id!, data }).unwrap();
    navigate("/books");
    refetch()
  };

  if (isLoading) return <p className="flex justify-center items-center min-h-[80vh] text-3xl mt-6">Loading book details...</p>;

  return (
    <Card className="max-w-lg mx-auto p-6 mt-5">
      <CardHeader>
        <CardTitle>Edit Book</CardTitle>
      </CardHeader>
      <CardContent>
        <form key={book?._id} onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <div className="mb-2">

            <Label>Title</Label>
            </div>
            <Input {...register("title")} />
            {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
          </div>

          <div>
            <div className="mb-2">

            <Label>Author</Label>
            </div>
            <Input {...register("author")} />
            {errors.author && <p className="text-red-500 text-sm">{errors.author.message}</p>}
          </div>

          <div>
            <div className="mb-2">

            <Label>Genre</Label>
            </div>
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
            {errors.genre && <p className="text-red-500 text-sm">{errors.genre.message}</p>}
          </div>

          <div>
            <div className="mb-2">

            <Label>ISBN</Label>
            </div>
            <Input {...register("isbn")} />
            {errors.isbn && <p className="text-red-500 text-sm">{errors.isbn.message}</p>}
          </div>

          <div>
            <div className="mb-2">

            <Label>Description</Label>
            </div>
            <Input {...register("description")} />
          </div>

          <div>
            <div className="mb-2">

            <Label>Copies</Label>
            </div>
            <Input type="number" {...register("copies", { valueAsNumber: true })} />
            {errors.copies && <p className="text-red-500 text-sm">{errors.copies.message}</p>}
          </div>

          <Button type="submit" className="w-full cursor-pointer">
            Update Book
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}