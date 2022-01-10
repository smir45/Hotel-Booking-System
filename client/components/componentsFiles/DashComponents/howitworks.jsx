import * as React from 'react';
export const HowItWorks = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="min-w-full mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h1
        className="text-3xl text-left border-b-4 border-pmry pb-4 px-2 mb-4"
        style={{ width: "fit-content" }}
      >
        How it works ?
      </h1>
        </div>
        <div className="grid gap-8 row-gap-0 lg:grid-cols-3">
          <div className="relative text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
              <img src="https://i.imgur.com/Y44XYwX.png" alt="relax-img" />
            </div>
            <h6 className="mb-2 text-2xl text-primary font-extrabold">Book & relax</h6>
            <p className="max-w-md mb-3 text-lg text-gray-900 sm:mx-auto">
            Let each trip be an inspirational journey, each room a peaceful space
            </p>
            <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
              <svg
                className="w-8 text-gray-700 transform rotate-90 lg:rotate-0"
                stroke="#375488"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  strokeMiterlimit="10"
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="15,5 22,12 15,19 "
                />
              </svg>
            </div>
          </div>
          <div className="relative text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
              <img src="https://i.imgur.com/W2czjwf.png" alt="checklist-img" />
            </div>
            <h6 className="mb-2 text-2xl text-primary font-extrabold">Smart Checklist</h6>
            <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
            Let each trip be an inspirational journey, each room a peaceful space
            </p>
            <div className="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
            <svg
                className="w-8 text-gray-700 transform rotate-90 lg:rotate-0"
                stroke="#375488"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <line
                  fill="none"
                  strokeMiterlimit="10"
                  x1="2"
                  y1="12"
                  x2="22"
                  y2="12"
                />
                <polyline
                  fill="none"
                  strokeMiterlimit="10"
                  points="15,5 22,12 15,19 "
                />
              </svg>
            </div>
          </div>
          <div className="relative text-center">
            <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-20 sm:h-20">
              <img src="https://i.imgur.com/wBKaP5N.png" alt="travel-img" />
            </div>
            <h6 className="mb-2 text-2xl text-primary font-extrabold">Travel Freely</h6>
            <p className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
            Let each trip be an inspirational journey, each room a peaceful space
            </p>
          </div>
        </div>
      </div>
    );
  };