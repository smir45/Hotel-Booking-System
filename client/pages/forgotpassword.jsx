import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useToasts } from "react-toast-notifications";

const ForgotPassword = () => {
    const { addToast } = useToasts();
  var userEmail;
  userEmail = localStorage.getItem("email").replace(/['"]+/g, "");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();
  
  const url = "http://localhost:8000/api/auth/user/emailverification";
  const verify = async (e) => {
    e.preventDefault();
    const res = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userEmail,
        otp,
      }),
    });
    const res2 = await res.json();
    if (res2.message === "User already verified") {
      return addToast(res2.message, { appearance: "error" });
    }
    if (res2.message === "Invalid OTP") {
      return addToast(res2.message, { appearance: "error" });
    }
    if (res2.message === "User verified successfully") {
      addToast(res2.message, { appearance: "success" });
      setTimeout(() => {
        router.push("/login");
      }
      , 1000);
    }
  };
  return (
    <div>
        <head>
            <title>Accommod | ForgetPassword</title>
        </head>
        <div
        className="flex justify-center items-center"
        style={{ background: "#f5f5f5", height: "100vh" }}
      >
        <div
          className="p-2 shadow-2xl rounded-2xl"
          style={{ background: "#ffffff", width: "800px", height: "600px" }}
        >
          <img
            className="mx-auto"
            src="https://i.imgur.com/gWx9Jx7.png"
            alt=""
          />
          <h1 className="text-center text-4xl font-bold p-2">
            Forgot Password
          </h1>
          <p className="text-center text-xl p-2">
            Please check your email for OTP.
          </p>
          <form
            className="flex justify-center"
            action=""
            onSubmit={(e) => verify(e)}
          >
            <div>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                disabled
                style={{display: "none"}}
                name="userEmail"
                id="userEmail"
                value={userEmail}
              />
              <input
                onChange={(e) => setOtp(e.target.value)}
                className="rounded-lg w-full p-5 my-2 bg-gray-200"
                type="text"
                name="otp"
                style={{minWidth: "300px"}}
                placeholder="Enter OTP"
                id="otp"
              />
              <div class="relative my-5">
                <button
                  type="submit"
                  class="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-pmry rounded-lg hover:bg-pmry ease"
                >
                  Verify
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword