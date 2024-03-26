import { useEffect, useState } from "react";
import { getBooks } from "../utility/idex";
import ReadWishCard from "./ReadWishCard";

const ReadBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const storedBooks = getBooks();
    setBooks(storedBooks);
  }, []);
  return (
    <div className="mt-8 space-y-6">
      {books.map((book) => (
        <ReadWishCard key={book.id} book={book}></ReadWishCard>
      ))}
    </div>
  );
};

export default ReadBooks;
