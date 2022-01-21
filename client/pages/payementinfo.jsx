import * as React from "react";
import Link from "next/link";
import axios from "axios";
import SettingTab from "../components/componentsFiles/userAccount/settingTabs";

const paymentinfo = () => {
    return(
        <main
      className="bg-greyish p-5 border-2 border-pmry"
      style={{  height: "104vh" }}
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
          <a className="border-pmry capitalize outline-none p-5 rounded-tr-xl rounded-tl-xl hover:bg-pmry hover:duration-1000" style={{ background: "#ffffff" }}>
            payment
          </a>
        </Link>

        <Link href="/notifications">
          <a className="capitalize outline-none p-5 hover:bg-pmry rounded-tr-xl rounded-tl-xl hover:text-white hover:duration-1000">
            notifications
          </a>
        </Link>
        <Link href="/useraddress">
          <a
            className="border-pmry capitalize outline-none p-5 rounded-tr-xl rounded-tl-xl hover:bg-pmry hover:duration-1000"
            
          >
            address
          </a>
        </Link>
      </div>
      <div
        className="flex flex-col p-5 w-4/5 mx-auto rounded-tr-xl rounded-bl-xl rounded-br-xl "
        style={{ background: "#ffffff" }}
      >
        <form action="">
            
         <br />
            <button className="p-3 bg-pmry text-white w-52" type="submit">
            Update
          </button>
        </form>
      </div>
    </main>
    )
}

export default paymentinfo;