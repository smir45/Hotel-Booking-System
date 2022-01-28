import React, { useState, useEffect } from "react";
import router from "next/router";
import axios from "axios";

const popularDestinations = () => {
  //   const [isLoading, setIsLoading] = useState(true);
  // const [destinations, setDestinations] = useState([]);
  // const [data, setData] = React.useState({
  //   search: "",
  // });
  // const handleChange = (e) => {
  //   const newdata = { ...data };
  //   newdata[e.target.id] = e.target.value;
  //   setData(newdata);
  // };
  // console.log(data.search);

  // const url = 'https://booking-com.p.rapidapi.com/v1/hotels/locations'
  // const options = {
  //   params: {name: "toronto", locale: 'en-gb'},
  //   headers: {
  //     'x-rapidapi-host': 'booking-com.p.rapidapi.com',
  //     'x-rapidapi-key': '4ef40a5d6dmshbad9841ad2932b3p162d32jsn9ae87a92d911'
  //   }
  // }
  const options = {
    method: 'GET',
    url: 'https://sandbox.impala.travel/v1/hotels',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': 'sandb_nYr7vxhUbwYhLwLyXhp8eA1KnJyUORgpTPV1GLei'
    }
  };

  
  axios.request(options)
  console.log(options)
  .then(function (response) {
    console.log(response.data);
  }).catch(function (error) {
    console.error(error);
  });

  // useEffect(() => {
  //   placeData().then((result) => {
  //     const res = result
  //     setDestinations(res);
  //     setIsLoading(false);
  //   });
  // }, []);

  
  
  // if (isLoading) {
  //   return <div style={{height: "90vh"}} className="flex justify-center text-center items-center"><p className="animate-pulse duration-100 ease-in-out font-extrabold text-primary text-9xl">Loading...</p></div>;
  // }
    return(
        <div style={{background: "#f5f5f5f5"}}>

            <h1 className="text-primary text-3xl text-center font-extrabold">Popular Destinations</h1>
            {/* <div className="flex justify-center p-5 ">
              <input onChange={(e) => handleChange(e)} style={{width: "50vw"}} className="p-5 text-2xl rounded-lg border-2 border-pmry" type="search" name="search" id="search" value={data.search} placeholder="Search.." />
            </div>
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
            </div> */}
        </div>
    )
}

export default popularDestinations;