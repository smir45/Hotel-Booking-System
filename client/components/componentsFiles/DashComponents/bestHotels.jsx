import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { FiMapPin, FiStar } from "react-icons/fi";

const BestHotelsElements = () => {
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
  }, []);

  if (isLoading) {
    return <div className="login-back-loading">Loading...</div>;
  }

  return (
    <main>
      

      
      <section className="container p-6 mx-auto bg-white dark:bg-gray-800">
        <h2
          className="text-xl font-medium text-gray-800 capitalize dark:text-white md:text-2xl pb-5 border-pmry border-b-4"
          style={{ width: "fit-content" }}
        >
          Best Hotels
        </h2>
        <div className="flex justify-evenly">
        {datas.slice(0,3).map((data) => (
          
        <div className=" w-96 rounded-2xl my-5 shadow-lg"  key={data.id}>
          {/* {console.log(data)} */}
          <div>
            <img
              className="rounded-tl-2xl rounded-tr-2xl"
              src={data.image}
              alt="img"
            />
          </div>
          <div className="p-5 capitalize">
            <div className="flex">
              <p className="my-1 mr-1" style={{ color: "grey" }}>
                <FiMapPin />
              </p>
              <p style={{ color: "grey" }}>{data.city},&nbsp; {data.country}</p>
            </div>
            <div className="flex justify-between">
              <a href="#" className="text-primary font-bold text-2xl">
                {data.name}
              </a>
              <a
                href="#"
                className="text-arimary p-2 rounded-full"
                style={{ border: "1px solid rgba(0, 0, 0, .2)" }}
              >
                <FaRegHeart />
              </a>
            </div>
            <div className="flex">
              <span className="flex my-1 mr-2">
                <FiStar style={{ color: "gold" }} key={data.stars} />
              </span>
              <p>{data.reviews}</p>
            </div>
            <div>
              <p>number of days for offer</p>
              <p>from, <strong>${data.price}</strong></p>
            </div>
          </div>
        </div>
        
        ))}
        </div>
      </section>
      
    </main>
  );
};

const BestHotels = () => {
  return (
    <div>
      <BestHotelsElements />
    </div>
  );
};

export default BestHotels;
