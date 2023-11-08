import React from "react";
import { Dialog } from "@headlessui/react";
import cancel from "../../assets/svg/cancel.svg";

const AddBook = ({ open }) => {
  const [openModal, setOpenModal] = open;
  return (
    <Dialog
      open={openModal}
      onClose={() => {
        setOpenModal(false);
      }}
      className="absolute z-50"
    >
      <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 ">
          <Dialog.Panel className="mx-auto w-full max-w-md rounded-xl bg-white py-6 px-7">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Create a book</h3>
              <img
                src={cancel}
                alt="cancel"
                className="cursor-pointer"
                onClick={() => setOpenModal(false)}
              />
            </div>
            <h5 className="text-sm font-medium mt-7">Title</h5>
            <input
              type="text"
              placeholder="Enter title"
              className="w-full py-3 px-4 border border-gray-300 rounded-md mt-1 outline-none text-black text-base mb-4"
            />
            <h5 className="text-sm font-medium">Author</h5>
            <input
              type="text"
              placeholder="Enter author"
              className="w-full py-3 px-4 border border-gray-300 rounded-md mt-1 outline-none text-black text-base mb-4"
            />
            <h5 className="text-sm font-medium">Published</h5>
            <input
              type="date"
              placeholder="Enter your published"
              className="w-full py-3 px-4 border border-gray-300 rounded-md mt-1 outline-none text-black text-sm mb-4"
            />
            <h5 className="text-sm font-medium">Pages</h5>
            <input
              type="number"
              placeholder="Enter pages"
              className="w-full py-3 px-4 border border-gray-300 rounded-md mt-1 outline-none text-black text-base mb-4"
            />
            <div className="flex items-center gap-x-3">
              <button
                className="w-full py-3 px-6 flex items-center justify-center border border-purple-700 mt-4 text-purple-700 font-medium rounded hover:bg-purple-700 hover:text-white cursor-pointer"
                onClick={() => setOpenModal(false)}
              >
                Close
              </button>
              <button className="w-full py-3 px-6 flex items-center justify-center bg-purple-700 mt-4 text-white font-medium rounded hover:border hover:border-purple-700 hover:bg-white hover:text-purple-700 cursor-pointer">
                Submit
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default AddBook;
