import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import router from "next/router";
import { useToasts } from "react-toast-notifications";

const DashboardTrendingElements = () => {
  const { addToast } = useToasts();
  const [isLoading, setIsLoading] = useState(true);
  const [trending, setTrending] = useState(null);
  const [error, setError] = useState(null);
  const datas = trending;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8000/api/blog/hotels");
      setTrending(result.data);
      setIsLoading(false);
    };

    fetchData();
    function getCookie(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    }

    if (!getCookie("token")) {
      addToast("Please Login to Continue", { appearance: "error" });
      return router.push("/login");
    }
  }, []);

  if (isLoading) {
    return <div className="login-back-loading">Loading...</div>;
  }
  return (
    <main>
      {/* <div className="w-full my-5">
        <div className="font-bold text-2xl text-primary mx-auto">
          <p
            className="w-full border-b-4 py-2 px-4 border-pmry mx-auto my-5 uppercase"
            style={{ width: "fit-content" }}
          >
            upcomming
          </p>
          <h1 className="p-2 font-extrabold text-5xl text-center mb-5">
            Feature Tours
          </h1>
        </div>
        <div className="grid grid-flow-row grid-cols-5 order-5 gap-2 w-4/5 mx-auto">
          {datas.map((data) => (
            <div key={data.id}> 
              <div className="">
                <Link href="/hotel/[slug]" as={`/hotel/${data.slug}`} className="hover:cursor-pointer">
                  {/* <a href=""> */}
      {/* <div>
                  <img
                    className="object-cover border bg-gray-600 rounded-3xl"
                    style={{ height: "350px", maxWidth: "250px" }}
                    src={data.image}
                    alt=""
                  />
                </div>
                {/* </a> */}
      {/* </Link>

              </div>
            </div>
          ))}
        </div>
      </div> */}

      <div className="flex w-11/12 mx-auto md:flex-col sm:flex-col xsm:flex-col lg:w-10/12 xl:mx-auto lg:flex-row sm:w-8/12 xsm:w-4/5">
        {datas.map((data) => (
          <div class="max-w-xs mx-2 overflow-hidden rounded-lg shadow-2xl sm:my-5 xsm:my-5 md:my-5 lg:my-2 dark:bg-gray-800" key={data.id}>
          <div class="px-4 py-2">
              <h1 class="text-3xl text-primary font-bold text-gray-800 uppercase dark:text-white">{data.name}</h1>
              <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">{data.description}</p>
          </div>
  
          <img class="object-cover w-full h-48 mt-2" src={data.image} alt={data.name}/>
  
          <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
              <h1 class="text-lg font-bold text-white">${data.price}</h1>
              <button class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Add to cart</button>
          </div>
      </div>
        ))}
      </div>
    </main>
  );
};

const DashboardTrending = () => {
  return (
    <div>
      <DashboardTrendingElements />
    </div>
  );
};

export default DashboardTrending;
