import React, { useState, useEffect } from "react";
import router from "next/router";
import axios from "axios";

const carRentals = () => {
    const [isLoading, setIsLoading] = useState(true);
  const [cars, setCars] = useState([]);

  const url = 'https://booking-com.p.rapidapi.com/v1/car-rental/search'
  const options = {
    params: {
        currency: 'USD',
        drop_off_longitude: '37.620230899',
        from_country: 'ca',
        sort_by: 'recommended',
        pick_up_datetime: '2022-07-23 16:00:00',
        drop_off_datetime: '2022-07-24 16:00:00',
        pick_up_latitude: '55.7518540820001',
        pick_up_longitude: '37.620230899',
        drop_off_latitude: '55.7518540820001',
        locale: 'en-gb'
      },
      headers: {
        'x-rapidapi-host': 'booking-com.p.rapidapi.com',
        'x-rapidapi-key': '4ef40a5d6dmshbad9841ad2932b3p162d32jsn9ae87a92d911'
      }
    }
  


  const placeData = async () => {
    try{
      const { data: {search_results} } = await axios.get(url, options);
    // const option = await axios.get(url, options);
      console.log(search_results);


      return search_results
    }
    catch(err){
      console.log(err);
    }
    
  };

  useEffect(() => {
    placeData().then((result) => {
      const res = result
      setCars(res);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return <div className="login-back-loading">Loading...</div>;
  }
    return(
        <div style={{background: "#f5f5f5f5"}}>
            <h1 className="text-primary text-3xl text-center font-extrabold">Car rentals</h1>
            <div>
                {cars.map((car) => (
                    <div>
                        <div className="flex m-5 rounded-2xl shadow-lg mx-auto" style={{background: "#ffffff", width: "50vw"}}>
                        <img className="rounded-tl-2xl rounded-bl-2xl h-48 w-64" src={car.vehicle_info.image_thumbnail_url} alt="img" />
                        <div className="rounded-tr-2xl rounded-br-2xl py-2 px-5">
                        <h1><span className="font-bold">Name:</span> {car.vehicle_info.v_name}</h1>
                        <h2><span className="font-bold">Transmission:</span> {car.vehicle_info.transmission}</h2>
                        <p><span className="font-bold">Seats:</span> {car.vehicle_info.seats}</p>
                        <p><span className="font-bold">Doors:</span>  {car.vehicle_info.doors}</p>
                        <p><span className="font-bold">Free Cancellation:</span>  {car.vehicle_info.free_cancellation}</p>
                        <p><span className="font-bold">Price:</span>  {car.pricing_info.currency + " " + car.pricing_info.price}</p>
                        <p><span className="font-bold">Deposit:</span>  {car.pricing_info.deposit}</p>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default carRentals;