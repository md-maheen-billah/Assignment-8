import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 lg:px-[90px] lg:py-[80px] space-x-9 lg:mt-8 mt-4 bg-[#f3f3f3] rounded-3xl mx-2 lg:mx-0">
      <div>
        <h2 className="lg:text-[56px] text-center lg:text-left text-3xl font-bold lg:leading-[84px]">
          Books to freshen up your bookshelf
        </h2>
        <div className="flex justify-center lg:justify-start">
          <Link to="/listed">
            <button className="text-xl lg:mt-12 mt-6 font-bold bg-[#23be0a] text-white bg px-6 py-4 rounded-xl hover:bg-gray-300 hover:duration-200">
              View The List
            </button>
          </Link>
        </div>
      </div>
      <div className="lg:w-6/12 lg:flex hidden">
        <img src="banner.png" alt="" />
      </div>
    </div>
  );
};

export default Banner;
