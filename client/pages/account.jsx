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
      var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1,c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
      }
      return null;
    }
    
    
    if(!getCookie("token")){
      addToast(('Please Login to Continue'), { appearance: "error" });
      return router.push("/login");
    }
  }, []);
  return (
      <main>
          <h1 className="text-primary text-3xl font-bold mt-10 text-center">Account Settings</h1>
          <form action="">
            <div className="p-5 border-2 capitalize">
              <p className="y-2">name</p>
              <input className="border-2 border-pmry rounded-lg w-3/6 p-4" type="text" name="name" />
            </div>
            <div className="p-5 border-2 capitalize">
              <p className="y-2">email</p>
              <input className="border-2 border-pmry rounded-lg w-3/6 p-4" type="email" name="email" />
            </div>
            <div className="p-5 border-2 capitalize">
              <p className="y-2">gender</p>
              <input className="border-2 border-pmry rounded-lg w-3/6 p-4" type="password" name="password" />
            </div>
            <div className="p-5 border-2 capitalize">
              <p className="y-2">date og birth</p>
              <input className="border-2 border-pmry rounded-lg w-3/6 p-4" type="date" name="dob" />
            </div>
          </form>
      </main>
  )
};

const Account = () => {
  return (
    <main>
      <AccountSetting />
    </main>
  );
};


export default Account;