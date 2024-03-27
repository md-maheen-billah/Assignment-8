import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="hero lg:min-h-screen bg-base-200 rounded-2xl lg:mt-8 mt-4 lg:mx-0 mx-2 w-[95%]">
      <div className="hero-content text-center">
        <div className="lg:max-w-md">
          <h1 className="text-5xl font-bold">About Us</h1>
          <p className="py-6 lg:py-6">
            Welcome to our Book Vibe! We are passionate about literature and
            committed to bringing you the best reading experiences. Our platform
            is designed to cater to book lovers of all genres, from fiction to
            non-fiction, fantasy to mystery.
          </p>
          <p>
            Whether you are searching for the latest bestsellers or hidden gems,
            we strive to provide a diverse collection that caters to every taste
            and interest. Thank you for visiting our site. Happy reading!
          </p>
          <Link to="/contact">
            <button className="btn font-semibold text-lg border-[#23be0a] bg-[#23be0a] text-white mt-4">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
