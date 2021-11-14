import React, { useState, useEffect } from "react";
import axios from "axios";

const BlogData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [Blog, setBlog] = useState(null);
  const datas = Blog;

  useEffect(() => {
    async function fetchData() {
      // try {
      //   const response = await fetch("http://localhost:8000/api/blog/post/");
      //   const data = await response.json();
      //   setBlog(data);
      //   setIsLoading(false);
      // } catch (error) {
      //   setIsLoading(false);
      // }
      // fetch data using Axios

      const response = await axios.get("http://localhost:8000/api/blog/post/");
      setBlog(response.data);
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
            {console.log(data.title)}
            <h1>{data.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogData;