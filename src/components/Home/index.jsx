import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useRequest from "../../hook/useRequest";
import Navbar from "../Navbar";
import plus from "../../assets/svg/plus.svg";
import Cart from "../Cart";
import AddBook from "../AddBook";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const request = useRequest();
  if (!localStorage.getItem("key")) {
    navigate("/register");
  }
  const { title } = useParams();
  useEffect(() => {
    setIsLoading(true);
    const method = "GET";
    const URL = !title
      ? "/books"
      : `/books/:"${title?.substring(1, title?.length)}"`;
    request({ method, url: URL })
      .then((res) => {
        if (res.isOk) {
          setBooks(res.data || []);
          setIsLoading(false);
        } else {
          setBooks([]);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title]);

  return (
    <div className="w-full relative overflow-hidden min-h-screen">
      <div className="bg-figure"></div>
      <div className="w-full max-w-7xl mx-auto">
        <Navbar />
        <div className="mt-9 w-full flex items-center justify-between">
          <h1 className="text-white text-4xl font-bold">
            You’ve got{" "}
            <span className=" text-blue-700">{books?.length || 0} book</span>
          </h1>
          <div className="flex items-center gap-x-6">
            <input
              type="text"
              className="w-80 h-12 px-4 outline-none rounded-md border border-gray-300"
              placeholder="Enter your name"
            />
            <button
              className="border-none px-6 h-11 rounded text-white bg-blue-700 border border-blue-700 flex items-center gap-x-3"
              onClick={() => setOpenModal(true)}
            >
              <img src={plus} alt="plus" />
              Create a book
            </button>
          </div>
        </div>
        <h3 className="text-xl text-white font-normal mt-3">Your task today</h3>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="w-full">
            {books.length ? (
              <div className="mt-9 grid grid-cols-3 w-full">
                {books.map((book, index) => (
                  <Cart key={index} book={title ? book : book?.book} />
                ))}
              </div>
            ) : (
              <h1 className=" text-4xl text-blue-700 font-semibold mt-4">
                No book, please add book or search!
              </h1>
            )}
          </div>
        )}
        <AddBook open={[openModal, setOpenModal]} />
      </div>
    </div>
  );
};

export default Home;
