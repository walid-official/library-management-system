import { z } from "zod";

export const borrowSchema = z.object({
  bookId: z.string().nonempty("Book ID is required"),
  quantity: z.number().min(1, "Quantity must be at least 1"),
  dueDate: z.string().nonempty("Due date is required"),
});

export type BorrowFormData = z.infer<typeof borrowSchema>;
