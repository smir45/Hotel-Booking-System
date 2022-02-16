import * as React from "react";
import Link from "next/link";
import axios from "axios";
import SettingTab from "../components/componentsFiles/userAccount/settingTabs";

const NotificationInfo = () => {
  return (
    <main
      className="bg-greyish p-5"
      style={{ height: "104vh" }}
    >
      <h1 className="text-primary text-3xl font-bold mt-10 text-center">
        Account Settings
      </h1>
      <SettingTab />
      <div className="flex w-4/5 mx-auto">
        <Link href="/account">
          <a className="border-pmry capitalize outline-none p-5 rounded-tr-xl rounded-tl-xl hover:bg-pmry hover:text-white hover:duration-1000">
            account
          </a>
        </Link>
        <Link href="/payementinfo">
          <a className="border-pmry capitalize outline-none p-5 rounded-tr-xl rounded-tl-xl hover:bg-pmry hover:text-white hover:duration-1000">
            payment
          </a>
        </Link>

        <Link href="/account">
          <a
            className="capitalize outline-none p-5 hover:bg-pmry rounded-tr-xl rounded-tl-xl hover:duration-1000"
            style={{ background: "#ffffff" }}
          >
            notifications
          </a>
        </Link>
        <Link href="/useraddress">
          <a className="border-pmry capitalize outline-none p-5 rounded-tr-xl rounded-tl-xl hover:bg-pmry hover:text-white hover:duration-1000">
            address
          </a>
        </Link>
      </div>
      <div
        className="flex flex-col w-4/5 mx-auto rounded-tr-xl rounded-bl-xl rounded-br-xl p-5"
        style={{ background: "#ffffff" }}
      >
        <form action="">
          <label className="capitalize" htmlFor="email">
            email notification
          </label>
          <input
            className="capitalize w-full"
            type="checkbox"
            name="email"
            id="email"
            checked
          />
          <label className="capitalize" htmlFor="sms">
            sms notification
          </label>
          <input
            className="capitalize w-full"
            type="checkbox"
            name="sms"
            id="sms"
          />
          <label className="capitalize" htmlFor="push">
            push notification
          </label>
          <input
            className="capitalize w-full"
            type="checkbox"
            name="push"
            id="push"
            checked
          />

          <br />
          <button className="p-3 bg-pmry text-white w-52" type="submit">
            Update
          </button>
        </form>
      </div>
    </main>
  );
};

export default NotificationInfo;
