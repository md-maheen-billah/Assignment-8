import { useContext } from "react";
import ReadWishCard from "./ReadWishCard";
import { AssetContext2 } from "../pages/ListedBooks";

const WishlistBooks = () => {
  const books = useContext(AssetContext2);
  return (
    <div className="mt-8 space-y-6">
      {books.map((book) => (
        <ReadWishCard key={book.id} book={book}></ReadWishCard>
      ))}
    </div>
  );
};

export default WishlistBooks;
