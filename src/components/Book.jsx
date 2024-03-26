import PropTypes from "prop-types";
import { CiStar } from "react-icons/ci";

const Book = ({ book }) => {
  return (
    <div className="card bg-base-100 border-2">
      <figure className="px-5 pt-5 h-[500px] ">
        <img src={book.image} className="h-full w-full rounded-xl" />
      </figure>
      <div className="px-5 py-5 items-left text-left">
        <p className="space-x-4 mt-2">
          <a>
            <button className="btn rounded-3xl text-[#23be0a]">
              {book.tags[0]}
            </button>
          </a>
          <a>
            <button className="btn rounded-3xl text-[#23be0a]">
              {book.tags[1]}
            </button>
          </a>
        </p>
        <h2 className="mt-5 text-2xl font-bold">{book.bookName}</h2>
        <p className="mt-3 font-medium text-[#424242]">By : {book.author}</p>
        <hr className="border-dashed my-5" />
        <div className="flex items-center justify-between">
          <p>{book.category}</p>
          <div className="flex items-center gap-1">
            <p>{book.rating}</p>
            <CiStar className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object,
};

export default Book;
