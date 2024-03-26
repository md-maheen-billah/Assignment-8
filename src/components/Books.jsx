import Book from "./Book";
import { useEffect, useState } from "react";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("book.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="mb-20 mt-24">
      <h2 className="mt-24 text-[40px] font-bold text-center mb-9">Books</h2>
      <div className="grid grid-cols-3 gap-6">
        {books.map((book) => (
          <Book key={book.id} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
