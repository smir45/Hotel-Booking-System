import React, { useState, useEffect } from "react";
import router from "next/router";
import axios from "axios";

const BlogData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [Blog, setBlog] = useState(null);
  const datas = Blog;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "http://localhost:8000/api/blog/post/get"
      );
      setBlog(result.data);
      setIsLoading(false);
    }
    fetchData();
  }, []);
  if (isLoading) {
    return <div className="login-back-loading">Loading...</div>;
  }
  console.log(datas)
  return (
    <div>
      <div>
        {datas.map((data) => (
          <div key={data.id}>
            <h1>{data.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogData;