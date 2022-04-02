import React, { useState, useEffect } from "react";
import NavDrawer from "../../components/componentsFiles/admin/components/Navbar/drawer";
import { getCookie } from "../../components/componentDatas/userdetails/userdataCookies";
import Jwt from "jsonwebtoken";
import Router from "next/router";
import { AiFillLock } from "react-icons/ai";
import router from "next/router";

const dashboard = () => {
  const [error, setError] = useState(false);
  const user = getCookie("token");
  const userData = Jwt.decode(user);
  useEffect(() => {
    if (userData.isAdmin === false) {
      setError(true);
      router.push("/login");
    }
  }, []);
  console.log(userData);
  return (
    <div>
      <NavDrawer />
    </div>
  );
};

export default dashboard;
