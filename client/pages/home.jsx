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
    var Tawk_API = Tawk_API || {},
        Tawk_LoadStart = new Date();
    (function () {
        var s1 = document.createElement("script"),
            s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = "https://embed.tawk.to/62286684a34c2456412a2cb4/1ftmt0uvb";
        s1.charset = "UTF-8";
        s1.setAttribute("crossorigin", "*");
        s0.parentNode.insertBefore(s1, s0);
    })();
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
