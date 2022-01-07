import Link from "next/link";
import Image from "next/image";
import React, { useState, Fragment } from "react";
import NavHeaderDashboard from "./header";
import DasboardBannerMain from "./DashComponents/dashboardBannerMain";
import DashboardSearchBox from "./DashComponents/dashboardSearchbox";
import FeaturesCard from "./DashComponents/featuresCard";
import DashboardTrending from "./DashComponents/trendingDashboard";
import { useRouter } from "next/router";

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
        <NavHeaderDashboard/>
        <div className="w-screen overflow-x-auto" style={{height: "100vh" }}>
        <DasboardBannerMain/>
        <DashboardSearchBox/>
        <FeaturesCard/>
        <DashboardTrending/>
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
