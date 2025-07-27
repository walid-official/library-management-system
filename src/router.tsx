import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import { Home } from './pages/Home';
import CreateBookPage from "./pages/CreateBookPage";
import BooksPage from "./pages/BooksPage";
import EditBookPage from "./pages/EditBookPage";
import BorrowPage from "./pages/BorrowPage";

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
      { path: "borrow/:bookId", element: <BorrowPage /> },
    //   { path: "borrow-summary", element: <BorrowSummaryPage />, loader: borrowSummaryLoader },
    ],
  },
]);
