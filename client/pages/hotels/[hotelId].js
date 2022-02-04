import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Loading from "../../components/componentsFiles/Loading";

const hotelId = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [places, setPlaces] = useState([]);
  const router = useRouter();
  const slugData = router.query.hotelId;

  const url = `http://localhost:8000/api/blog/hotels/impala/get/${slugData}`;
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
          <div
            className=" "
            style={{ background: "#ffffff", width: "50vw" }}
          >
            <h1 className="text-primary font-bold text-2xl">{places.name}</h1>
            <div>
                <p>{places.description.short}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default hotelId;
