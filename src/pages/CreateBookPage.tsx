import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { bookSchema, type BookFormData } from "@/lib/bookSchema";
import { useAddBookMutation } from "@/features/books/booksApi";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CreateBookPage() {
  const [addBook] = useAddBookMutation();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<BookFormData>({
    resolver: zodResolver(bookSchema),
  });

  const onSubmit = async (data: BookFormData) => {
    await addBook(data).unwrap();
    navigate("/books");
  };

  return (
    <Card className="max-w-lg mx-auto p-6">
      <CardHeader>
        <CardTitle>Add New Book</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label>Title</Label>
            <Input {...register("title")} placeholder="Book Title" />
            {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
          </div>

          <div>
            <Label>Author</Label>
            <Input {...register("author")} placeholder="Author Name" />
            {errors.author && <p className="text-red-500 text-sm">{errors.author.message}</p>}
          </div>

          <div>
            <Label>Genre</Label>
            <Input {...register("genre")} placeholder="Genre" />
            {errors.genre && <p className="text-red-500 text-sm">{errors.genre.message}</p>}
          </div>

          <div>
            <Label>ISBN</Label>
            <Input {...register("isbn")} placeholder="ISBN Number" />
            {errors.isbn && <p className="text-red-500 text-sm">{errors.isbn.message}</p>}
          </div>

          <div>
            <Label>Description</Label>
            <Input {...register("description")} placeholder="Short description" />
          </div>

          <div>
            <Label>Copies</Label>
            <Input type="number" {...register("copies", { valueAsNumber: true })} placeholder="Number of copies" />
            {errors.copies && <p className="text-red-500 text-sm">{errors.copies.message}</p>}
          </div>

          <Button type="submit" className="w-full">Add Book</Button>
        </form>
      </CardContent>
    </Card>
  );
}
