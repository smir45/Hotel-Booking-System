import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import Loading from "../../components/componentsFiles/Loading";

const searchDatas = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hotels, setHotels] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8000/api/hotels/");
      setHotels(result.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);
  return (
    <div style={{ background: "#f5f5f5f5" }}>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Loading/>
        </div>
      ) : (
        <div>
          {hotels.map((hotel, index) => (
          <div key={hotel.id}>
            <div>
            <Link href={`/hotels/${encodeURIComponent(hotel.id)}`}>
            <div className=" flex m-5 rounded-2xl shadow-lg mx-auto" style={{background: "#ffffff", width: "50vw"}}>
            <img className="rounded-tl-2xl rounded-bl-2xl h-48 w-64" src={console.log(hotel)} alt="img" />
            <div className="rounded-tr-2xl rounded-br-2xl px-5">
            {/* <h1 className="text-primary font-extrabold text-2xl">{hotel.title}</h1> */}
            <p><span className="font-bold">Address:</span> {hotel.description}</p>
            {/* <p><span className="font-bold">Rating:</span> {hotel.review_score}</p> */}
            </div>
            </div>
            </Link>
            </div>
            
          </div>
          
        ))}
        </div>
      )}
    </div>
  );
};

export default searchDatas;
