import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const SearchDatas = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [Blog, setBlog] = useState(null);
  const datas = Blog;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:8000/api/blog/post/");
        const data = await response.json();
        setBlog(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    }
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
            <div>
                <h1>{data.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchDatas;
