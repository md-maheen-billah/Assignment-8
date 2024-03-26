import { useContext } from "react";
import ReadWishCard from "./ReadWishCard";
import { AssetContext } from "../pages/ListedBooks";

const ReadBooks = () => {
  const books = useContext(AssetContext);
  return (
    <div className="mt-8 space-y-6">
      {books.map((book) => (
        <ReadWishCard key={book.id} book={book}></ReadWishCard>
      ))}
    </div>
  );
};

export default ReadBooks;
