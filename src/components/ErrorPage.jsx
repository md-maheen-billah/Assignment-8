import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col justify-center items-center h-svh">
      <h2 className="text-5xl font-bold ">Oops!</h2>
      <p className="mt-10 text-3xl">
        Error: {error.statusText || error.message}
      </p>
      {error.status === 404 && (
        <div>
          <Link to="/">
            <button className="btn mt-10">Get Back Home</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
