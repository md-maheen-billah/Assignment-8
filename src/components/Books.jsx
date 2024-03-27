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
    <div className="lg:mb-20 lg:mt-24 mt-4 mb-4">
      <h2 className="lg:mt-24 mt-6 text-3xl lg:text-[40px] font-bold text-center mb-2 lg:mb-9">
        Books
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-2 lg:mx-0">
        {books.map((book) => (
          <Book key={book.id} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
