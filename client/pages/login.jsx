import * as React from "react";
import Link from "next/link";
import {AiFillLock} from 'react-icons/ai'

const LoginElements = () => {
  return (
    <>
    <head>
      <header>
        <title>Accommod | Login</title>
      </header>
    </head>
      <div className=" w-full">
        <div className="w-full  h-screen flex justify-center items-center md:flex-row">
          <div className="relative sm:w-2/5 z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
            <form action="">
            <div className="bg-pmry text-white text-5xl w-min p-5 rounded-3xl m-auto my-8">
                  <AiFillLock/>
              </div>
              <h1 className="mb-6  text-2xl font-medium text-center">
                Sign in to your Account
              </h1>
              

              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                className="block w-full px-4 py-3 mb-4  border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-pmry focus:outline-none "
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="block w-full px-4 py-3 mb-4  border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-pmry focus:outline-none"
              />
              <button
                type="submit"
                className="w-full px-3 py-4 font-medium text-white bg-pmry rounded-lg"
              >
                Login
              </button>
              <p className="w-full mt-4 text-sm text-center text-gray-500">
                Don't have an account? <a href="/signup" className="underline text-blue-600">Sign Up</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

const Login = () => {
  return (
    <div className="login">
      <LoginElements />
    </div>
  );
};

export default Login;
