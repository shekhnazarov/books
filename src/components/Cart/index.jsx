import { Dialog } from "@headlessui/react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useRequest from "../../hook/useRequest";

const Cart = ({ book }) => {
  const request = useRequest();
  const [openModal, setOpenModal] = useState(false);
  const { title } = useParams();
  const delBook = () => {
    request({ method: "DELETE", url: `/books/${book?.id}` }).then((res) => {
      if (res.isOk) {
        setOpenModal(false);
        window.location.reload(false);
      }
    });
  };
  return (
    <div
      className={`max-w-sm w-full p-8 bg-white rounded-xl mb-6 shadow-lg relative ${
        !title && "cart"
      }`}
    >
      <div
        onClick={() => setOpenModal(true)}
        className="h-8 w-8 hidden items-center justify-center bg-red-400 absolute -right-8 top-4 del-cart"
        style={{ borderRadius: "6px 6px 6px 0px" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
        >
          <path
            d="M11.3334 3.99998V3.46665C11.3334 2.71991 11.3334 2.34654 11.1881 2.06133C11.0603 1.81044 10.8563 1.60647 10.6054 1.47864C10.3202 1.33331 9.94682 1.33331 9.20008 1.33331H8.13341C7.38668 1.33331 7.01331 1.33331 6.72809 1.47864C6.47721 1.60647 6.27324 1.81044 6.14541 2.06133C6.00008 2.34654 6.00008 2.71991 6.00008 3.46665V3.99998M7.33341 7.66665V11M10.0001 7.66665V11M2.66675 3.99998H14.6667M13.3334 3.99998V11.4666C13.3334 12.5868 13.3334 13.1468 13.1154 13.5746C12.9237 13.951 12.6177 14.2569 12.2414 14.4487C11.8136 14.6666 11.2535 14.6666 10.1334 14.6666H7.20008C6.07998 14.6666 5.51992 14.6666 5.0921 14.4487C4.71578 14.2569 4.40982 13.951 4.21807 13.5746C4.00008 13.1468 4.00008 12.5868 4.00008 11.4666V3.99998"
            stroke="#FEFEFE"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div
        className="h-8 w-8 hidden items-center justify-center bg-blue-700 absolute -right-8 edit-cart"
        style={{ borderRadius: "0px 6px 6px 6px", top: "50px" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
        >
          <path
            d="M14.6667 12L14 12.7294C13.6464 13.1161 13.1668 13.3333 12.6668 13.3333C12.1668 13.3333 11.6873 13.1161 11.3337 12.7294C10.9796 12.3434 10.5001 12.1267 10.0002 12.1267C9.50033 12.1267 9.02084 12.3434 8.66673 12.7294M2.66675 13.3333H3.78311C4.10923 13.3333 4.27229 13.3333 4.42574 13.2965C4.56179 13.2638 4.69185 13.21 4.81115 13.1369C4.9457 13.0544 5.061 12.9391 5.2916 12.7085L13.6668 4.33334C14.219 3.78106 14.219 2.88563 13.6668 2.33334C13.1145 1.78106 12.219 1.78106 11.6668 2.33334L3.29159 10.7085C3.06099 10.9391 2.94568 11.0544 2.86323 11.189C2.79012 11.3083 2.73625 11.4383 2.70359 11.5744C2.66675 11.7278 2.66675 11.8909 2.66675 12.217V13.3333Z"
            stroke="#FEFEFE"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <h3 className="text-base font-semibold line-clamp-1 overflow-hidden">
        {book?.title || "Raspberry Pi User Guide"}
      </h3>
      <p className="text-sm mt-1.5 h-16 line-clamp-3 overflow-hidden">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet illum
        necessitatibus quod error totam quo consectetur enim labore recusandae
        voluptas reiciendis omnis nam cupiditate, facere tenetur, rerum natus
        rem. Repudiandae, ad pariatur. Natus omnis dignissimos amet repudiandae
        velit voluptatum possimus?
      </p>
      <div className="flex w-full justify-between items-center mt-4">
        <h3 className="text-sm font-medium">
          {book?.author || "Eben Upton"}: {book?.published || "2012"}-year
        </h3>
        <div className="py-1 px-3 bg-blue-200 text-xs text-blue-600 rounded-lg font-medium">
          {book?.pages || "0"} pages
        </div>
      </div>
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
            <Dialog.Panel className="mx-auto w-full max-w-xl rounded-xl bg-white py-6 px-7">
              <h3 className="text-base font-semibold line-clamp-1 overflow-hidden">
                {book?.title || "Raspberry Pi User Guide"}
              </h3>
              <h1>Siz bu kitobni haqiqatdan ham o'chirmoqchimisz?</h1>
              <div className="w-96 flex items-center gap-x-4">
                <button
                  className="w-full outline-none py-1 px-6 flex items-center justify-center border border-blue-700 mt-4 text-blue-700 font-medium rounded hover:bg-blue-700 hover:text-white cursor-pointer"
                  onClick={() => setOpenModal(false)}
                >
                  Yo'q
                </button>
                <button
                  onClick={delBook}
                  className="w-full outline-none py-1 px-6 flex items-center justify-center bg-blue-700 mt-4 text-white font-medium rounded hover:border hover:border-blue-700 hover:bg-white hover:text-blue-700 cursor-pointer"
                >
                  Ha!
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Cart;
