import { CiStar } from "react-icons/ci";
const Book = () => {
  return (
    <div className="card w-96 bg-base-100 border-2 mt-16">
      <figure className="px-5 pt-5">
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="px-5 py-5 items-left text-left">
        <p className="space-x-4 mt-2">
          <a>
            <button className="btn rounded-3xl text-[#23be0a]">
              Young Adult
            </button>
          </a>
          <a>
            <button className="btn rounded-3xl text-[#23be0a]">Identity</button>
          </a>
        </p>
        <h2 className="mt-5 text-2xl font-bold">The Catcher in the Rye</h2>
        <p className="mt-3 font-medium text-[#424242]">By : Awlad Hossain</p>
        <hr className="border-dashed my-5" />
        <div className="flex items-center justify-between">
          <p>Fiction</p>
          <div className="flex items-center gap-1">
            <p>5.00</p>
            <CiStar className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
