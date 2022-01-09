import React, { useState, useEffect } from "react";
import router from "next/router";
import HomeDatas from "../componentDatas/HomeData";
import BannerSec from "./BannerSec";
import HostBanner from "./HostBanner";
import Services from "./Services";
import Navbar from "./navbar";
import Footer from "./footer";
const IndexElements = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(false);
    };

    fetchData();
    function getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1,c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
      }
      return null;
    }
    
    
    if(getCookie("token")){
      return router.push("/home");
    }
  }, []);



  if (isLoading) {
    return <div className="login-back-loading">Loading...</div>;
  }

  return (
    <div>
      <head>
        <header>
          <title>Accommod | Home</title>
        </header>
      </head>
      <Navbar />
      <BannerSec />
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
