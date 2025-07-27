import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
// import BooksPage, { booksLoader } from "./pages/BooksPage";

// import EditBookPage, { editBookLoader, editBookAction } from "./pages/EditBookPage";
// import BorrowPage, { borrowLoader, borrowAction } from "./pages/BorrowPage";
// import BorrowSummaryPage, { borrowSummaryLoader } from "./pages/BorrowSummaryPage";
// import ErrorPage from "./pages/ErrorPage";
import { Home } from './pages/Home';
import CreateBookPage from "./pages/CreateBookPage";
import BooksPage from "./pages/BooksPage";
import EditBookPage from "./pages/EditBookPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    // errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home />},
      { path: "books", element: <BooksPage />},
      { path: "create-book", element: <CreateBookPage />},
      { path: "edit-book/:id", element: <EditBookPage />},
    //   { path: "borrow/:bookId", element: <BorrowPage />, loader: borrowLoader, action: borrowAction },
    //   { path: "borrow-summary", element: <BorrowSummaryPage />, loader: borrowSummaryLoader },
    ],
  },
]);
