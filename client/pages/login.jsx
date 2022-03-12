import React, { useState } from "react";
import cookie from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiFillLock } from "react-icons/ai";
import { useToasts } from "react-toast-notifications";
import GoogleAuthentication from "../components/componentsFiles/googleAuth";

const LoginElements = () => {
  const { addToast } = useToasts();


  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [password, setPassword] = useState("");
  const router = useRouter();
  const userLogin = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:8000/api/auth/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });



    const res2 = await res.json();
    if (res2.message === "Invalid email or username") {
      return addToast(res2.message, { appearance: "error" });
    }else if (res2.message === "Invalid Password") {

      setError(true);
      return addToast(res2.message, { appearance: "error" });
    }
    if (res2.message === "Please verify your email") {
      addToast(res2.message, { appearance: "error" });
      setTimeout(() => {
        localStorage.setItem("email", JSON.stringify(email));
        router.push("/verify");
      }
      , 1000);
    }
     else {
      addToast(res2.message.success, { appearance: "success" });
      cookie.set("token", res2.data);
      cookie.set("user", res2.user);
      router.push("/home");
    }

    
  };

  return (
    <>
      <head>
        <header>
          <title>Accommod | Login</title>
        </header>
      </head>
      <div className=" w-full">
        <div className="w-full  h-screen flex justify-center items-center md:flex-row">
          {error === true ? (
             <div className="relative sm:w-2/5 z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-2xl shadow-2xl px-7 bg-red-200">
             <form onSubmit={(e) => userLogin(e)}>
               <div className="bg-red-500 text-white text-5xl w-min p-5 rounded-3xl m-auto my-8">
                 <AiFillLock />
               </div>
               <h1 className="mb-6  text-2xl font-medium text-center">
                 Sign in to your Account
               </h1>
 
               <input
                 type="email"
                 name="email"
                 id="email"
                 placeholder="Email Address"
                 className="block w-full px-4 py-3 mb-4  border-2 border-transparent border-red-500 rounded-lg focus:ring focus:ring-red-500 focus:outline-none "
                 onChange={(e) => setEmail(e.target.value)}
               />
               <input
                 type="password"
                 name="password"
                 id="password"
                 placeholder="Password"
                 className="block w-full px-4 py-3 mb-4  border-2 border-transparent border-red-500 rounded-lg focus:ring focus:ring-red-500 focus:outline-none"
                 onChange={(e) => setPassword(e.target.value)}
               />
               <button
                 type="submit"
                 className="w-full px-3 py-4 font-medium text-white bg-red-500 rounded-lg"
               >
                 Login
               </button>
               <p className="w-full mt-4 text-sm text-center text-gray-500">
                 Don't have an account?{" "}
                 <a href="/signup" className="underline text-blue-600">
                   Sign Up
                 </a>
               </p>
               <p className="w-full mt-4 text-sm text-center text-gray-500">
                <a href="/forgotpassword" className="underline text-blue-600">
                  Forgot Password ?
                </a>
              </p>
             </form>
           </div>
          ):(
            <div className="relative sm:w-2/5 z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7">
            <form onSubmit={(e) => userLogin(e)}>
              <div className="bg-pmry text-white text-5xl w-min p-5 rounded-3xl m-auto my-8">
                <AiFillLock />
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
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="block w-full px-4 py-3 mb-4  border-2 border-transparent border-gray-200 rounded-lg focus:ring focus:ring-pmry focus:outline-none"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="submit"
                className="w-full px-3 py-4 font-medium text-white bg-pmry rounded-lg"
              >
                Login
              </button>
              <div className="w-full flex justify-center mt-2">
                <GoogleAuthentication />
              </div>
              <p className="w-full mt-4 text-sm text-center text-gray-500">
                Don't have an account?{" "}
                <a href="/signup" className="underline text-blue-600">
                  Sign Up
                </a>
              </p>
              <p className="w-full mt-4 text-sm text-center text-gray-500">
                <a href="/forgotpassword" className="underline text-blue-600">
                  Forgot Password ?
                </a>
              </p>
            </form>
          </div>
          )}
          
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
