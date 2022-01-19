import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import router from "next/router";
import { useToasts } from "react-toast-notifications";
import jwt from "jsonwebtoken";

const SettingTab = () => {
    const { addToast } = useToasts();
    const [user, setUser] = useState("");

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
    setUser(jwt.decode(getCookie("token")));
    console.log(user);
    if (!getCookie("token")) {
      addToast("Please Login to Continue", { appearance: "error" });
      return router.push("/login");
    }
}, []);
  return (
    <main>
      <div
        className="flex w-4/5 mx-auto my-5 rounded-xl"
        style={{ background: "#ffffff" }}
      >
        <div className="flex p-5 mx-auto w-full rounded-xl">
          <div className="">
            <img
              className="border-2 border-pmry h-52 w-52 rounded-lg"
              src={user.image}
              alt=""
            />
          </div>
          <div className="capitalize ml-5">
            <h1 className="text-primary font-bold p-2 text-3xl">{user.name}</h1>
            <p className="p-2 font-bold" style={{ color: "grey" }}>
              {" "}
              <span style={{ color: "#000" }}>email:</span> {user.email}
            </p>
            <p className="p-2 font-bold" style={{ color: "grey" }}>
              <span style={{ color: "#000" }}>phone:</span> code, {user.phone}{" "}
            </p>
            <p className="p-2 font-bold" style={{ color: "grey" }}>
              <span style={{ color: "#000" }}>address:</span> {user.city}, {user.country}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SettingTab;
