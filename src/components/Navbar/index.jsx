import React, { useRef, useState } from "react";
import logo from "../../assets/svg/logo.svg";
import bell from "../../assets/svg/bell.svg";
import account from "../../assets/png/accountImage.png";
import { useNavigate, useParams } from "react-router-dom";

const Navbar = () => {
  const [isFocus, setIsFocus] = useState(
    localStorage.getItem("isFocus") || false
  );
  const searchRef = useRef();
  const navigate = useNavigate();
  const { title } = useParams();

  const onSearch = () => {
    if (searchRef.current.value) {
      navigate(`/home/:${searchRef.current.value}`);
    } else {
      navigate("/home");
    }
  };

  const handleFocus = () => {
    setIsFocus(true);
    localStorage.setItem("isFocus", true);
  };
  const handleBlur = ({ target: { value } }) => {
    if (!value) {
      setIsFocus(false);
      localStorage.setItem("isFocus", false);
    }
  };
  return (
    <div className="flex justify-between items-center py-4">
      <div className="flex items-center">
        <div className="flex items-center" onClick={() => navigate("/home")}>
          <img
            src={logo}
            alt="BookList"
            className="w-9 h-9 mr-5 cursor-pointer"
          />
          <h3 className="text-lg font-bold cursor-pointer">
            <span className=" text-blue-600 mr-1">Books</span>
            <span className="text-white">List</span>
          </h3>
        </div>
        <div
          className={`flex items-center cursor-pointer relative ${
            isFocus ? "ml-6" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="absolute left-4"
            onClick={onSearch}
          >
            <path
              d="M21 21L16.65 16.65M11 6C13.7614 6 16 8.23858 16 11M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
              stroke={isFocus ? "black" : "white"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            ref={searchRef}
            defaultValue={title ? title.substring(1, title.length) : ""}
            onFocus={handleFocus}
            onBlur={handleBlur}
            type="text"
            placeholder="Search for any training you want"
            className={`h-12 pl-12 pr-4 w-80 outline-none rounded-md ${
              !isFocus ? "bg-inherit" : ""
            }`}
          />
        </div>
      </div>
      <div className="flex items-center gap-x-6">
        <div className="relative">
          <img src={bell} alt="bell" className="cursor-pointer" />
          <div className="w-2 h-2 rounded bg-red-500 absolute top-0 right-0"></div>
        </div>
        <div>
          <img
            src={account}
            alt="Account"
            className="border-4 border-blue-600 rounded-3xl w-9 h-9 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
