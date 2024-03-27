import { useLoaderData, useParams } from "react-router-dom";
import { saveBook, saveWishBook } from "../utility/idex";

const Details = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const book = books.find((book) => book.id === idInt);
  const handleRead = (book) => {
    saveBook(book);
  };
  const handleWishList = (book) => {
    saveWishBook(book);
  };
  return (
    <div className="flex flex-col lg:flex-row lg:items-start gap-12 mt-4 lg:mt-12 mb-4 lg:mb-12 mx-2 lg:mx-0">
      <div className="lg:w-[600px] lg:h-[600px]">
        <img
          className="rounded-3xl w-[100%] h-[100%]"
          src={book.image}
          alt="Movie"
        />
      </div>
      <div className="">
        <h2 className="font-bold text-[40px]">{book.bookName}</h2>
        <p className="text-[#424242] text-xl font-medium mt-3">
          By : {book.author}
        </p>
        <hr className="mt-6 mb-4" />
        <p className="text-[#424242] text-xl font-medium">{book.category}</p>
        <hr className="mb-6 mt-4" />
        <p className="text-[#424242] leading-[26px]">
          <span className="text-black font-bold">Review : </span>
          {book.review}
        </p>
        <p className="space-x-4 mt-7">
          <span className="font-bold leading-[26px]">Tag</span>
          <a className="text-[#23BE0A] font-medium">#{book.tags[0]}</a>
          <a className="text-[#23BE0A] font-medium">#{book.tags[1]}</a>
        </p>
        <hr className="my-6" />
        <div className="flex lg:gap-16 gap-2 leading-[38px]">
          <div className="text-[#424242]">
            <p>Number of Pages:</p>
            <p>Publisher:</p>
            <p>Year of Publishing:</p>
            <p>Rating:</p>
          </div>
          <div className="font-semibold">
            <p>{book.totalPages}</p>
            <p>{book.publisher}</p>
            <p>{book.yearOfPublishing}</p>
            <p>{book.rating}</p>
          </div>
        </div>
        <div className="space-x-4 mt-7 flex justify-center lg:justify-start">
          <button
            onClick={() => handleRead(book)}
            className="btn border-2 text-lg font-semibold bg-white border-gray-300 px-5"
          >
            Read
          </button>
          <button
            onClick={() => handleWishList(book)}
            className="btn border-2 text-white text-lg font-semibold bg-[#50b1c9] border-[#50b1c9] px-5"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
