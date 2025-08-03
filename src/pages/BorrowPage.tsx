
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useBorrowBookMutation } from "@/features/borrow/borrowApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { borrowSchema, type BorrowFormData } from "@/lib/borrowSchema";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import toast from "react-hot-toast";


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
      bookId,
      quantity: 1,
      dueDate: "",
    },
  });

  const onSubmit = async (data: BorrowFormData) => {
    try {
     
      const payload = {
        book: data.bookId,
        quantity: data.quantity,
        dueDate: data.dueDate,
      };

      await borrowBook(payload).unwrap();
      toast.success("Book borrowed successfully!");
    } catch (err) {
      toast.error("Failed to borrow book");
    }
  };

  return (
     <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Initiate Book Loan</CardTitle>
          <CardDescription className="text-center text-gray-600 dark:text-gray-400">
            Kindly complete the form below to secure your book loan. Ensure all details are accurate for a seamless
            borrowing experience.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Hidden input for bookId, pre-filled */}
            <input type="hidden" {...register("bookId")} value={bookId} />

            <div>
              <Label htmlFor="bookIdDisplay" className="mb-1 block">
                Book ID
              </Label>
              <Input
                id="bookIdDisplay"
                type="text"
                value={bookId}
                readOnly
                className="bg-gray-100 dark:bg-gray-800 cursor-not-allowed"
              />
            </div>

            <div>
              <Label htmlFor="quantity" className="mb-1 block">
                Quantity
              </Label>
              <Input
                id="quantity"
                type="number"
                {...register("quantity", { valueAsNumber: true })}
                min={1}
                placeholder="Enter quantity"
              />
              {errors.quantity && <p className="text-red-500 text-sm mt-1">{errors.quantity.message}</p>}
            </div>

            <div>
              <Label htmlFor="dueDate" className="mb-1 block">
                Due Date
              </Label>
              <Input id="dueDate" type="date" {...register("dueDate")} placeholder="Select a due date" />
              {errors.dueDate && <p className="text-red-500 text-sm mt-1">{errors.dueDate.message}</p>}
            </div>

            <Button type="submit" disabled={isLoading} className="w-full cursor-pointer">
              {isLoading ? "Processing..." : "Borrow Book"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
