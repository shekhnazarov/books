import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full flex items-center justify-center bg-gray-500">
      <div
        className="bg-white py-12 px-7 my-48 rounded-xl"
        style={{ width: "430px" }}
      >
        <h2 className=" text-4xl font-bold text-center">Sign up</h2>
        <div className="flex items-center w-full mt-7">
          <div className="w-full h-px bg-black"></div>
          <div className="mx-3">
            <h6 className="text-xs">OR</h6>
          </div>
          <div className="w-full h-px bg-black"></div>
        </div>
        <h5 className="text-sm font-medium mt-8">Your name</h5>
        <input
          type="text"
          placeholder="John doe"
          className="w-full py-3 px-4 border border-gray-300 rounded-md mt-1 outline-none text-black text-base mb-4"
        />
        <h5 className="text-sm font-medium">Your email</h5>
        <input
          type="text"
          placeholder="Enter your email"
          className="w-full py-3 px-4 border border-gray-300 rounded-md mt-1 outline-none text-black text-base mb-4"
        />
        <h5 className="text-sm font-medium">Your username</h5>
        <input
          type="text"
          placeholder="Enter your username"
          className="w-full py-3 px-4 border border-gray-300 rounded-md mt-1 outline-none text-black text-base mb-4"
        />
        <button className="w-full py-3 px-6 flex items-center justify-center bg-purple-700 mt-4 text-white font-medium rounded">
          Login
        </button>
        <div className="w-full flex justify-center mt-3">
          <h5 className="text-sm">
            Already signed up?{" "}
            <Link to="/register" className=" text-purple-700">
              Go to sign in.
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Login;
