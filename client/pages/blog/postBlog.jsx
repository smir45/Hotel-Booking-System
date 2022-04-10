import React, { useState, useEffect } from "react";
import Axios from "axios";
import router from "next/router";
const PostBlog = () => {
  const [file, setFile] = useState(null);
  const addostBlog = async (e) => {
    const formData = new FormData();
    formData.append("image", file);
    const url = "http://localhost:8000/api/blogs/postblog";
    Axios.post(url, formData)
      .then((response) => {
        console.log(response);
        router.push("/blog");
      })
      .catch((err) => {
        console.log(err);
      });
      
  };

  const handleChange = (e) => {
    setFile(e.target.files[0] || "img");
  };
  return (
    <>
      <header>
        <head>
          <title>Accmmod | Write a Blog</title>
        </head>
      </header>
      <div>
        <h1>Add image</h1>
        <div>
          <form onSubmit={(e) => addostBlog(e)}>
            <input
              className="bg-pmry"
              type="file"
              name="image"
              id="image"
              alt=""
              onChange={(e) => handleChange(e)}
            />
            <button type="submit">Upload Image</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PostBlog;
