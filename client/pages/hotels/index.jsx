import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import Loading from "../../components/componentsFiles/Loading";


const searchDatas = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [places, setPlaces] = useState([]);
  
  const url = "http://localhost:8000/api/blog/hotels/impala/get"
  axios
  .request(url)
  .then(function(response){
    setPlaces(response.data.data)
    setIsLoading(false)
    return response
  })
  .catch(function(error) {
    console.log(error)
  })
  console.log(places)
  return (
    <div style={{background: "#f5f5f5f5"}}>
      {isLoading ?(
        <div className="flex justify-center items-center h-screen">
          <Loading/>
        </div>
      ):(
        <div>
        {places.map((place, index) => (
          <div>
            <div>
            <Link href={`/hotels/${encodeURIComponent(place.hotelId)}`}>
            <div className=" flex m-5 rounded-2xl shadow-lg mx-auto" style={{background: "#ffffff", width: "50vw"}}>
            <img className="rounded-tl-2xl rounded-bl-2xl h-48 w-64" src={place.images[0] && place.images[0]} alt="img" />
            <div className="rounded-tr-2xl rounded-br-2xl px-5">
            <h1 className="text-primary font-extrabold text-2xl">{place.name}</h1>
            <p><span className="font-bold">City:</span> {place.address.city}</p>
            <p><span className="font-bold">Country:</span> {place.address.conuntry}</p>
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
