import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import router from "next/router";
import { useToasts } from "react-toast-notifications";



const DasboardBannerMainElements = () => {
  const { addToast } = useToasts();
  const [isLoading, setIsLoading] = useState(true);
  const [trending, setTrending] = useState(null);
  const [error, setError] = useState(null);
  const datas = trending;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8000/api/hotels");
      setTrending(result.data);
      setIsLoading(false);
    };

    fetchData();
    function getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for(var i=0;i < ca.length;i++) {
          var c = ca[i];
          while (c.charAt(0)==' ') c = c.substring(1,c.length);
          if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
      }
      return null;
    }
    
    
    if(!getCookie("token")){
      addToast(('Please Login to Continue'), { appearance: "error" });
      return router.push("/login");
    }
  }, []);

   
  if (isLoading) {
    return <div className="login-back-loading">Loading...</div>;
  }
  return (
    <main>

<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-teal-accent-400 transition-all ">
            <img src="https://i.imgur.com/uRasnuo.png" alt="travel" />
          </div>
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Let us handle
              <br className="hidden md:block" />
              your next{' '}
              <span className="inline-block text-deep-purple-accent-400">
                Vacation
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, explicabo minus nobis consequuntur corporis, earum officia repellat id, sapiente incidunt aliquam doloremque blanditiis dignissimos! Ipsa corporis sint minima totam ad!
            </p>
          </div>
          <div>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors border-2 text-white bg-pmry border-pmry py-3 px-5 rounded-lg  duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
              <svg
                className="inline-block w-3 ml-2"
                fill="white"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <img
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
              alt=""
            />
            <img
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
              src="https://images.unsplash.com/photo-1610886023290-6ba32b20e354?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
              alt=""
            />
          </div>
          <div className="px-3">
            <img
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
              src="https://images.unsplash.com/photo-1605590427165-3884d6aa6731?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
              alt=""
            />
          </div>
        </div>
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
