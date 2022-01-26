import React, { useState, useEffect } from "react";
import router from "next/router";
import axios from "axios";

const searchDatas = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [places, setPlaces] = useState([]);
  // const datas = search;

  const url = 'https://booking-com.p.rapidapi.com/v1/hotels/search'
  var options = {
    params: {
      units: 'metric',
      room_number: '1',
      adults_number: '2',
      checkout_date: '2022-02-24',
      checkin_date: '2022-02-20',
      dest_type: 'city',
      dest_id: '-553173',
      filter_by_currency: 'USD',
      order_by: 'popularity',
      locale: 'en-gb',
      // include_adjacency: 'true',
      // children_number: '2',
      // categories_filter_ids: 'class::2,class::4,free_cancellation::1',
      // page_number: '0',
      // children_ages: '5,0'
    },
    headers: {
      'x-rapidapi-host': 'booking-com.p.rapidapi.com',
      'x-rapidapi-key': '4ef40a5d6dmshbad9841ad2932b3p162d32jsn9ae87a92d911'
    }
  };

  const placeData = async () => {
    try{
      // const { data: { suggestions } } = await axios.get(URL, options);
      // return suggestions
      const { data: {result} } = await axios.get(url, options);
      // console.log(result);
      return result
    }
    catch(err){
      console.log(err);
    }
    
  };

  useEffect(() => {
    placeData().then((result) => {
      const res = result
      setPlaces(res);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) {
    return <div className="login-back-loading">Loading...</div>;
  }
  // console.log(places);


  return (
    <div style={{background: "#f5f5f5f5"}}>
      <div>
        {places.map((place, index) => (
          <div>
            {console.log(place)}
            <div>
            <div className=" flex m-5 rounded-2xl shadow-lg mx-auto" style={{background: "#ffffff", width: "50vw"}}>
            <img className="rounded-tl-2xl rounded-bl-2xl h-48 w-64" src={place.max_1440_photo_url} alt="img" />
            <div className="rounded-tr-2xl rounded-br-2xl px-5">
            <h1 className="text-primary font-extrabold text-2xl">{place.hotel_name}</h1>
            <p><span className="font-bold">City:</span> {place.city}</p>
            <p><span className="font-bold">Country:</span> {place.country_trans}</p>
            <p><span className="font-bold">Rating:</span> {"" + place.review_score}</p>
            <p><span className="font-bold">Type:</span> {place.accommodation_type_name}</p>
            <p><span className="font-bold">Price:</span> {place.price_breakdown.currency + " " + place.price_breakdown.gross_price}</p>
            <p><span className="font-bold">Zip:</span> {place.zip}</p>
            </div>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default searchDatas;
