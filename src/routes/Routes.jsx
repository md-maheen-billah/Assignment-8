import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Details from "../components/Details";
import ListedBooks from "../pages/ListedBooks";
import PagesToRead from "../pages/PagesToRead";
import ReadBooks from "../components/ReadBooks";
import WishlistBooks from "../components/WishlistBooks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/home",
        element: <Home></Home>,
        loader: () => fetch("book.json"),
      },
      {
        path: "/book/:id",
        element: <Details></Details>,
        loader: () => fetch("book.json"),
      },
      {
        path: "/listed",
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            index: true,
            element: <ReadBooks></ReadBooks>,
          },
          {
            path: "wishlist",
            element: <WishlistBooks></WishlistBooks>,
          },
        ],
      },
      {
        path: "/pages",
        element: <PagesToRead></PagesToRead>,
      },
    ],
  },
]);
