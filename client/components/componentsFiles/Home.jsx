import * as react from "react";
import HomeDatas from "../componentDatas/HomeData";
import DashboardBanner from "./dashboardBanner";
import BannerSec from "./BannerSec";
import HostBanner from "./HostBanner";
import Services from "./Services";
import Navbar from "./navbar";
import Footer from "./footer";
const IndexElements = (props) => {
  return (
    <div>
      <head>
        <header>
          <title>Accommod | Home</title>
        </header>
      </head>
      <Navbar />
      <BannerSec />
      <DashboardBanner />
      <HostBanner />
      <Services />
      <Footer />
    </div>
  );
};

const Index = () => {
  return <IndexElements datas={HomeDatas} />;
};

export default Index;
