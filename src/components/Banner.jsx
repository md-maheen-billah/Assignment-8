import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="flex items-center justify-between px-[90px] py-[80px] space-x-9 mt-8 bg-[#f3f3f3] rounded-3xl">
      <div>
        <h2 className="text-[56px] font-bold leading-[84px]">
          Books to freshen up your bookshelf
        </h2>
        <Link to="/listed">
          <button className="text-xl mt-12 font-bold bg-[#23be0a] text-white bg px-6 py-4 rounded-xl hover:bg-gray-300 hover:duration-200">
            View The List
          </button>
        </Link>
      </div>
      <div className="w-6/12">
        <img src="banner.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
