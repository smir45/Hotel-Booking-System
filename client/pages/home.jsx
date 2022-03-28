import * as React from "react";
import DashboardNavigation from "../components/componentsFiles/dashboard";
import {getCookie} from ".././components/componentDatas/userdetails/userdataCookies";
import jwt from "jsonwebtoken";

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
    return (
        <main>
            <DashboardNavigation/>
        </main>
    );
};
module.exports = Home;
