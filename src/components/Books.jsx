import { useLoaderData } from "react-router-dom";
import Book from "./Book";

const Books = () => {
  const books = useLoaderData();
  return (
    <div className="mb-20 mt-24">
      <h2 className="mt-24 text-[40px] font-bold text-center mb-9">Books</h2>
      <div className="grid grid-cols-3 gap-6">
        {books.map((book, idx) => (
          <Book key={idx} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
