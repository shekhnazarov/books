import React from "react";
import { Dialog } from "@headlessui/react";
import cancel from "../../assets/svg/cancel.svg";
import linksvg from "../../assets/svg/link.svg";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const BookSchema = Yup.object().shape({
  title: Yup.string(),
  author: Yup.string(),
  cover: Yup.string(),
  published: Yup.string(),
  pages: Yup.string(),
  isbn: Yup.string().required("Isbn is not entered"),
});

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
            <Formik
              initialValues={{
                title: "",
                author: "",
                cover: "",
                published: "",
                pages: "",
                isbn: "",
              }}
              validationSchema={BookSchema}
              onSubmit={(values) => console.log(values)}
            >
              {({ errors, touched, handleSubmit }) => (
                <Form onSubmit={handleSubmit}>
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
                  <Field
                    name="title"
                    id="title"
                    type="text"
                    placeholder="Enter your title"
                    className="w-full py-3 px-4 border border-gray-300 rounded-md mt-1 outline-none text-black text-base mb-4"
                  />
                  <h5 className="text-sm font-medium">Author</h5>
                  <Field
                    name="author"
                    id="author"
                    type="text"
                    placeholder="Enter your author"
                    className="w-full py-3 px-4 border border-gray-300 rounded-md mt-1 outline-none text-black text-base mb-4"
                  />
                  <h5 className="text-sm font-medium">Cover</h5>
                  <div className="relative">
                    <img
                      src={linksvg}
                      alt="Link icon"
                      className="absolute top-5 left-4"
                    />
                    <Field
                      name="cover"
                      id="cover"
                      type="text"
                      placeholder="Enter your cover"
                      className="w-full py-3 pl-12 pr-4 border border-gray-300 rounded-md mt-1 outline-none text-black text-base mb-4"
                    />
                  </div>
                  <h5 className="text-sm font-medium">Published</h5>
                  <Field
                    name="published"
                    id="published"
                    type="date"
                    placeholder="Enter your published"
                    className="w-full py-3 px-4 border border-gray-300 rounded-md mt-1 outline-none text-black text-sm mb-4"
                  />
                  <h5 className="text-sm font-medium">Pages</h5>
                  <Field
                    name="pages"
                    id="pages"
                    type="number"
                    placeholder="Enter your pages"
                    className="w-full py-3 px-4 border border-gray-300 rounded-md mt-1 outline-none text-black text-base mb-4"
                  />
                  <h5 className="text-sm font-medium">Isbn</h5>
                  <Field
                    name="isbn"
                    id="isbn"
                    type="number"
                    placeholder="Enter your isbn"
                    className={`w-full py-3 px-4 border  rounded-md mt-1 outline-none text-black text-base ${
                      errors.isbn && touched.isbn
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                  />
                  {errors.isbn && touched.isbn ? (
                    <div className="text-base text-red-500 mt-1">
                      {errors.isbn}
                    </div>
                  ) : null}
                  <div className="flex items-center gap-x-3 mt-4">
                    <button
                      className="w-full py-3 px-6 flex items-center justify-center border border-purple-700 mt-4 text-purple-700 font-medium rounded hover:bg-purple-700 hover:text-white cursor-pointer"
                      onClick={() => setOpenModal(false)}
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="w-full py-3 px-6 flex items-center justify-center bg-purple-700 mt-4 text-white font-medium rounded hover:border hover:border-purple-700 hover:bg-white hover:text-purple-700 cursor-pointer"
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default AddBook;
