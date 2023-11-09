import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Navbar";
import plus from "../../assets/svg/plus.svg";
import Cart from "../Cart";
import AddBook from "../AddBook";
import md5 from "md5";

const { REACT_APP_BASE_URL } = process.env;

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  if (!localStorage.getItem("key")) {
    navigate("/register");
  }
  const { title } = useParams();
  useEffect(() => {
    setIsLoading(true);
    const SecKey = localStorage.getItem("SecKey");
    const method = "GET";
    const URL = !title
      ? "/books"
      : `/books/:"${title.substring(1, title.length)}"`;
    console.log(md5('POST/books{isbn:"0143109790"}Terry'), "test");
    const signstr = md5(`${method}${URL}${SecKey}`).toString();
    fetch(`${REACT_APP_BASE_URL}${URL}`, {
      method: "GET",
      headers: {
        Key: "Terry",
        Sign: signstr,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.isOk) {
          console.log(res);
          setBooks(res.data || []);
          setIsLoading(false);
        } else {
          console.log(res);
          setBooks([]);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [title]);

  return (
    <div className="w-full relative overflow-hidden min-h-screen">
      <div className="bg-figure"></div>
      <div className="w-full max-w-7xl mx-auto">
        <Navbar />
        <div className="mt-9 w-full flex items-center justify-between">
          <h1 className="text-white text-4xl font-bold">
            You’ve got{" "}
            <span className=" text-purple-700">{books?.length || 0} book</span>
          </h1>
          <div className="flex items-center gap-x-6">
            <input
              type="text"
              className="w-80 h-12 px-4 outline-none rounded-md border border-gray-300"
              placeholder="Enter your name"
            />
            <button
              className="border-none px-6 h-11 rounded text-white bg-blue-600 border border-blue-600 flex items-center gap-x-3"
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
          <div className="mt-9 grid grid-cols-3 w-full">
            {books.length ? (
              books.map((book, index) => (
                <Cart key={index} book={title ? book : book?.book} />
              ))
            ) : (
              <h1 className=" text-4xl text-purple-700 font-semibold">
                No book, please enter other name
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
