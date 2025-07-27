import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useBorrowBookMutation } from "@/features/borrow/borrowApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { borrowSchema, type BorrowFormData } from "@/lib/borrowSchema";
import { useParams } from "react-router-dom";


export default function BorrowPage() {
  const { bookId } = useParams<{ bookId: string }>();
  console.log(bookId)
  const [borrowBook, { isLoading }] = useBorrowBookMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BorrowFormData>({
    resolver: zodResolver(borrowSchema),
    defaultValues: {
      bookId, // hidden field
      quantity: 1,
      dueDate: "",
    },
  });

  const onSubmit = async (data: BorrowFormData) => {
    try {
      // ✅ Transform data to match backend
      const payload = {
        book: data.bookId,
        quantity: data.quantity,
        dueDate: data.dueDate,
      };

      await borrowBook(payload).unwrap();
      alert("Book borrowed successfully!");
    } catch (err) {
      alert("Failed to borrow book");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-sm mx-auto p-4">
      {/* Hidden bookId field */}
      <input type="hidden" {...register("bookId")} value={bookId} />

      <div>
        <Label>Quantity</Label>
        <Input
          type="number"
          {...register("quantity", { valueAsNumber: true })}
          min={1}
        />
        {errors.quantity && <p className="text-red-500 text-sm">{errors.quantity.message}</p>}
      </div>

      <div>
        <Label>Due Date</Label>
        <Input type="date" {...register("dueDate")} />
        {errors.dueDate && <p className="text-red-500 text-sm">{errors.dueDate.message}</p>}
      </div>

      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? "Borrowing..." : "Borrow Book"}
      </Button>
    </form>
  );
}
