import React, { useState, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import DestinationSuggestion from "../../components/componentsFiles/DashComponents/suggestions/destinationSuggesting";
import {
  FaCheck,
  FaInfoCircle,
  FaMapMarkerAlt,
  FaUserFriends,
  FaRegCalendarAlt,
} from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import GoogleApiWrapper from "../../components/componentsFiles/DashComponents/maps/descmap";

export const getStaticPaths = async ({ query }) => {
  const res = await fetch(`http://localhost:8000/api/destinations/`);
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
  const res = await fetch("http://localhost:8000/api/destinations/" + slug);
  const data = await res.json();
  

  return {
    props: {
      item: data.data,
    },
  };
};

const slug = ({ item }) => {
  return (
    <div>
      <head>
        <title>{item.map((itm) => itm.title)}</title>
      </head>
      {item.map((i) => {
        return (
          <div key={i.id}>
            {localStorage.setItem("city", JSON.stringify(i.city))}
            {localStorage.setItem("destination-slug", i.slug)}
            {localStorage.setItem("destination-thumbnail", i.image)}
            <div>
              <div className="flex justify-center w-4/5 mx-auto my-5 ">
                <div className="w-2/5 border mx-5 " style={{ height: "500px" }}>
                  <div className="">
                    <div className="my-2 px-2">
                      <h1 className="text-4xl font-bold text-primary">
                        {i.name}
                      </h1>
                      {i.hotel_reviews.slice(0, 1).map((review, index) => {
                        return (
                          <div className="flex px-2 mx-auto" key={review.id}>
                            {console.log(review)}
                            <p className="my-1 text-lg">
                              {((review.stars * 100) / 5 / 100) * 5}{" "}
                              <span className="text-sm text-primary">/ 5</span>
                            </p>
                            <p className="my-2 mx-2 text-blue-600">Reviews</p>

                            {[...Array(review.stars)].map((e, i) => (
                              <span
                                className="my-2"
                                style={{ color: "goldenrod" }}
                                key={i}
                              >
                                &#9733;
                              </span>
                            ))}
                          </div>
                        );
                      })}
                    </div>
                    <div>
                      <div className=" flex">
                        <span className="my-1 text-primary text-lg mx-2">
                          {" "}
                          <FaCheck />{" "}
                        </span>
                        <p className="font-bold text-primary">
                          Availability: <span className="font-light">Yes</span>
                        </p>
                      </div>
                      <div className=" flex">
                        <span className="my-1 text-primary text-lg mx-2">
                          {" "}
                          <FaInfoCircle />{" "}
                        </span>
                        <p className="font-bold text-primary">
                          Recommanded time:{" "}
                          <span className="font-light">2-3 hrs</span>
                        </p>
                      </div>
                      <div className=" flex">
                        <span className="my-1 text-primary text-lg mx-2">
                          {" "}
                          <FaMapMarkerAlt />{" "}
                        </span>
                        <p className="font-bold text-primary flex">
                          Address: &nbsp;
                          <span className="font-light">
                            {i.Addresses.map((address) => {
                              return (
                                <p className="font-light" key={address.id}>
                                  {address.city} {address.country}
                                </p>
                              );
                            })}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div
                      className="border mt-2 relative z-10"
                      style={{ height: "200px" }}
                    >
                      <GoogleApiWrapper lon={i.Addresses.map(a => (a.longitude))} lat={i.Addresses.map(a => (a.latitude))} />
                     
                    </div>

                    <div className="bg-blue-100 my-2 p-2">
                      <div className="flex">
                        <span className="my-1 text-primary text-lg mx-2">
                          {" "}
                          <FaUserFriends />{" "}
                        </span>
                        <p className="font-bold text-primary flex">
                          What visitors Say: &nbsp;
                        </p>
                      </div>
                      <p
                        className="capitalize w-11/12 mx-auto"
                        style={{ color: "#808080" }}
                      >
                        <span className="font-light">
                          {i.hotel_reviews.slice(0, 1).map((rev) => {
                            return (
                              <p className="font-light" key={rev.id}>
                                {rev.Comment}
                              </p>
                            );
                          })}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" w-3/5">
                  <Carousel
                    animation={"slide"}
                    duration={500}
                    indicators={false}
                    navButtonsAlwaysVisible={true}
                  >
                    {i.images.map((img) => {
                      return (
                        <img
                          className="w-full bg-pmry contain"
                          style={{
                            height: "500px",
                          }}
                          src={img.name}
                          alt={img.name}
                        />
                      );
                    })}
                  </Carousel>
                </div>
              </div>
              <div className="relative " style={{
                borderTop: "1px solid rgba(0,0,0,0)",
              }}>
                <h1 className="capitalize w-9/12 my-5 pt-2 mx-auto text-3xl text-primary font-bold">
                  Explore {i.city}
                </h1>
                <DestinationSuggestion />
              </div>
              <div className="w-4/5 my-5 bg-blue-100 mx-auto mt-5 rounded-lg p-2">
                <div>
                  <div className="flex justify-between">
                    <div className="w-4/5">
                      <h1 className="p-2 text-2xl font-bold text-primary">
                        Reviews
                      </h1>
                      <div className="flex w-4/5 ">
                        <span
                          className="my-2 text-2xl"
                          style={{ color: "#707070" }}
                        >
                          <FiInfo />
                        </span>
                        <p className="p-2" style={{ color: "#707070" }}>
                          {" "}
                          Some reviews may have been translated by Google
                          Translate
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <a
                        href="/destinations/writereview"
                        className="bg-pmry text-white font-bold py-2 px-4 rounded-lg"
                      >
                        Write a Review
                      </a>
                    </div>
                  </div>

                  <div className="p-2 my-2" style={{ background: "#ffffff" }}>
                    {i.hotel_reviews.map((review) => {
                      return (
                        <div
                          className=" p-2 mx-auto border my-5 rounded-lg "
                          key={review.id}
                        >
                          <div>
                            <div className="flex justify-between w-11/12 mx-auto">
                              <div className="flex">
                                <p className="my-2 text-primary font-bold text-2xl">
                                  {((review.stars * 100) / 5 / 100) * 5}{" "}
                                  <span className="text-sm">/ 5</span>
                                </p>
                                <p className="my-2 mx-2 text-primary font-bold text-2xl">
                                  {review.review}
                                </p>
                              </div>
                              <div className="flex">
                                <div className="flex justify-center items-center">
                                  <FaRegCalendarAlt className="text-primary" />
                                  <p className="mx-2 ">
                                    {new Date(review.updatedAt).toDateString()}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <p
                              className="capitalize w-11/12 mx-auto"
                              style={{ color: "#808080" }}
                            >
                              {review.Comment}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default slug;
