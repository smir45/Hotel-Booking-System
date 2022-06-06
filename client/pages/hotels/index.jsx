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
                                className=" mx-auto max-h-[200px] mt-2 bg-pmry"
                              />
                            );
                          })}
                        </Carousel>
                      </div>
                      <div className="w-full rounded-lg mx-3">
                        <div className="">
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
                            <div>
                              <p className="text-gray-500 mx-5 mt-2 font-bold text-2xl text-primary">
                                <p>RS: 1500</p>
                              </p>
                            </div>
                          </div>
                        </div>
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
