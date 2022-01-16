import * as React from "react";
import Image from "next/image";
import {AiOutlineArrowRight} from 'react-icons/ai'

const BannerSecElements = () => {
  return (
    <>
      <main ClassName="px-2 py-32 bg-white md:px-0">
        <div ClassName="container items-center max-w-6xl px-8 mx-auto xl:px-5">
          <div ClassName="flex flex-wrap items-center sm:-mx-3">
            <div ClassName="w-full md:w-1/2 md:px-3">
              <div ClassName="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
                <h1 ClassName="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <span ClassName="block xl:inline ">Going on a vacation?</span><br />
                  <span ClassName="block text-primary xl:inline">
                     Try Accommod!
                  </span>
                </h1>
                <p ClassName="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
                  It's never been easier to travel this simple. Accommod serves you best vacation experience.
                </p>
                <div ClassName="relative flex flex-col sm:flex-row sm:space-x-4">
                  <a
                    href="/signup"
                    ClassName="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-pmry rounded-md sm:mb-0 hover:ring-4 ring-blue-500 transition duration-500 ease-in-out sm:w-auto"
                  >
                    Get Started
                    &nbsp;<AiOutlineArrowRight/>
                  </a>
                  <a
                    href="/about"
                    ClassName="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div ClassName="w-full md:-mt-20 md:w-1/2">
              <div ClassName="w-full h-auto overflow-hidden rounded-md select-none ">
                    <img src="https://image.freepik.com/free-photo/fun-3d-panda-backpacker-cartoon-character_183364-81203.jpg" alt=""/>
                    
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

const BannerSec = () => {
  return (
    <>
      <BannerSecElements />
    </>
  );
};

export default BannerSec;
