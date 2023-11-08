import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import plus from "../../assets/svg/plus.svg";
import Cart from "../Cart";
import AddBook from "../AddBook";
import md5 from "md5";

const { REACT_APP_BASE_URL } = process.env;

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  if (!localStorage.getItem("key")) {
    navigate("/register");
  }
  useEffect(() => {
    const SecKey = localStorage.getItem("SecKey");
    const sign = md5(`GET/books${SecKey}`);
    const method = "POST";
    const URL = "/books";
    const body = { isbn: "9781118464465" };
    const MySecret = localStorage.getItem("SecKey");
    const signstr = `${method}${URL}${JSON.stringify(body)}Tayson`;
    console.log(md5(signstr).toString(), "shunchaki");
    console.log(
      md5('POST/books{isbn:"9781118464465"}Tayson').toString(),
      "add book"
    );
    console.log(sign);
    fetch(`${REACT_APP_BASE_URL}/books`, {
      method: "GET",
      headers: {
        Key: localStorage.getItem("key"),
        Sign: sign,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.isOk) {
          console.log(res);
          setBooks(res.data || []);
        } else {
          console.log(res);
          setBooks([]);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full relative overflow-hidden min-h-screen">
      <div className="bg-figure"></div>
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
        <div className="mt-9 flex justify-between flex-wrap">
          {books.length &&
            books.map(({ book }) => <Cart key={book.id} book={book} />)}
        </div>
        <AddBook open={[openModal, setOpenModal]} />
      </div>
    </div>
  );
};

export default Home;
