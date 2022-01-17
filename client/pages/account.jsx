import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import router from "next/router";
import { useToasts } from "react-toast-notifications";

const AccountSetting = () => {
  const { addToast } = useToasts();

  useEffect(() => {
    function getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    }

    if (!getCookie("token")) {
      addToast("Please Login to Continue", { appearance: "error" });
      return router.push("/login");
    }
  }, []);
  return (
    <main>
      <h1 className="text-primary text-3xl font-bold mt-10 text-center">
        Account Settings
      </h1>
      <div className="flex">
        <div className="w-4/5 flex border-2 mx-auto my-5">
          <div className="">
            <img
              className="border-2 border-pmry h-52 w-52 rounded-full"
              src=""
              alt=""
            />
          </div>
          <div className="w-3/5 capitalize ml-5">
            <h1 className="text-primary font-bold p-2 text-3xl">User Name</h1>
            <p className="p-2 font-bold" style={{ color: "grey" }}>
              {" "}
              <span style={{ color: "#000" }}>email:</span> demo@demo.com
            </p>
            <p className="p-2 font-bold" style={{ color: "grey" }}>
              <span style={{ color: "#000" }}>phone:</span> code, number{" "}
            </p>
            <p className="p-2 font-bold" style={{ color: "grey" }}>
              <span style={{ color: "#000" }}>address:</span> city, country
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-4/5 mx-auto">
        <input
          className="border-2 border-pmry rounded-md w-3/5 p-3 my-5"
          type="text"
          name="fullname"
          id="fullname"
          placeholder="Full Name"
        />
        <input
          className="border-2 border-pmry rounded-md w-3/5 p-3 my-5"
          type="email"
          name="email"
          id="email"
          placeholder="email"
        />
        <input
          className="border-2 border-pmry rounded-md w-3/5 p-3 my-5"
          type="gender"
          name="gender"
          id="gender"
          placeholder="gender"
        />
        <input
          className="border-2 border-pmry rounded-md w-3/5 p-3 my-5"
          type="number"
          name="phone"
          id="phone"
          placeholder="phone"
        />
      </div>
    </main>
  );
};

const Account = () => {
  return (
    <main>
      <AccountSetting />
    </main>
  );
};

export default Account;
