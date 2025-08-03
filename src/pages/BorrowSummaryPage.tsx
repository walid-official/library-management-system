import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { Book, BookOpen } from "lucide-react";

export default function BorrowSummaryPage() {
  const { data: summary, isLoading, isError } = useGetBorrowsQuery();

  console.log(summary)

  if (isLoading) return <p className="text-center mt-6">Loading borrowed books summary...</p>;
  if (isError) return <p className="text-center mt-6 text-red-500">Failed to fetch summary.</p>;
 const totalUniqueBooks = summary?.data?.length || 0
  const totalBorrowedQuantity = summary?.data?.reduce((sum: number, item: any) => sum + item.totalQuantity, 0) || 0
  return (
    <div className="px-3 mt-5 max-w-4xl mx-auto">
       <h1 className="text-3xl font-bold mb-6 text-center"> Library Borrowing Overview</h1>

      {/* Professional Summary Section */}
      <div className="mb-8 p-4 bg-muted rounded-lg shadow-sm">
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          It provides a comprehensive overview of all borrowed books within the library system. It highlights key
          metrics such as the total number of unique books borrowed and the cumulative quantity of all borrowed items,
          offering valuable insights into borrowing trends and library resource utilization. Below, you will find a
          detailed list of each borrowed book, including its ISBN and the total quantity borrowed over time.
        </p>
      </div>
    {/* Cards for Visualization */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Unique Books Borrowed</CardTitle>
            <Book className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalUniqueBooks}</div>
            <p className="text-xs text-muted-foreground">Number of distinct book titles borrowed</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Borrowed Quantity</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalBorrowedQuantity}</div>
            <p className="text-xs text-muted-foreground">Cumulative count of all borrowed items</p>
          </CardContent>
        </Card>
      </div>
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