import Link from "next/link";
import Image from "next/image";
import React, {useState, Fragment} from "react";
import NavHeaderDashboard from "./header";
import DasboardBannerMain from "./DashComponents/dashboardBannerMain";
import DashboardSearchBox from "./DashComponents/dashboardSearchbox";
import FeaturesCard from "./DashComponents/featuresCard";
import DashboardTrending from "./DashComponents/trendingDashboard";
import {Catagories} from "./DashComponents/catagories";
import BestHotels from "./DashComponents/bestHotels";
import Footer from "./footer";
import {HowItWorks} from "./DashComponents/howitworks";
import {useRouter} from "next/router";
import Blog from "../../pages/blog";
import SearchBarDashboard from "./DashComponents/searchBarDashboard";

const DasboardNavigationElements = () => {
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
        <>
            <header>
                <head>
                    <title>Accmmod | Home</title>
                </head>
            </header>
            <div>
                <div className="flex">
                    <div>
                    </div>
                    <NavHeaderDashboard/>
                    <div className="w-screen overflow-x-auto" style={{height: "100vh"}}>
                        <DasboardBannerMain/>
                        <DashboardSearchBox/>
                        {/*<SearchBarDashboard/>*/}
                        <FeaturesCard/>
                        <DashboardTrending/>
                        <Catagories/>
                        {/*<BestHotels/>*/}
                        {/*<Blog/>*/}
                        <HowItWorks/>

                        <Footer/>
                    </div>
                </div>
            </div>
        </>
    );
};

const DashboardNavigation = () => {
    return (
        <div>
            <DasboardNavigationElements/>
        </div>
    );
};

export default DashboardNavigation;
