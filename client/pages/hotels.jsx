import React, { useState, useEffect } from "react";
import router from "next/router";
import axios from "axios";

const searchDatas = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [search, setBlog] = useState(null);
  const datas = search;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8000/api/blog/hotels");
      setBlog(result.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  if (isLoading) {
    return <div className="login-back-loading">Loading...</div>;
  }
  console.log(datas);
  return (
    <div>
      <div>
        {datas.map((data) => (
          <div key={data.id}>
            <h1>{data.name}</h1>
            <h1>{data.description}</h1>
            <p>{data.country}</p>
            <p>{data.city}</p>
            <p>hearts: {data.hearts}</p>
            <p>Price: {data.price}</p>
            <p>Stars: {data.stars}</p>
            <p>Reviews: {data.reviews}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default searchDatas;
