import React ,{useState, useEffect} from 'react';
import axios from 'axios';
import Link from "next/link";

const Destinations = () => {
    const [destinations, setDestinations] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    try{
        useEffect(() => {
            const fetchData = async () => {
                const url = 'http://localhost:8000/api/destinations';
                const result = await axios(url);
                setDestinations(result.data ? result.data : []);
                setIsLoading(false);
            };
            fetchData();
        }, []);
    }catch(error){
        console.log(error);
    }
  return (
    <div>
      <h1 className="text-center font-bold text-2xl text-primary my-2">Destinations</h1>
      {isLoading ? (
        <div>
            <h1>Loading...</h1>
        </div>
      ) : (
          <div>
              <div className="container min-w-full">
                  <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-4/5 mx-auto">
                  {destinations.map(destination => (
                      <Link href={`/hotels/${encodeURIComponent(destination.slug)}`}>
                      <div key={destination.id}>
                          <div className="w-full max-w-xs text-center hover:opacity-30 hover:cursor-pointer duration-1000">
                              <div>
                                  <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src={destination.images} alt={destination.title} />
                                  <div className="p-1 text-white -my-8 absolute font-bold backdrop-blur-sm rounded-b-lg" style={{background: "rgba(255, 255, 255, .4)", width: "312px"}}>
                                      <h1>{destination.title}</h1>
                                  </div>

                              </div>
                          </div>
                      </div>
                      </Link>
                  ))}
                  </div>
              </div>
          </div>
      )}
    </div>
  );
};

export  default Destinations;