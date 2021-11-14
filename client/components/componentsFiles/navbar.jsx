import * as React from "react";
import Link from "next/link";
import NavbarDatas from "../componentDatas/NavbarDatas";

const NavbarElements = (props) => {
  return (
    <div>
      <nav className="w-full px-8 text-gray-700 bg-white">
        <div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
          <div className="relative flex flex-col md:flex-row">
            <a
              href="/"
              className="mx-auto text-xl font-black leading-none text-primary select-none"
            >
              Accommod
            </a>
            <div className="flex flex-wrap items-center mb-5 text-base  md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-400">
              <a
                href="/"
                className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
              >
                Home
              </a>
              <a
                href="/blog"
                className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
              >
                Blog
              </a>
              <a
                href=""
                className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
              >
                About
              </a>
              <a
                href=""
                className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
              >Contact</a>
              
              <a
                href=""
                className="mr-5 font-medium leading-6 text-gray-600 hover:text-gray-900"
              >explore</a>
            </div>
          </div>
          <div className="inline-flex items-center ml-5 space-x-6 lg:justify-end">
            <a
              href="/login"
              className="text-base font-medium leading-6 text-gray-600 whitespace-nowrap transition duration-150 ease-in-out hover:text-blue-700"
            >
              Sign in
            </a>
            <a
              href="/signup"
              className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-nowrap bg-pmry border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-blue-600 transition duration-150 ease-in-out"
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

const Navbar = () => {
  return (
    <main>
      <NavbarElements datas={NavbarDatas} />
    </main>
  );
};

export default Navbar;
