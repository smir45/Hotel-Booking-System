import React, { useState, useEffect } from "react";
import Link from "next/link";
import router from "next/router";
import axios from "axios";

const BlogData = () => {
  return (
    <>
      <div className="bg-[#EEF6FC] h-[100vh]">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto max-w-7x1">
            <div className="flex flex-wrap w-full mb-4 p-4">
              <div className="w-full mb-6 lg:mb-0">
                <h1 className="sm:text-4xl text-center underline text-5xl font-medium font-bold title-font mb-2 text-gray-900">
                  Accommod Blogs
                </h1>
                <div className="h-1 w-20 bg-primary rounded" />
              </div>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="bg-white p-6 border bg-[#ffff] shadow-xl rounded-xl">
                  <img
                    className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-5"
                    src="https://kuyou.id/content/images/ctc_2020021605150668915.jpg"
                    alt="Image Size 720x400"
                  />
                  <h2 className="text-xl text-gray-900 font-bold text-center title-font mb-4">
                    Chichen Itza
                  </h2>
                  <p className="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogData;
