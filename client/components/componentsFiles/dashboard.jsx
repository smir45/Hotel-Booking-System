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
      <div>
      
        <div className="border sticky">
        <NavHeaderDashboard/>
        </div>
        <DasboardBannerMain/>
        <DashboardSearchBox/>
        <FeaturesCard/>
        <DashboardTrending/>

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
