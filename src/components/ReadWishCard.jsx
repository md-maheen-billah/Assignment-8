import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { LuFileSpreadsheet } from "react-icons/lu";

const ReadWishCard = ({ book }) => {
  return (
    <div className="rounded-xl bg-base-100 border-2 p-[32px] flex items-center justify-between">
      <div className="flex items-center gap-8">
        <figure className="bg-[#f4f4f4] w-56 rounded-md px-14 py-8">
          <img src={book.image} className="w-full rounded-xl" />
        </figure>
        <div className="">
          <h2 className="font-bold text-[24px]">{book.bookName}</h2>
          <p className="text-[#424242] text-xl font-medium mt-3">
            By : {book.author}
          </p>
          <p className="flex space-x-8 mt-4">
            <span className="font-bold leading-[26px]">Tag</span>
            <a className="text-[#23BE0A] font-medium">#{book.tags[0]}</a>
            <a className="text-[#23BE0A] font-medium">#{book.tags[1]}</a>
            <a className="flex items-center space-x-2">
              <IoLocationOutline />
              <p>Year of Publishing: {book.yearOfPublishing}</p>
            </a>
          </p>
          <p className="flex space-x-6 mt-4">
            <a className="flex items-center space-x-2">
              <GoPeople />
              <p>Publisher: {book.publisher}</p>
            </a>
            <a className="flex items-center space-x-2">
              <LuFileSpreadsheet />
              <p>Page {book.totalPages}</p>
            </a>
          </p>
          <hr className="my-4" />
          <div className="flex gap-4 items-center ">
            <button className="text-lg  font-medium bg-[#e0eeff] text-[#328EFF] bg px-4 py-2 rounded-3xl hover:bg-gray-300 hover:duration-200">
              Category: {book.category}
            </button>
            <button className="text-lg  font-medium bg-[#fff3e0] text-[#FFAC33] bg px-4 py-2 rounded-3xl hover:bg-gray-300 hover:duration-200">
              Rating: {book.rating}
            </button>
            <Link to={`/book/${book.id}`}>
              <button className="text-lg  font-medium bg-[#23be0a] text-white bg px-4 py-2 rounded-3xl hover:bg-gray-300 hover:duration-200">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

ReadWishCard.propTypes = {
  book: PropTypes.object,
};
export default ReadWishCard;
