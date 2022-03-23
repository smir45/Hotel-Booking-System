import { useState, useEffect, Component } from "react";
import { useRouter } from "next/router";
import axios from "../../axios";
import Loading from "../../components/componentsFiles/Loading";
import {
  FaMapMarkerAlt,
  FaParking,
  FaStar,
  FaBed,
  FaMapSigns,
  FaRegStar,
  FaWifi,
  FaDog,
  FaSwimmer,
  FaUser,
  FaRegCalendarAlt,
  FaRegClock,
} from "react-icons/fa";
import GoogleApiWrapper from "../../components/componentsFiles/map";

export const getStaticPaths = async ({ query }) => {
  const res = await fetch(`http://localhost:8000/api/hotels/`);
  const data = await res.json();

  const paths = data.map((item) => {
    return {
      params: {
        slug: item.slug.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  const res = await fetch("http://localhost:8000/api/hotels/" + slug);
  const data = await res.json();

  return {
    props: {
      item: data,
    },
  };
};

const hotelId = ({ item }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
    setData({ longitude: item.longitude, latitude: item.latitude });
    const longitude = item.longitude;
    const latitude = item.latitude;

    localStorage.setItem("hotel_coordinates", JSON.stringify({ longitude, latitude }));
  }, []);
  const mapStyles = {
    width: "100%",
    height: "100%",
  };

  if (loading) {
    return (
      <div
        className="flex justify-center items-center font-bold animate-spin duration-1000 text-3xl"
        style={{ height: "100vh" }}
      >
        <div className="border border-4 border-pmry p-5"></div>
      </div>
    );
  }

  return (
    <div>
      <heead>
        <title>{item.title}</title>
      </heead>
      <div>
        <div className="w-full mt-5">
          {/* <div className="flex w-10/12 mx-auto">
            <div
              className="mx-1 rounded-2xl"
              style={{ minHeight: "540px", maxHeight: "545px" }}
            >
              <img
                className="w-full rounded-2xl"
                src={item.images[0]}
                alt=""
                style={{
                  minHeight: "610px",
                  minWidth: "600px",
                  maxWidth: "600px",
                  maxHeight: "615px",
                }}
              />
            </div>
            <div className="">
              <img
                className="w-full m-2 rounded-2xl"
                src={item.images[1]}
                alt=""
                style={{ minHeight: "300px", maxHeight: "305px" }}
              />
              <img
                className="w-full m-2 rounded-2xl"
                src={item.images[2]}
                alt=""
                style={{ minHeight: "300px", maxHeight: "305px" }}
              />
            </div>
            <div className="px-2">
              <img
                className="w-full m-2 rounded-2xl"
                src={item.images[3]}
                alt=""
                style={{ minHeight: "300px", maxHeight: "305px" }}
              />
              <img
                className="w-full m-2 rounded-2xl"
                src={item.images[4]}
                alt=""
                style={{ minHeight: "300px", maxHeight: "305px" }}
              />
            </div>
          </div> */}
        </div>
        <div className="w-10/12 mx-auto">
          <div className="flex m-2">
            <h1 className="text-3xl mx-2 text-primary font-extrabold">
              {item.title}
            </h1>
            <p className="bg-pmry ml-2 p-2 text-white rounded-lg">
              {item.review_score}
            </p>
            <div className="mx-2">
              <p className="">
                {item.hotel_reviews.map((review, index) => (
                  <p key={index}>
                    <strong>{review.review}</strong>
                  </p>
                ))}
                <p>Reviews</p>
              </p>
            </div>
          </div>
          <div className="flex mx-3">
            <div
              className="text-md p-2 bg-pmry rounded-full text-white border"
              style={{ width: "fit-content" }}
            >
              <FaMapMarkerAlt />
            </div>
            <p className="mt-1 mx-2 ">
              {[
                item.Addresses.map((address, index) => (
                  <p key={index}>
                    {address.city}
                    {", "}
                    {address.country}
                  </p>
                )),
              ]}
            </p>
          </div>
        </div>
        <div className="flex border-t border-pmry mt-5 w-10/12 mx-auto">
          <div className="p-2 mt-5 text-left w-7/12">
            <p className="text-lg" style={{ lineHeight: "30px " }}>
              <strong className=" my-2">Description: </strong>
              <br />
              {item.desc}
            </p>
            <div className="text-lg" style={{ lineHeight: "30px " }}>
              <strong className=" my-2 list-inside">
                Most Populer Facilities:{" "}
              </strong>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex rounded-lg py-1 px-2">
                  {item.facilities.map((facility, index) => (
                    <div key={index} className="grid gap-4 grid-flow-col">
                      <div className="grid grid-flow-col gap-4">
                        {facility &&
                          Object.entries(facility)
                            .filter(([key, value]) => value === true)
                            .map(([key]) => {
                              switch (key) {
                                case "wifi":
                                  return (
                                    <div className="bg-blue-100 px-4 py-1 flex justify-center items-center">
                                      {" "}
                                      <FaWifi className="text-primary" />{" "}
                                      <p className="mx-2 text-primary">
                                        {key && "Wifi"}
                                      </p>
                                    </div>
                                  );
                                case "parking":
                                  return (
                                    <div className="bg-blue-100 px-4 py-1 flex justify-center items-center">
                                      {" "}
                                      <FaParking className="text-primary" />{" "}
                                      <p className="mx-2 text-primary">
                                        {key && "Parking"}
                                      </p>
                                    </div>
                                  );
                                case "pets":
                                  return (
                                    <div className="bg-blue-100 px-4 py-1 flex justify-center items-center">
                                      {" "}
                                      <FaDog className="text-primary" />{" "}
                                      <p className="mx-2 text-primary">
                                        {key && "pets"}
                                      </p>
                                    </div>
                                  );
                                case "swimming_pool":
                                  return (
                                    <div className="bg-blue-100 px-4 py-1 flex justify-center items-center">
                                      {" "}
                                      <FaSwimmer className="text-primary" />{" "}
                                      <p className="mx-2 text-primary">
                                        {key && "Swimming Pool"}
                                      </p>
                                    </div>
                                  );
                                default:
                                  return null;
                              }
                            })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <br />
              <div className="border p-2 border rounded-lg">
                <div>
                  {item.hotel_reviews.map((review, index) => (
                    <div key={index}>
                      <div className="flex justify-between">
                        <div className="flex">
                          <div className="flex justify-center items-center">
                            <img
                              src={item.User.image}
                              alt="profile"
                              className="rounded-full h-12 m-1 w-12 border border-pmry p-1"
                            />
                            <p
                              className="mx-2 font-bold"
                              style={{ color: "#707070" }}
                            >
                              {item.User.name}
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="flex justify-center items-center">
                            <FaRegCalendarAlt className="text-primary" />
                            <p className="mx-2 ">
                              {new Date(review.createdAt).toDateString()}
                            </p>
                          </div>
                        </div>
                      </div>
                      <p
                        className="text-base ml-2 p-2"
                        style={{ color: "#808080" }}
                      >
                        {review.Comment}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div
              className=" p-2  mt-5 mx-5 w-5/12 bg-blue-100"
              style={{ width: "30vw" }}
            >
              <div className=" m-5">
                <p className="text-primary p-2 font-bold text-2xl">
                  Property Highlights
                </p>
                <p className="p-2 text-lg font-bold">
                  {" "}
                  Perfect for {item?.search_night} night stay!
                </p>
                <div className="p-2">
                  <div className="">
                    <div className="flex">
                      <div className="p-2 text-xl mt-1">
                        <FaMapMarkerAlt />
                      </div>
                      <p className="p-2">
                        <strong>Hotel Location: </strong>
                        {[
                          item.Addresses.map((address, index) => (
                            <p key={index}>
                              {address.city}
                              {", "}
                              {address.country}
                            </p>
                          )),
                        ]}
                      </p>
                    </div>

                    <div className="flex">
                      <div className="p-2 text-xl mt-1">
                        <FaMapSigns />
                      </div>
                      <p className="p-2">
                        <strong>Distance: </strong>
                        {item.distance}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="p-2">
                      <strong>Top Features: </strong>
                      {item.facilities.map((facility, index) => (
                        <p key={index}>
                          {facility &&
                            Object.entries(facility)
                              .filter(([key, value]) => value === true)
                              .map(([key]) => {
                                switch (key) {
                                  case "wifi":
                                    return (
                                      <div className="flex py-1 font-bold px-2 mx-3">
                                        {" "}
                                        <FaWifi className="mt-1 text-lg mx-1" />{" "}
                                        <p className="">
                                          {key && "Wifi Available"}
                                        </p>
                                      </div>
                                    );
                                  case "parking":
                                    return (
                                      <div className="flex py-1 font-bold px-2 mx-3">
                                        {" "}
                                        <FaParking className="mt-1 text-lg mx-1" />{" "}
                                        <p className="">
                                          {key && "Parking Available"}
                                        </p>
                                      </div>
                                    );
                                }
                              })}
                        </p>
                      ))}
                    </p>
                  </div>
                  <div>
                    <p className="p-2">
                      <strong>Ratings: </strong>
                    </p>
                    <div>
                      <div className="flex m-2">
                        <p className="bg-pmry ml-2 p-2 text-white rounded-tl-lg rounded-tr-lg rounded-bl-2xl">
                          {item.review_score}
                        </p>
                        <div className="mx-2">
                          <p className="">
                            {item.hotel_reviews.map((review, index) => (
                              <p key={index}>
                                <strong>{review.review}</strong>
                              </p>
                            ))}
                            <strong>{item.review_title}</strong>
                          </p>
                          <p className="">{item.review_count} reviews</p>
                          <div>
                            <span style={{ color: "goldenrod" }}>
                              {[
                                item.hotel_reviews.map((review, index) => (
                                  <p className="flex" key={index}>
                                    {[...Array(review.stars)].map((e, i) => (
                                      <span className="ml-1" key={i}>
                                        {<FaStar />}
                                      </span>
                                    ))}
                                  </p>
                                )),
                              ]}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10">
                    <button
                      className="w-full  bg-pmry text-white py-2"
                      href="/booking"
                    >
                      Reserve
                    </button>
                  </div>
                </div>
              </div>
              <br />
            </div>
            <div className="ml-5 relative" style={{ marginTop: "3vh" }}>
              <GoogleApiWrapper />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default hotelId;
