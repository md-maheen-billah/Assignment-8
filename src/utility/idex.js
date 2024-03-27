import toast from "react-hot-toast";
export const getBooks = () => {
  let books = [];
  const storedBooks = localStorage.getItem("books");
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  }
  return books;
};
export const getWishBooks = () => {
  let books = [];
  const storedWishBooks = localStorage.getItem("wishBooks");
  if (storedWishBooks) {
    books = JSON.parse(storedWishBooks);
  }
  return books;
};
// save
export const saveBook = (book) => {
  let books = getBooks();
  const isExist = books.find((b) => b.id === book.id);
  if (isExist) {
    return toast.error("Already set to Read");
  }
  books.push(book);
  localStorage.setItem("books", JSON.stringify(books));
  toast.success("Book set to Read");
};
export const saveWishBook = (book) => {
  let books = getWishBooks();
  let books2 = getBooks();
  const isExist2 = books2.find((b) => b.id === book.id);
  const isExist = books.find((b) => b.id === book.id);
  if (isExist || isExist2) {
    return toast.error("Already set Read or in Wishlist ");
  }
  books.push(book);
  localStorage.setItem("wishBooks", JSON.stringify(books));
  toast.success("Book set to Wishlist");
};
