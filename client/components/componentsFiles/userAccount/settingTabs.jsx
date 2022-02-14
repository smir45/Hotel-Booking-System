import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { FaLongArrowAltLeft } from "react-icons/fa";
import router from "next/router";
import { useToasts } from "react-toast-notifications";
import jwt from "jsonwebtoken";
import { getCookie } from "../../componentDatas/userdetails/userdataCookies";

const SettingTab = () => {
  const { addToast } = useToasts();
  const [user, setUser] = useState("");

  useEffect(() => {
    const auth = getCookie("token");
    if (!auth) {
      addToast("Please Login to Continue", { appearance: "error" });
      return router.push("/login");
    }
    setUser(jwt.decode(auth));
  }, []);
  return (
    <main className="overflow-x-hidden">
      <div
        className="flex w-4/5 mx-auto my-5 rounded-xl"
        style={{ background: "#ffffff" }}
      >
        <div className="flex p-5 mx-auto w-full rounded-xl sm:flex-col md:flex-col xsm:flex-col lg:flex-col xl:flex-row fold:flex-col ">
          <div className="">
            <img
              className="border-2 border-pmry h-52 w-52 rounded-lg sm:mx-5 md:mx-5 xsm:mx-5 lg:mx-0 xl:mx-0"
              src={user.image}
              alt=""
            />
          </div>
          <div className=" ml-5">
            <h1 className="text-primary font-bold p-2 text-3xl">{user.name}</h1>
            <p className="p-2 font-bold" style={{ color: "grey" }}>
              {" "}
              <span style={{ color: "#000" }}>Email:</span> {user.email}
            </p>
            <p className="p-2 font-bold" style={{ color: "grey" }}>
              <span style={{ color: "#000" }}>Phone:</span> code, {user.phone}{" "}
            </p>
            <p className="p-2 font-bold" style={{ color: "grey" }}>
              <span style={{ color: "#000" }}>Address:</span> {user.city},{" "}
              {user.country}
            </p>
          </div>
        </div>
        <div className=" text-primary" style={{height: "fit-content", width:"fit-content"}}>
          <a href="/home" className="flex p-2 mt-5 mx-5 text-lg underline"> 
          <span className="mt-1 text-xl"><FaLongArrowAltLeft /></span>&nbsp; 
          <p>Back</p></a>
        </div>
      </div>
    </main>
  );
};

export default SettingTab;
