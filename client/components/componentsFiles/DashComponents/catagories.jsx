import * as React from "react";
import Link from "next/link";
import { FaBed, FaHome, FaQuestionCircle } from "react-icons/fa";
import { MdRestaurantMenu, MdMoreHoriz } from "react-icons/md";
import { BsBuilding } from "react-icons/bs";
export const Catagories = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h1
        className="text-3xl text-left border-b-4 border-pmry pb-4 px-2 mb-4"
        style={{ width: "fit-content" }}
      >
        Catagories
      </h1>
      <div className="grid grid-cols-2 gap-5 row-gap-5 sm:grid-cols-3 lg:grid-cols-6">
        <Link href="/hotels">
          <div className="text-center hover:bg-pmry hover:text-white duration-700 hover:cursor-pointer rounded-2xl">
            <div className="flex items-center text-4xl justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
              <FaBed />
            </div>
            <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
              hotels
            </h6>
          </div>
        </Link>
        <Link href="/homestays">
        <div className="text-center hover:bg-pmry hover:text-white duration-700 hover:cursor-pointer rounded-2xl">
          <div className="flex items-center text-4xl justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
            <FaHome />
          </div>
          <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
            homestays
          </h6>
        </div>
        </Link>
        <Link href="/hostels">
        <div className="text-center hover:bg-pmry hover:text-white duration-700 hover:cursor-pointer rounded-2xl">
          <div className="flex items-center text-4xl justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
            <BsBuilding />
          </div>
          <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
            hostels
          </h6>
        </div>
        </Link>
        <Link href="/restaurants">
        <div className="text-center hover:bg-pmry hover:text-white duration-700 hover:cursor-pointer rounded-2xl">
          <div className="flex items-center text-4xl justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
            <MdRestaurantMenu />
          </div>
          <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
            restaurant
          </h6>
        </div>
        </Link>
        <Link href="/faq">
        <div className="text-center hover:bg-pmry hover:text-white duration-700 hover:cursor-pointer rounded-2xl">
          <div className="flex items-center text-4xl justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
            <FaQuestionCircle />
          </div>
          <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
            faq
          </h6>
        </div>
        </Link>
        <Link href="/more">
        <div className="text-center hover:bg-pmry hover:text-white duration-700 hover:cursor-pointer rounded-2xl">
          <div className="flex items-center text-4xl justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
            <MdMoreHoriz />
          </div>
          <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
            More
          </h6>
        </div>
        </Link>
      </div>
    </div>
  );
};
