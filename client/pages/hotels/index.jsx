import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import Loading from "../../components/componentsFiles/Loading";

const searchDatas = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hotels, setHotels] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8000/api/blog/hotels/");
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
          <div>
            <div>
            <Link href={`/hotels/${encodeURIComponent(hotel.slug)}`}>
            <div className=" flex m-5 rounded-2xl shadow-lg mx-auto" style={{background: "#ffffff", width: "50vw"}}>
            <img className="rounded-tl-2xl rounded-bl-2xl h-48 w-64" src={hotel.images[0] && hotel.images[0]} alt="img" />
            <div className="rounded-tr-2xl rounded-br-2xl px-5">
            <h1 className="text-primary font-extrabold text-2xl">{hotel.title}</h1>
            <p><span className="font-bold">Address:</span> {hotel.full_address}</p>
            <p><span className="font-bold">Rating:</span> {hotel.review_score}</p>
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
