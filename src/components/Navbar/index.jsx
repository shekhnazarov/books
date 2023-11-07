import React from "react";
import logo from "../../assets/svg/logo.svg";
import search from "../../assets/svg/search.svg";
import bell from "../../assets/svg/bell.svg";
import account from "../../assets/png/accountImage.png";

const Navbar = () => {
  return (
    <div className="max-w-7xl w-full mx-auto flex justify-between items-center py-4">
      <div className="flex items-center">
        <img src={logo} alt="BookList" className="w-9 h-9 mr-5" />
        <h3 className="text-lg font-bold mr-6">
          <span className=" text-purple-600 mr-1">Books</span>
          <span className="text-white">List</span>
        </h3>
        <div className="flex items-center">
          <img src={search} alt="search icon" />
        </div>
      </div>
      <div className="flex items-center gap-x-6">
        <div className="relative">
          <img src={bell} alt="bell" />
          <div className="w-2 h-2 rounded bg-red-500 absolute top-0"></div>
        </div>
        <div>
          <img
            src={account}
            alt="Account"
            className="border-4 border-purple-500 rounded-3xl w-9 h-9"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
