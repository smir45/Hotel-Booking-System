import React, { useState, useEffect } from "react";
import Link from "next/link";
import router from "next/router";
import axios from "axios";

const BlogData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [Blog, setBlog] = useState(null);
  const [dash, setDash] = useState(null);
  const datas = Blog;
  const daatas = dash;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8000/api/blog/post/get");
      setBlog(result.data);
      setIsLoading(false);
      setDash(result.data.slice(0, 3));
    };
    fetchData();
  }, []);
  if (isLoading) {
    return <div className="login-back-loading">Loading...</div>;
  }
  return (
    <div className="flex">
      {datas.map((data) => (
      <div className="mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20" key={data.id} style={{width: "fit-content"}}>
      <div className="w-96 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
          <img
            src={data.image}
            className="object-cover w-full h-64"
            alt=""
          />
          <div className="p-5 border border-t-0">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                aria-label="Category"
                title="traveling"
              >
                {data.catagory}
              </a>
              <span className="text-gray-600">— 28 Dec 2020</span>
            </p>
            <a
              href="/"
              aria-label="Category"
              title="Visit the East"
              className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              {data.title}
            </a>
            <p className="mb-2 text-gray-700">
              {data.description}
            </p>
            <a
              href="/blog"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
      ))}
    </div>
  );
};

export default BlogData;
