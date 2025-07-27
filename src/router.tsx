import { createBrowserRouter } from "react-router-dom";
// import AppLayout from "./layout/AppLayout";
// import BooksPage, { booksLoader } from "./pages/BooksPage";
// import CreateBookPage, { createBookAction } from "./pages/CreateBookPage";
// import EditBookPage, { editBookLoader, editBookAction } from "./pages/EditBookPage";
// import BorrowPage, { borrowLoader, borrowAction } from "./pages/BorrowPage";
// import BorrowSummaryPage, { borrowSummaryLoader } from "./pages/BorrowSummaryPage";
// import ErrorPage from "./pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: "Hello world",
    // errorElement: <ErrorPage />,
    // children: [
    //   { path: "books", element: <BooksPage />, loader: booksLoader },
    //   { path: "create-book", element: <CreateBookPage />, action: createBookAction },
    //   { path: "edit-book/:id", element: <EditBookPage />, loader: editBookLoader, action: editBookAction },
    //   { path: "borrow/:bookId", element: <BorrowPage />, loader: borrowLoader, action: borrowAction },
    //   { path: "borrow-summary", element: <BorrowSummaryPage />, loader: borrowSummaryLoader },
    // ],
  },
]);
