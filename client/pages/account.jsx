import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import SettingTab from "../components/componentsFiles/userAccount/settingTabs";


const AccountSetting = () => {
  return (
    <main className="bg-greyish p-5" style={{ margin: "-4vh", height: "104vh" }}>
      <h1 className="text-primary text-3xl font-bold mt-10 text-center">
        Account Settings
      </h1>
      <SettingTab />
      <div className="flex w-4/5 mx-auto">
            <Link href="/account"><a className="capitalize outline-none p-5 hover:bg-pmry rounded-tr-xl rounded-tl-xl hover:duration-1000" style={{background: "#ffffff"}}>account</a></Link>
            <Link href="/payementinfo"><a className="border-pmry capitalize outline-none p-5 rounded-tr-xl rounded-tl-xl hover:bg-pmry hover:text-white hover:duration-1000">payment</a></Link>
            <Link href="/notifications"><a className="border-pmry capitalize outline-none p-5 rounded-tr-xl rounded-tl-xl hover:bg-pmry hover:text-white hover:duration-1000">notifications</a></Link>
            <Link href="/useraddress"><a className="border-pmry capitalize outline-none p-5 rounded-tr-xl rounded-tl-xl hover:bg-pmry hover:text-white hover:duration-1000">address</a></Link>
            </div>
      <div className="flex flex-col w-4/5 mx-auto rounded-tr-xl rounded-bl-xl rounded-br-xl p-5" style={{background: "#ffffff"}}>
        <form action="">
        <input
          className="rounded-md w-3/5 p-3 my-5"
          style={{background: "#f5f5f5"}}
          type="text"
          name="fullname"
          id="fullname"
          placeholder="Full Name"
        />
        <input
          className="rounded-md w-3/5 p-3 my-5"
          style={{background: "#f5f5f5"}}
          type="email"
          name="email"
          id="email"
          placeholder="email"
        />
        <input
          className="rounded-md w-3/5 p-3 my-5"
          style={{background: "#f5f5f5"}}
          type="gender"
          name="gender"
          id="gender"
          placeholder="gender"
        />
        <input
          className="rounded-md w-3/5 p-3 my-5"
          style={{background: "#f5f5f5"}}
          type="number"
          name="phone"
          id="phone"
          placeholder="phone"
        />
        <br />
        <button className="p-3 bg-pmry text-white w-52" type="submit">Update</button>
        </form>

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
