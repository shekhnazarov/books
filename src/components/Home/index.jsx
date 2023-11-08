import React, { useState } from "react";
import Navbar from "../Navbar";
import plus from "../../assets/svg/plus.svg";
import Cart from "../Cart";
import AddBook from "../AddBook";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="w-full bg-gray-800">
      <div className="w-full max-w-7xl mx-auto">
        <Navbar />
        <div className="mt-9 w-full flex items-center justify-between">
          <h1 className="text-white text-4xl font-bold">
            You’ve got <span className=" text-purple-700">7 book</span>
          </h1>
          <div className="flex items-center gap-x-6">
            <input
              type="text"
              className="w-80 h-12 px-4 outline-none rounded-md border border-gray-300"
              placeholder="Enter your name"
            />
            <button className="border-none px-6 h-11 rounded text-white bg-blue-600 border border-blue-600 flex items-center gap-x-3" onClick={()=>setOpenModal(true)}>
              <img src={plus} alt="plus" />
              Create a book
            </button>
          </div>
        </div>
        <h3 className="text-xl text-white font-normal mt-3">Your task today</h3>
        <div className="mt-9 flex justify-between flex-wrap">
          <Cart />
          <Cart />
          <Cart />
          <Cart />
        </div>
        <AddBook open={[openModal, setOpenModal]} />
      </div>
    </div>
  );
};

export default Home;
