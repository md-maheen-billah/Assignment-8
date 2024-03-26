import { useEffect, useState } from "react";
import { getWishBooks } from "../utility/idex";
import ReadWishCard from "./ReadWishCard";

const WishlistBooks = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const storedBooks = getWishBooks();
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

export default WishlistBooks;
