import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import Loading from "../../components/componentsFiles/Loading";
import NavHeaderDashboard from "../../components/componentsFiles/header";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";

const searchDatas = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hotels, setHotels] = useState(null);
  const [prices, setPrices] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8000/api/hotels/");
      const singledata = result.data.data.filter((item, index) => {
        return (
          result.data.data.findIndex((i) => i.title === item.title) === index
        );
      });

      const prices = result.data.roomPrice.map((item) => {
        return item[1];
      });
      const hotels = JSON.parse(localStorage.getItem("hotels"));
      const pricesss = JSON.parse(localStorage.getItem("prices"));
      setHotels(singledata || hotels);
      setPrices(prices || pricesss);
      setIsLoading(false);
    };

    fetchData();
  }, []);
  localStorage.setItem("hotels", JSON.stringify(hotels));
  localStorage.setItem("prices", JSON.stringify(prices));

  return (
    <>
      <div
        className="border w-full"
        style={{ background: "#f5f5f5f5", padding: "5px" }}
      >
        {isLoading ? (
          <div className="flex justify-center items-center h-screen">
            <Loading />
          </div>
        ) : (
          <div>
            {hotels.map((hotel, index) => (
              <div key={hotel.uniqueKey}>
                <div>
                  <Link href={`/hotels/${encodeURIComponent(hotel.uniqueKey)}`}>
                    <div
                      className="rounded-lg hover:cursor-pointer shadow-md hover:shadow-lg duration-1000 py-5 my-5 mx-auto flex w-4/5"
                      style={{ background: "#ffffff" }}
                    >
                      <div className="h-52 w-96 mx-3">
                        <img
                          className="rounded-lg h-full w-full "
                          src={hotel.images}
                          alt=""
                        />
                      </div>
                      <div className="w-full rounded-lg mx-3">
                        <div className="flex justify-between p-2">
                          <div>
                            <h3 className="text-primary text-2xl font-bold">
                              {hotel.title}
                            </h3>
                            <span className="flex">
                              <span className="mt-1 text-lg mr-1 text-primary">
                                <FaMapMarkerAlt />
                              </span>
                              <p>{hotel.full_address}</p>
                            </span>
                          </div>
                          <div className="flex">
                            <div className="my-1">
                              <p className="text-gray-500 font-bold text-lg">
                                {hotel.review_title}
                              </p>
                              <p className="text-sm">
                                {hotel.review_count} reviews
                              </p>
                            </div>
                            <div className="bg-pmry p-2 text-white rounded-br-lg rounded-t-lg mx-2 my-1">
                              <p className="text-gray-500 font-bold text-lg">
                                {hotel.review_score}
                              </p>
                            </div>
                          </div>
                        </div>
                        <span
                          className="flex mx-3"
                          style={{ color: "goldenrod" }}
                        >
                          {[...Array(hotel.star)].map((e, i) => (
                            <span key={i}>
                              <FaStar /> <br />
                            </span>
                          ))}
                        </span>
                        <div>
                          <p
                            className="border py-1 px-2 mx-3 font-bold bg-gray-300"
                            style={{ width: "fit-content" }}
                          >
                            {hotel.parking || "Parking not available"}
                          </p>
                          <p className="text-gray-500 mx-5 font-bold text-2xl text-primary float-right">
                            {hotel.currency}: {"$" + prices[index]}
                          </p>
                        </div>
                        <a href="/"></a>
                      </div>
                      <p></p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default searchDatas;
