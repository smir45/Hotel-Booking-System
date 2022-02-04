import React from "react";
import Link from "next/link";
// import "../components/componentDatas/styles/404.module.css";

const Errorpage = () => {
  return (
    <div className="bg-pmry h-screen flex flex-col justify-evenly items-center">
        <p className="text-white text-2xl">Page not found</p>
        <h1 className="text-9xl font-light text-white">404</h1>
        <p className="text-white text-2xl">Opps! something went wrong</p>
        <Link href="/home">
        <h1 className="text-white border-2 p-5 hover:cursor-pointer ">Back to Home</h1>
        </Link>
    </div>
  );
};

export default Errorpage;
