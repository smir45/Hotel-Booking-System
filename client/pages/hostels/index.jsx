import React from "react";

const Hostels = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto max-w-7x1">
          <div className="flex flex-wrap w-full mb-4 p-4">
            <div className="w-full mb-6 lg:mb-0">
              <h1 className="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900">
                News
              </h1>
              <div className="h-1 w-20 bg-primary rounded" />
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="bg-white p-6 rounded-xl">
                <img
                  className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6"
                  src="https://kuyou.id/content/images/ctc_2020021605150668915.jpg"
                  alt="Image Size 720x400"
                />
                <h3 className="tracking-widest p-1 px-2 text-white rounded-xl text-indigo-500 bg-pmry text-xs font-medium title-font" style={{width: "fit-content"}}>
                  Top Rated
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
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
  );
};

export default Hostels;
