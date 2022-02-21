import { useState, useEffect, Component } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Loading from "../../components/componentsFiles/Loading";
import {
  FaMapMarkerAlt,
  FaParking,
  FaStar,
  FaBed,
  FaMapSigns,
  FaRegStar,
} from "react-icons/fa";
import GoogleApiWrapper from "../../components/componentsFiles/map";

const hotelId = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [places, setPlaces] = useState("");
  const [datas, setDatas] = useState([]);
  const router = useRouter();
  const uniquekey = router.query.uniqueKey;
  var resultdata;

  const url = `http://localhost:8000/api/hotels/${uniquekey}`;
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setPlaces(result.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const facilityData = resultdata.facilities

      .split(",")
      .map((item, index) => (datas = item));
    setDatas(facilityData);
    setIsLoading(false);
    if (places) {
      const data = JSON.stringify(places);
      localStorage.setItem("places", data);
    }
    return;
  }, [places]);
  const placesdata = JSON.parse(localStorage.getItem("places"));
  resultdata = placesdata;
  useEffect(() => {
    if (datas) {
      const data = JSON.stringify(datas);
      localStorage.setItem("datas", data);
    }
    return;
  }, [datas]);

  const mapStyles = {
    width: "100%",
    height: "100%",
  };

  const facility = JSON.parse(localStorage.getItem("datas"));
  if (isLoading) {
    return (
      <div>
        <h1>loading</h1>
      </div>
    );
  }

  return (
    <div>
      <div>
        <div className="w-full mt-5">
          <div className="flex w-10/12 mx-auto">
            <div
              className="mx-1 rounded-2xl"
              style={{ minHeight: "540px", maxHeight: "545px" }}
            >
              <img
                className="w-full rounded-2xl"
                src={placesdata.images[0]}
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
                src={placesdata.images[1]}
                alt=""
                style={{ minHeight: "300px", maxHeight: "305px" }}
              />
              <img
                className="w-full m-2 rounded-2xl"
                src={placesdata.images[2]}
                alt=""
                style={{ minHeight: "300px", maxHeight: "305px" }}
              />
            </div>
            <div className="px-2">
              <img
                className="w-full m-2 rounded-2xl"
                src={placesdata.images[3]}
                alt=""
                style={{ minHeight: "300px", maxHeight: "305px" }}
              />
              <img
                className="w-full m-2 rounded-2xl"
                src={placesdata.images[4]}
                alt=""
                style={{ minHeight: "300px", maxHeight: "305px" }}
              />
            </div>
          </div>
        </div>
        <div className="w-10/12 mx-auto">
          <div className="flex m-2">
            <h1 className="text-3xl mx-2 text-primary font-extrabold">
              {placesdata.title}
            </h1>
            <p className="bg-pmry ml-2 p-2 text-white rounded-lg">
              {placesdata.review_score}
            </p>
            <div className="mx-2">
              <p className="">
                <strong>{placesdata.review_title}</strong>
              </p>
              <p className="">{placesdata.review_count} reviews</p>
            </div>
          </div>
          <div className="flex mx-3">
            <div
              className="text-md p-2 bg-pmry rounded-full text-white border"
              style={{ width: "fit-content" }}
            >
              <FaMapMarkerAlt />
            </div>
            <p className="mt-1 mx-2 ">{placesdata.full_address}</p>
          </div>
        </div>
        <div className="flex border-t border-pmry mt-5 w-10/12 mx-auto">
          <div className="p-2 mt-5 text-left w-7/12">
            <p className="text-lg" style={{ lineHeight: "30px " }}>
              <strong className=" my-2">Description: </strong>
              <br />
              {placesdata.description}
            </p>
            <div className="text-lg" style={{ lineHeight: "30px " }}>
              <strong className=" my-2 list-inside">
                Most Populer Facilities:{" "}
              </strong>
              <div className="grid grid-cols-3 gap-4">
                <div className="flex bg-blue-100 rounded-lg py-1 px-2">
                  <p className=""> {facility[0]}</p>
                </div>
                <div className="flex bg-blue-100 rounded-lg py-1 px-2">
                  <p className=""> {facility[1]}</p>
                </div>
                <div className="flex bg-blue-100 rounded-lg py-1 px-2">
                  <p className=""> {facility[2]}</p>
                </div>
                <div className="flex bg-blue-100 rounded-lg py-1 px-2">
                  <p className=""> {facility[3]}</p>
                </div>
                <div className="flex bg-blue-100 rounded-lg py-1 px-2">
                  <p className=""> {facility[4]}</p>
                </div>
                <div className="flex bg-blue-100 rounded-lg py-1 px-2">
                  <p className=""> {facility[7]}</p>
                </div>
              </div>
              <br />
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
                  Perfect for {places?.search_night} night stay!
                </p>
                <div className="p-2">
                  <div className="">
                    <div className="flex">
                      <div className="p-2 text-xl mt-1">
                        <FaMapMarkerAlt />
                      </div>
                      <p className="p-2">
                        <strong>Hotel Location: </strong>
                        {placesdata.full_address}
                      </p>
                    </div>

                    <div className="flex">
                      <div className="p-2 text-xl mt-1">
                        <FaMapSigns />
                      </div>
                      <p className="p-2">
                        <strong>Distance: </strong>
                        {placesdata.distance}
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="p-2">
                      {console.log(placesdata)}
                      <strong>Top Features: </strong>
                    </p>
                    <p
                      className="flex py-1 font-bold px-2 mx-3"
                      style={{ width: "fit-content" }}
                    >
                      <span className="mt-1 text-lg mx-1">
                        <FaParking />
                      </span>
                      {placesdata.parking || "Parking not available"}
                    </p>

                    <p
                      className="flex py-1 font-bold px-2 mx-3"
                      style={{ width: "fit-content" }}
                    >
                      <span className="mt-1 text-lg mx-1">
                        <FaBed />
                      </span>
                      {placesdata.beds[0]}
                    </p>
                  </div>
                  <div>
                    <p className="p-2">
                      <strong>Ratings: </strong>
                    </p>
                    <div>
                      <div className="flex m-2">
                        <p className="bg-pmry ml-2 p-2 text-white rounded-tl-lg rounded-tr-lg rounded-bl-2xl">
                          {placesdata.review_score}
                        </p>
                        <div className="mx-2">
                          <p className="">
                            <strong>{placesdata.review_title}</strong>
                          </p>
                          <p className="">{placesdata.review_count} reviews</p>
                          <div>
                            <span
                              className="flex"
                              style={{ color: "goldenrod" }}
                            >
                              {[...Array(placesdata.star)].map((e, i) => (
                                <span className="ml-1" key={i}>
                                  {<FaStar />}
                                </span>
                              ))}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-10">
                    <button className="w-full  bg-pmry text-white py-2" href="/booking">Reserve</button>
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
