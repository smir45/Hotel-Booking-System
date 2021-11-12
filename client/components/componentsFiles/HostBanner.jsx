import * as React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const HostBannerElements = () => {
  return (
    <>
      <main class="py-8 leading-7 w-11/12 rounded-2xl border-solid border-1 text-white border-pmry mx-auto bg-pmry text-gray-900 bg-white sm:py-12 md:py-16 lg:py-24">
        <div class="max-w-6xl  px-10  mx-auto border-solid lg:px-12">
          <div class="flex flex-col items-start leading-7 text-gray-900 border-0 border-gray-200 lg:items-center lg:flex-row">
            <div class="box-border  flex-1 text-center border-solid sm:text-left">
              <h2 class="m-0 text-4xl font-semibold leading-tight tracking-tight text-left text-black border-0 border-gray-200 sm:text-5xl">
                Convert your property into Money
              </h2>
              <p class="mt-2 text-xl text-left text-gray-900 border-0 border-gray-200 sm:text-2xl">
                Our service will help you rent your property and earn some Money.
              </p>
            </div>
            <a
              href="#_"
              class="inline-flex items-center justify-center w-full px-5 py-4 mt-6 ml-0 font-sans text-base leading-none text-primary no-underline bg-gray-100 ring-4 hover:ring-4 transition duration-200 border border-gray-100 border-solid rounded-lg cursor-pointer md:w-auto lg:mt-0 hover:bg-gray-500 hover:border-gray-500 hover:text-white focus-within:bg-indigo-700 focus-within:border-indigo-700 focus-within:text-white sm:text-lg lg:ml-6 md:text-xl"
            >
              Try Hosting&nbsp;
              <AiOutlineArrowRight />
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

const HostBanner = () => {
  return (
    <>
      <HostBannerElements />
    </>
  );
};

export default HostBanner;
