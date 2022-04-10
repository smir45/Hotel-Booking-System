// import * as React from "react";
import DashboardNavigation from "../components/componentsFiles/dashboard";
import {getCookie} from ".././components/componentDatas/userdetails/userdataCookies";
import jwt from "jsonwebtoken";
import React, {useState, useEffect} from "react";
import {io} from 'socket.io-client';
import router from "next/router";

const HomePage = () => {
    return (
        <div>
            <Header/>
        </div>
    );
};

const Home = () => {
    const token = getCookie("token");
    const decoded = jwt.decode(token);
    localStorage.setItem("user_details", decoded);
    if(decoded?.isAdmin === true){
        router.push("/admin/dashboard");
    }
    return (
        <main>
            <DashboardNavigation/>
        </main>
    );
};
module.exports = Home;
