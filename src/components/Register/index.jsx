import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const SigninSchema = Yup.object().shape({
  name: Yup.string().required("Name is not entered"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is not entered"),
  username: Yup.string().required("Username is not entered"),
  passw: Yup.string().required("Password is not entered"),
});

const { REACT_APP_BASE_URL } = process.env;

const Register = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{ name: "", email: "", username: "", passw: "" }}
      validationSchema={SigninSchema}
      onSubmit={(values) => {
        fetch(`${REACT_APP_BASE_URL}/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            key: values.username,
            secret: values.passw,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            if (res?.data) {
              localStorage.setItem("key", res.data.key);
              localStorage.setItem("SecKey", res.data.secret);
              console.log(res.data.secret);
              toast("Siz ro'yhatdan muvaffaqiyatli o'tdingiz");
              navigate("/");
              console.log(res);
            } else {
              toast(res.message);
              setError(res.message);
              console.log(res);
            }
          })
          .catch((err) => console.log(err));
      }}
    >
      {({ errors, touched, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <div className="w-full flex items-center relative overflow-hidden justify-center">
            <div className="bg-figure"></div>
            <div
              className="bg-white py-12 px-7 my-24 rounded-xl"
              style={{ width: "430px" }}
            >
              <h2 className=" text-4xl font-bold text-center">Sign in</h2>
              <div className="flex items-center w-full mt-7">
                <div className="w-full h-px bg-black"></div>
                <div className="mx-3">
                  <h6 className="text-xs">OR</h6>
                </div>
                <div className="w-full h-px bg-black"></div>
              </div>
              <h5 className="text-sm font-medium mt-8">Your name</h5>
              <Field
                name="name"
                id="name"
                type="text"
                placeholder="John doe"
                className={`w-full py-3 px-4 border rounded-md mt-1 outline-none text-black text-base ${
                  errors.name && touched.name
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {errors.name && touched.name ? (
                <div className="text-sm text-red-500 mt-1">{errors.name}</div>
              ) : null}
              <h5 className="text-sm font-medium mt-4">Your email</h5>
              <Field
                name="email"
                id="email"
                type="email"
                placeholder="Enter your email"
                className={`w-full py-3 px-4 border rounded-md mt-1 outline-none text-black text-base ${
                  errors.email && touched.email
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {errors.email && touched.email ? (
                <div className="text-sm text-red-500 mt-1">{errors.email}</div>
              ) : null}
              <h5 className="text-sm font-medium mt-4">Your username</h5>
              <Field
                name="username"
                id="username"
                type="text"
                placeholder="Enter your username"
                className={`w-full py-3 px-4 border rounded-md mt-1 outline-none text-black text-base ${
                  errors.username && touched.username
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {errors.username && touched.username ? (
                <div className="text-sm text-red-500 mt-1">
                  {errors.username}
                </div>
              ) : null}
              <h5 className="text-sm font-medium mt-4">Your password</h5>
              <Field
                name="passw"
                id="passw"
                type="password"
                placeholder="Enter your password"
                className={`w-full py-3 px-4 border rounded-md mt-1 outline-none text-black text-base ${
                  errors.passw && touched.passw
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
              />
              {errors.passw && touched.passw ? (
                <div className="text-sm text-red-500 mt-1">{errors.passw}</div>
              ) : null}
              <h5 className="text-base text-red-500 mt-2 text-center">
                {error}
              </h5>
              <button
                type="submit"
                className="w-full py-3 px-6 flex items-center justify-center bg-blue-700 mt-4 text-white font-medium rounded"
              >
                Login
              </button>
              <div className="w-full flex justify-center mt-3">
                <h5 className="text-sm">
                  Already signed up?{" "}
                  <Link to="/login" className=" text-blue-700">
                    Go to sign in.
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Register;
