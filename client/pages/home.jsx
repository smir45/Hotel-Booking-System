import * as React from "react";
import DashboardNavigation from "../components/componentsFiles/dashboard";

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
    return (
        <main>
            <DashboardNavigation/>
        </main>
    );
};
module.exports = Home;
