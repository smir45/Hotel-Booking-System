import Link from "next/link";
import Image from "next/image";
import React, { useState, Fragment } from "react";
import NavHeaderDashboard from "./header";
import DasboardBannerMain from "./DashComponents/dashboardBannerMain";
import DashboardSearchBox from "./DashComponents/dashboardSearchbox";
import FeaturesCard from "./DashComponents/featuresCard";
import DashboardTrending from "./DashComponents/trendingDashboard";
import { Catagories } from "./DashComponents/catagories";
import BestHotels from "./DashComponents/bestHotels";
import Footer from "./footer";
import { HowItWorks } from "./DashComponents/howitworks";
import { useRouter } from "next/router";
import Blog from "../../pages/blog";

const DasboardNavigationElements = () => {
  const router = useRouter();

  return (
    <>
      <header>
        <head>
          <title>Accmmod | Home</title>
        </head>
      </header>
      <div>
        <div className="flex">
          <NavHeaderDashboard />
          <div className="w-screen overflow-x-auto" style={{ height: "100vh" }}>
            <DasboardBannerMain />
            <DashboardSearchBox />
            <FeaturesCard />
            <DashboardTrending />
            <Catagories />
            <BestHotels />
            {/* <Blog/> */}
            <HowItWorks />
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
      <DasboardNavigationElements />
    </div>
  );
};

export default DashboardNavigation;
