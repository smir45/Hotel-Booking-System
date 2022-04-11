import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import Loading from "../../components/componentsFiles/Loading";
import NavHeaderDashboard from "../../components/componentsFiles/header";
import { FaMapMarkerAlt, FaStar, FaParking } from "react-icons/fa";
import Carousel from "react-material-ui-carousel";

const searchDatas = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hotels, setHotels] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8000/api/hotels");
      setHotels(result.data);
      setIsLoading(false);
      setData(result.data);
    };

    fetchData();
  }, []);

  // filter data according to the search
  const filterData = (e) => {
    const filter = e.target.value;
    let filteredData = data.filter((item) => {
      return item.title.toLowerCase().includes(filter.toLowerCase());
    });
    setHotels(filteredData);
  };
  return (
    <>
      <div
        className="border w-full "
        style={{ background: "#f5f5f5f5", padding: "5px", minHeight: "100vh" }}
      >
        {isLoading ? (
          <div className="flex justify-center items-center h-screen">
            <Loading />
          </div>
        ) : (
          <div>
            <div>
              <div className="flex justify-center items-center">
                <input
                  className="p-3 my-2 w-2/5 border focus:shadow-lg outline-none hover:shadow-lg duration-100 rounded-lg"
                  type="search"
                  name="search"
                  onChange={filterData}
                  id="search"
                  placeholder="Enter hotel to search.."
                />
              </div>
            </div>
            {hotels.map((hotel, index) => (
              <div key={hotel.id}>
                <div>
                  <Link href={"/hotels/" + hotel.slug}>
                    <div
                      className="rounded-lg hover:cursor-pointer shadow-md hover:shadow-lg duration-1000 py-5 my-5 mx-auto flex w-4/5"
                      style={{ background: "#ffffff" }}
                    >
                      <div className="h-52 w-96 mx-3">
                        <Carousel
                          animation={"slide"}
                          duration={500}
                          indicators={false}
                        >
                          {hotel.images.map((img) => {
                            return (
                              <img
                                src={img.name}
                                className=" mx-auto mt-2 bg-pmry"
                              />
                            );
                          })}
                        </Carousel>
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
                              {[
                                hotel.Addresses.map((address, index) => (
                                  <p key={index}>
                                    {address.city}
                                    {", "}
                                    {address.country}
                                  </p>
                                )),
                              ]}
                            </span>
                          </div>
                          <div className="flex">
                            <div className="my-1">
                              <p className="text-gray-500 font-bold text-lg">
                                {hotel.hotel_reviews.review || "No reviews"}
                              </p>
                              <p className="text-sm">
                                {hotel.hotel_reviews.stars || "0"} reviews
                              </p>
                            </div>
                            <div className="bg-pmry p-2 text-white rounded-br-lg rounded-t-lg mx-2 my-1">
                              <p className="text-gray-500 font-bold text-lg">
                                {/* {hotel.review_score} */}
                              </p>
                            </div>
                          </div>
                        </div>
                        {/*{console.log(hotel)}*/}
                        <span
                          className="flex mx-3"
                          style={{ color: "goldenrod" }}
                        >
                          {[...Array(hotel.hotel_reviews.stars)].map((e, i) => (
                            <span key={i}>
                              <FaStar /> <br />
                            </span>
                          ))}
                        </span>
                        <div>
                          <p
                            className="border flex py-1 px-2 mx-3 font-bold bg-gray-300"
                            style={{ width: "fit-content" }}
                          >
                            <span className="mt-1 text-lg mx-1">
                              <FaParking />
                            </span>
                            {hotel.parking || "Parking not available"}
                          </p>
                          <p className="text-gray-500 mx-5 font-bold text-2xl text-primary float-right">
                            {hotel.Currencies.map((currency, index) => (
                              <span key={index}>
                                <p>{currency.name}</p>
                              </span>
                            ))}
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
