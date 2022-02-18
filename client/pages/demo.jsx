import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
// import Loading from "../../components/componentsFiles/Loading";
import { useRouter } from "next/router";
import { FaMapMarkerAlt, FaSmokingBan,FaWheelchair } from "react-icons/fa";

const demo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [places, setPlaces] = useState("");
  const [datas, setDatas] = useState([]);
  const router = useRouter();
  const uniquekey = router.query.uniqueKey;

  const url = `http://localhost:8000/api/hotels/04b3fc0d8a9f8dfbd733e97e8b212120`;
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setPlaces(result.data);
      const facilityData = result.data.facilities
        .split(",")
        .map((item, index) => (datas = item));
      setDatas(facilityData);
      setIsLoading(false);
    };

    console.log(datas);
    fetchData();
  }, []);
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
        <div className="w-full">
          <div className="flex w-10/12 mx-auto">
            <div
              className="mx-1 rounded-2xl"
              style={{ minHeight: "540px", maxHeight: "545px" }}
            >
              {console.log(places)}
              <img
                className="w-full rounded-2xl"
                src={places.images[0]}
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
                src={places.images[1]}
                alt=""
                style={{ minHeight: "300px", maxHeight: "305px" }}
              />
              <img
                className="w-full m-2 rounded-2xl"
                src={places.images[2]}
                alt=""
                style={{ minHeight: "300px", maxHeight: "305px" }}
              />
            </div>
            <div className="px-2">
              <img
                className="w-full m-2 rounded-2xl"
                src={places.images[3]}
                alt=""
                style={{ minHeight: "300px", maxHeight: "305px" }}
              />
              <img
                className="w-full m-2 rounded-2xl"
                src={places.images[4]}
                alt=""
                style={{ minHeight: "300px", maxHeight: "305px" }}
              />
            </div>
          </div>
        </div>
        <div className="w-10/12 mx-auto">
          <div className="flex m-2">
            <h1 className="text-3xl mx-2 text-primary font-extrabold">
              {places.title}
            </h1>
            <p className="bg-pmry ml-2 p-2 text-white rounded-lg">
              {places.review_score}
            </p>
            <div className="mx-2">
              <p className="">
                <strong>{places.review_title}</strong>
              </p>
              <p className="">{places.review_count} reviews</p>
            </div>
          </div>
          <div className="flex mx-3">
            <div
              className="text-md p-2 bg-pmry rounded-full text-white border"
              style={{ width: "fit-content" }}
            >
              <FaMapMarkerAlt />
            </div>
            <p className="mt-1 mx-2 ">{places.full_address}</p>
          </div>
        </div>
        <div className="flex border-t border-pmry mt-5 w-10/12 mx-auto">
          <div className="p-2 mt-5 text-left w-7/12">
            <p className="text-lg" style={{ lineHeight: "30px " }}>
              <strong className=" my-2">Description: </strong>
              <br />
              {places.description}
            </p>
            <div className="text-lg" style={{ lineHeight: "30px " }}>
              <strong className=" my-2 list-inside">
                Most Populer Facilities:{" "}
              </strong>
              <div className="grid grid-cols-3 gap-4">
              <div className="flex border p-2">
              <span className="mt-1 text-2xl text-primary"><FaSmokingBan/></span> &nbsp;<p className="font-bold"> {datas[0]}</p>
              </div>
              <div className="flex border p-2">
              <span className="mt-1 text-2xl text-primary"><FaWheelchair/></span> &nbsp;<p className="font-bold"> {datas[1]}</p>
              </div>
              <div className="flex border p-2">
              <span className="mt-1 text-2xl text-primary"><FaSmokingBan/></span> &nbsp;<p className="font-bold"> {datas[2]}</p>
              </div>
              <div className="flex border p-2">
              <span className="mt-1 text-2xl text-primary"><FaSmokingBan/></span> &nbsp;<p className="font-bold"> {datas[3]}</p>
              </div>
              <div className="flex border p-2">
              <span className="mt-1 text-2xl text-primary"><FaSmokingBan/></span> &nbsp;<p className="font-bold"> {datas[4]}</p>
              </div>
              <div className="flex border p-2">
              <span className="mt-1 text-2xl text-primary"><FaSmokingBan/></span> &nbsp;<p className="font-bold"> {datas[7]}</p>
              </div>

              </div>
              <br />
               
            </div>
          </div>
          <div
            className=" p-2 mt-5 mx-5 w-5/12 bg-blue-100"
            style={{ maxHeight: "35vh" }}
          >
            <div className=" m-5">
              <p className="text-primary p-2 font-bold text-2xl">
                Property Highlights
              </p>
              <p className="p-2 text-lg font-bold">
                {" "}
                Perfect for {places.search_night} night stay!
              </p>
              <div className="flex p-2">
                <div className="p-2 text-xl mt-1">
                  <FaMapMarkerAlt />
                </div>
                <p className="p-2">
                  <strong>Top Location: </strong>
                  {places.full_address}
                </p>
              </div>
            </div>
            <div className="flex justify-center align-middle mt-5">
              <a
                className="border bg-pmry text-center align-middle py-2 text-xl px-52 text-white"
                href="/booking"
              >
                Reserve
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default demo;
