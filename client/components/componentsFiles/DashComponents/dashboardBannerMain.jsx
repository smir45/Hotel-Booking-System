import * as React from "react";
import { HiChevronDoubleRight } from "react-icons/hi";

const DasboardStyles = {
  border: "1px solid red",
  height: "100vh",
  width: "100%",
};

const DasboardBannerMainElements = () => {
  return (
    <main>
      <div
        style={{ height: "81vh" }}
        className="min-w-full flex items-center justify-center text-center bg-hero-pattern bg-cover bg-no-repeat max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="">
          <h2 className="text-white font-bold underline">Welcome to Accommod</h2>
          <h1 className="text-white my-3 text-6xl font-extrabold space-y-4">Make Tour & Explore <br /> Incredible Destinations</h1>
          <button className="border-pmry bg-pmry text-white my-5 py-3 px-12 rounded " type="submit">Explore More ..</button>
        </div>
      </div>
    </main>
  );
};

const DasboardBannerMain = () => {
  return (
    <div>
      <DasboardBannerMainElements />
    </div>
  );
};

export default DasboardBannerMain;
