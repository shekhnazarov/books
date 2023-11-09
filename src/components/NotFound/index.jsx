import React from "react";
import { useNavigate } from "react-router-dom";
import notfound from "../../assets/png/not-found.png";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full flex items-center relative overflow-hidden justify-center">
      <div className="bg-figure"></div>
      <div className="my-20">
        <img src={notfound} alt="404 Not Found" className="h-96" />
        <div className="mt-16 flex items-center justify-center w-96 gap-x-3 mx-auto">
          <button
            onClick={() => navigate("/home")}
            className="w-full py-3 px-6 flex items-center justify-center bg-blue-700 mt-4 text-white font-medium rounded hover:border hover:border-blue-700 hover:bg-white hover:text-blue-700 cursor-pointer"
          >
            Go Home Page
          </button>
          <button
            onClick={() => window.location.reload(false)}
            className="w-full py-3 px-6 flex items-center justify-center border border-blue-700 mt-4 text-blue-700 font-medium rounded hover:bg-blue-700 hover:text-white cursor-pointer"
          >
            Reload Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
