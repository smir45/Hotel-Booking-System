import React, { useState, useEffect } from "react";
import router from "next/router";
import axios from "axios";
import Link from "next/link";

const popularDestinations = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [places, setPlaces] = useState([]);
  const imgurl = "https://doaa.gov.np/wp-content/uploads/2017/11/dummy-36.jpg";
  const options = {
    method: "GET",
    url: "https://sandbox.impala.travel/v1/hotels",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "sandb_nYr7vxhUbwYhLwLyXhp8eA1KnJyUORgpTPV1GLei",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      setPlaces(response.data.data.reverse());

      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
  return (
    <div style={{ background: "#f5f5f5f5" }}>
      <h1 className="text-primary text-3xl text-center font-extrabold">
        Popular Destinations
      </h1>
      <div>
        {places.map((place, index) => (
          <div>
            <div className="">
              <Link href={`/populardestinations/hotel/${encodeURIComponent(place.hotelId)}`}>
              <div
                className=" flex m-5 rounded-2xl shadow-lg mx-auto hover:scale-105 border-2 hover:duration-1000 ease-in-out hover:cursor-pointer"
                style={{ background: "#ffffff", width: "50vw" }}
              >
                <img className="rounded-tl-2xl rounded-bl-2xl h-48 w-64" src={(place.images[0] && (place.images[0].url))} alt="image not found" />

                {console.log(places)}
                <div className="rounded-tr-2xl rounded-br-2xl px-5">
                  <h1 className="text-primary font-extrabold text-2xl">
                    {(place.name)}
                  </h1>
                  <p>
                    <span className="font-bold">City:</span>{" "}
                    {place.address.city}
                  </p>
                  <p>
                    <span className="font-bold">Country:</span>{" "}
                    {place.address.countryName}
                  </p>
                  <p>
                    <span className="font-bold">Rating:</span> {}
                  </p>
                  <p>
                    <span className="font-bold">Currency:</span>{" "}
                    {place.currency}
                  </p>
                </div>
              </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default popularDestinations;
