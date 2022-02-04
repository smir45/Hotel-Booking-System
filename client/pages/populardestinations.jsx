import React, { useState, useEffect } from "react";
import router from "next/router";
import axios from "axios";
import Link from "next/link";

const popularDestinations = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [places, setPlaces] = useState([]);
  const imgurl = "https://doaa.gov.np/wp-content/uploads/2017/11/dummy-36.jpg";
  const options = {
    url: "https://travelnext.works/api/hotel-api-v6/moreResults?sessionId=MTU2OTMwNzMzODgyNQ==&nextToken=wbhf&maxResult=20",
  };

  axios
    .request(options)
    .then(function (response) {
      setPlaces(response);
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
    console.log(places);
  return (
    <div style={{ background: "#f5f5f5f5" }}>
      <h1 className="text-primary text-3xl text-center font-extrabold">
        Popular Destinations
      </h1>
      {/* <div>
        {places.map((place, index) => (
          <div>
            <div className="">
              <Link href={`/populardestinations/hotel/${encodeURIComponent(place.hotelId)}`}>
              <div
                className=" flex m-5 rounded-2xl shadow-lg mx-auto hover:scale-105 border-2 hover:duration-1000 ease-in-out hover:cursor-pointer"
                style={{ background: "#ffffff", width: "50vw" }}
              >
                {console.log(places)}
                <div className="rounded-tr-2xl rounded-br-2xl px-5">
                  <p>
                    <span className="font-bold">City:</span>{" "}
                    {place.city_name}
                  </p>
                  <p>
                    <span className="font-bold">Country:</span>{" "}
                    {place.country_name}
                  </p>
                </div>
              </div>
              </Link>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default popularDestinations;
