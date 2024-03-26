import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ListedBooks from "./pages/ListedBooks.jsx";
import PagesToRead from "./pages/PagesToRead.jsx";
import MainLayout from "./layouts/MainLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("book.json"),
      },
      {
        path: "/listed",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/pages",
        element: <PagesToRead></PagesToRead>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
