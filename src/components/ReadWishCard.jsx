import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { LuFileSpreadsheet } from "react-icons/lu";

const ReadWishCard = ({ book }) => {
  return (
    <div className="rounded-xl bg-base-100 border-2 lg:p-[32px] py-4 flex items-center justify-between mx-2 lg:mx-0">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
        <figure className="bg-[#f4f4f4] lg:w-56 w-3/4  rounded-md lg:px-14 lg:py-8">
          <img src={book.image} className="lg:w-full rounded-xl" />
        </figure>
        <div className="mx-2">
          <h2 className="font-bold text-[24px]">{book.bookName}</h2>
          <p className="text-[#424242] text-xl font-medium mt-3">
            By : {book.author}
          </p>
          <p className="flex flex-col lg:flex-row lg:space-x-8 space-y-2 lg:space-y-0 mt-4">
            <span className="font-bold leading-[26px]">Tag</span>
            <a className="text-[#23BE0A] font-medium">#{book.tags[0]}</a>
            <a className="text-[#23BE0A] font-medium">#{book.tags[1]}</a>
            <a className="flex items-center space-x-2">
              <IoLocationOutline />
              <span>Year of Publishing: {book.yearOfPublishing}</span>
            </a>
          </p>
          <p className="flex flex-col lg:flex-row lg:space-x-6 mt-4">
            <a className="flex items-center space-x-2">
              <GoPeople />
              <span>Publisher: {book.publisher}</span>
            </a>
            <a className="flex items-center space-x-2">
              <LuFileSpreadsheet />
              <span>Page {book.totalPages}</span>
            </a>
          </p>
          <hr className="my-4" />
          <div className="flex gap-4 items-center ">
            <button className="lg:text-lg text-sm font-medium bg-[#e0eeff] text-[#328EFF] bg px-4 py-2 rounded-3xl hover:bg-gray-300 hover:duration-200">
              Category: {book.category}
            </button>
            <button className="lg:text-lg text-sm   font-medium bg-[#fff3e0] text-[#FFAC33] bg px-4 py-2 rounded-3xl hover:bg-gray-300 hover:duration-200">
              Rating: {book.rating}
            </button>
            <Link to={`/book/${book.id}`}>
              <button className="lg:text-lg text-sm  font-medium bg-[#23be0a] text-white bg px-4 py-2 rounded-3xl hover:bg-gray-300 hover:duration-200">
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
