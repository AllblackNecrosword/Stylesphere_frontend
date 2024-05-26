import React, { useState } from "react";
import { auth } from "../../Firebase/setup";
import { RecaptchaVerifier } from "firebase/auth";
import { signInWithPhoneNumber } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Incentives from "./Incentives";
import { toast } from "react-toastify";

const Signup = () => {
  const [input, setInput] = useState({});
  const [user, setUser] = useState(null);
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();
  const inputhandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  console.log(input);

  // OTP VERIFICATION
  // send OTP
  const sendOtp = async (e) => {
    e.preventDefault();
    // Basic validation
    if (!input.name || !input.phoneno || !input.email || !input.password) {
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

    // Phone number validation
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(input.phoneno)) {
      toast.error("Phone number must be exactly 10 digits", {
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

    // Email validation
    const emailPattern = /^[^\s@]+@gmail\.com$/;
    if (!emailPattern.test(input.email)) {
      toast.error("Email must be a valid @gmail.com address", {
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

    toast.info("OTP sent", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    try {
      const recaptcha = new RecaptchaVerifier(auth, "recaptcha", {});
      const confirmation = await signInWithPhoneNumber(
        auth,
        `+977${input.phoneno}`,
        recaptcha
      );
      setUser(confirmation);
      setOtpSent(true); // Update state to indicate OTP has been sent
    } catch (error) {
      console.log(error);
    }
  };

  // Verify OTP
  const verifyOtp = async (e) => {
    e.preventDefault();
    try {
      await user.confirm(otp);
      // OTP verification successful, proceed with user registration
      await submithandler(e);
    } catch (error) {
      if (error.code === "auth/code-expired") {
        console.log("Timeout error: reCAPTCHA verification took too long.");
        // Handle timeout error here (e.g., display a message to the user)
      } else {
        // Handle other errors
        console.log("Error:", error);
      }
    }
  };

  //
  const submithandler = async (e) => {
    e.preventDefault();
    try {
      const addUser = { ...input };
      const response = await fetch("http://localhost:4000/api/signup", {
        method: "POST",
        body: JSON.stringify(addUser),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      if (!response.ok) {
        alert(result.error);
      }

      if (response.ok) {
        // Registration successful
        navigate("/login");
        toast.info("Registration Successful", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      setInput("");
    } catch (error) {
      console.error(error);
      alert("Internal server error");
    }
  };

  return (
    <div>
      {!otpSent ? (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h1 className="mt-10 text-center text-5xl font-black">Register</h1>
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-500 ">
              Please fill in the fields below:
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              {/*  */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  {/* Phone no */}Username
                </label>
                <div className="mt-2">
                  <input
                    // id="phonenumber"
                    name="name"
                    onChange={inputhandler}
                    type="phonenumber"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black font-semibold focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/*  */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Phone no
                </label>
                <div className="mt-2">
                  <input
                    name="phoneno"
                    onChange={inputhandler}
                    type="phonenumber"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black font-semibold focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/*  */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    name="email"
                    onChange={inputhandler}
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black font-semibold focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
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
                  <div className="text-sm">
                    {/* <a href="#" className="font-semibold text-black ">
                      Forgot password?
                    </a> */}
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    name="password"
                    onChange={inputhandler}
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-black font-semibold focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  // onClick={submithandler}
                  onClick={sendOtp}
                >
                  Sign in
                </button>
              </div>
              <div id="recaptcha"></div>
            </form>
            <p className="mt-10 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <a href="#" className="font-semibold leading-6 text-gray-500 ">
                <Link to={"/login"}>
                  <u>Login</u>
                </Link>
              </a>
            </p>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center ">
          <div className="flex flex-col items-center mt-16 pt-5">
            <h2 className="m-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-500">
              Verify your OTP
            </h2>
            <p className="pb-5">Please enter the verification code sent to </p>
            <div className="flex items-center">
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-32 h-12 text-2xl mx-1 text-center border rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              className="ml-4 px-4  py-2 mt-5 bg-black text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              onClick={verifyOtp}
            >
              Check OTP
            </button>
          </div>
        </div>
      )}
      <Incentives />
    </div>
  );
};

export default Signup;
