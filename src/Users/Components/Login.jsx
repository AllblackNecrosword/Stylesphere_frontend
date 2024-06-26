import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Incentives from "./Incentives";
import { userAuth } from "../../auth/userAuth";
import { toast } from "react-toastify";

const Login = () => {
  const { setToken, setUser, setUserid, setAuth } = userAuth();
  const [input, setInput] = useState({});
  const navigate = useNavigate();
  const [validationMessage, setValidationMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleinput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  // console.log(input);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!input.email || !input.password) {
      toast.error("All fields are required", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Login successful", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        localStorage.setItem("token", JSON.stringify(data.data.token));
        setToken(data.data.token);
        localStorage.setItem("user", JSON.stringify(data.data.user.name));
        setUser(data.data.user.name);
        localStorage.setItem("_id", JSON.stringify(data.data.user._id));
        setUserid(data.data.user._id);

        if (data.data.user.isAdmin) {
          localStorage.setItem("role", JSON.stringify("Admin"));
          setAuth("Admin");
          navigate("/dashboard");
        } else {
          navigate("/");
        }
      } else {
        // Handle specific errors from the server
        setErrorMessage(data.message || "Login failed. Please try again.");
        toast.error(data.message || "Login failed. Please try again.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.error("Internal server error:", error);
      setErrorMessage("Internal server error. Please try again later.");
      toast.error("Internal server error. Please try again later.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="mt-10 text-center text-5xl font-black">Login</h1>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-500 ">
            Sign in to your account
          </h2>
        </div>
        <div className="text-center mt-2">
          {errorMessage && (
            <div className="text-red-500 text-sm font-bold">{errorMessage}</div>
          )}
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-bold leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange={handleinput}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black font-semibold focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Password
                </label>
                {/* <div className="text-sm">
                  <a href="#" className="font-semibold text-black ">
                    Forgot password?
                  </a>
                </div> */}
              </div>
              <div className="mt-2">
                <input
                  onChange={handleinput}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black font-semibold focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleSubmit}
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              to={"/signup"}
              href="#"
              className="font-semibold leading-6 text-gray-500 "
            >
              <u>Create an account</u>
            </Link>
          </p>
        </div>
      </div>
      <Incentives />
    </div>
  );
};

export default Login;
