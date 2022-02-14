import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Loading from "../../components/componentsFiles/Loading";

const hotelId = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [places, setPlaces] = useState([]);
  const router = useRouter();
  const slugData = router.query.id;

  const url = `http://localhost:8000/api/hotels/${slugData}`;
  axios
    .request(url)
    .then(function (response) {
      setPlaces(response.data);
      setIsLoading(false);
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <Loading />
        </div>
      ) : (
        <div>
          <h1>This is dynamic route for hotel with this slug {slugData}</h1>
          <div className="flex w-10/12 mx-auto">
            <div className="mx-1 rounded-2xl" style={{minHeight: "540px"}}>
            <img className="w-full h-full rounded-2xl" src="https://images.pexels.com/photos/6129967/pexels-photo-6129967.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
            </div>
            <div className="">
            <img className="w-full m-2 rounded-2xl" src="https://images.pexels.com/photos/7163619/pexels-photo-7163619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
            <img className="w-full m-2 rounded-2xl" src="https://images.pexels.com/photos/6527036/pexels-photo-6527036.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
            </div>
            <div className="px-2">
            <img className="w-full m-2 rounded-2xl" src="https://images.pexels.com/photos/6969831/pexels-photo-6969831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
            <img className="w-full m-2 rounded-2xl" src="https://images.pexels.com/photos/6438752/pexels-photo-6438752.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
          </div>
          </div>
          <div>
            <h1>This is Demo Hotel</h1>
            
          </div>

        </div>
      )}
    </div>
  );
};

export default hotelId;
