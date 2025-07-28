import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetBorrowsQuery } from "@/features/borrow/borrowApi";

export default function BorrowSummaryPage() {
  const { data: summary, isLoading, isError } = useGetBorrowsQuery();

  console.log(summary)

  if (isLoading) return <p className="text-center mt-6">Loading borrowed books summary...</p>;
  if (isError) return <p className="text-center mt-6 text-red-500">Failed to fetch summary.</p>;

  return (
    <div className="px-3 mt-5 max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">📚 Borrowed Books Summary</h1>

      <Table>
        <TableCaption>List of books that have been borrowed and their total borrowed quantity.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Book Title</TableHead>
            <TableHead>ISBN</TableHead>
            <TableHead className="text-right">Total Quantity Borrowed</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {summary?.data?.length ? (
            summary?.data?.map((item: any, index: number) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{item.book?.title}</TableCell>
                <TableCell>{item.book?.isbn}</TableCell>
                <TableCell className="text-right font-semibold">{item.totalQuantity}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} className="text-center text-gray-500">
                No borrowed books found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}