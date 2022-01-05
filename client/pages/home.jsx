import * as React from "react";
import DashboardNavigation from "../components/componentsFiles/dashboard";

const HomePage = () => {    
  return (
    <div>
      <Header />
    </div>
  );
};

const Home = () => {
  return (
    <main>
      <DashboardNavigation />
    </main>
  );
};
module.exports = Home;
