import React from 'react'

const Cards = () => {
  return (
    <div>
        <div class="mt-4 mx-auto my-2 w-11/12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <div class="bg-white shadow-xl rounded-lg p-4 sm:p-6 xl:p-8 ">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                    56
                  </span>
                  <h3 class="text-base font-normal text-gray-500">
                    Total Number of Hotels
                  </h3>
                </div>
                <div class="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                  14.6%
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div class="bg-white shadow-xl bg-pmry text-white rounded-lg p-4 sm:p-6 xl:p-8">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                    50
                  </span>
                  <h3 class="text-base font-normal text-gray-500">
                    Total number of Bookings
                  </h3>
                </div>
                <div class="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                  32.9%
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div class="bg-white shadow-xl  rounded-lg p-4 sm:p-6 xl:p-8 ">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">
                    38
                  </span>
                  <h3 class="text-base font-normal text-gray-500">
                    Total Number of Destinations
                  </h3>
                </div>
                <div class="ml-5 w-0 flex items-center justify-end flex-1 text-red-500 text-base font-bold">
                  -2.7%
                  <svg
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Cards