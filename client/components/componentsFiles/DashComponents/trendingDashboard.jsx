import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import router from "next/router";
import { useToasts } from "react-toast-notifications";

const DashboardTrendingElements = () => {
  const { addToast } = useToasts();
  const [isLoading, setIsLoading] = useState(true);
  const [trending, setTrending] = useState(null);
  const [trendData, setTrendData] = useState(null);
  const datas = trending;
  const secdata = trendData;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8000/api/blog/hotels");
      setTrending(result.data);
      setTrendData(result.data.slice(0, 4));
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
    <section className="container p-6 mx-auto bg-white dark:bg-gray-800">
        <h2 className="text-xl font-medium text-gray-800 capitalize dark:text-white md:text-2xl pb-5 border-pmry border-b-4" style={{width:"fit-content"}}>Trending Destinations</h2>

        <div className="flex items-center justify-center">
            <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {secdata.map((data) => (
                  <Link href={`/${encodeURIComponent(data.slug)}`}>
                <div className="w-full max-w-xs text-center hover:opacity-30 hover:cursor-pointer duration-1000" key={data.id}>
                    <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src={data.images} alt="avatar"/>

                    <div className="mt-2">
                        <h3 className="text-lg font-bold text-gray-700 dark:text-gray-200 capitalize">{data.title}</h3>
                        <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">{data.full_address}</span>
                    </div>
                </div>
                </Link>
                ))}
            </div>
        </div>
    </section>
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
