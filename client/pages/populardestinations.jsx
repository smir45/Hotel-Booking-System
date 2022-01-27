import React, { useState, useEffect } from "react";
import router from "next/router";
import axios from "axios";

const popularDestinations = () => {
    const [isLoading, setIsLoading] = useState(true);
  const [destinations, setDestinations] = useState([]);

  const url = 'https://booking-com.p.rapidapi.com/v1/hotels/locations'
  const options = {
    params: {name: 'rome', locale: 'en-gb'},
    headers: {
      'x-rapidapi-host': 'booking-com.p.rapidapi.com',
      'x-rapidapi-key': '4ef40a5d6dmshbad9841ad2932b3p162d32jsn9ae87a92d911'
    }
  }
  


  const placeData = async () => {
    try{
      const { data } = await axios.get(url, options);
    // const option = await axios.get(url, options);
      console.log(data);
      return data
    }
    catch(err){
      console.log(err);
    }
    
  };

  useEffect(() => {
    placeData().then((result) => {
      const res = result
      setDestinations(res);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return <div className="login-back-loading">Loading...</div>;
  }
    return(
        <div style={{background: "#f5f5f5f5"}}>
            <h1 className="text-primary text-3xl text-center font-extrabold">Popular Destinations</h1>
            <div>
                {destinations.map((destination) => (
                    <div>
                        <div className="flex m-5 rounded-2xl shadow-lg mx-auto" style={{background: "#ffffff", width: "50vw"}}>
                        <img className="rounded-tl-2xl rounded-bl-2xl h-48 w-64" src={destination.image_url} alt="img" />
                        <div className="rounded-tr-2xl rounded-br-2xl py-2 px-5">
                        <h1><span className="font-bold">Name:</span> {destination.name}</h1>
                        <h2><span className="font-bold">Country:</span> {destination.country}</h2>
                        <p><span className="font-bold">City:</span> {destination.city_name}</p>
                        <p><span className="font-bold">Region:</span>  {destination.region}</p>
                        <p><span className="font-bold">Timezone:</span>  {destination.timezone}</p>
                        <p><span className="font-bold">Number of Hotels:</span>  {destination.hotels}</p>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default popularDestinations;