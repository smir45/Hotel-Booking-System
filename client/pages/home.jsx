import * as React from "react";
import Header from "../components/componentsFiles/dashboard";
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
      <HomePage />
    </main>
  );
};
module.exports = Home;
