import React, { useState, useEffect } from "react";
import axios from "axios";
import router from "next/router";

const NewBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const postBlog = async (e) => {
    const data = new FormData();
    data.append("title", title);
    data.append("description", description);
    data.append("image", image);
    const url = "http://localhost:8000/api/blogs/postblog";
    axios.post(url, data)
      .then((response) => {
        console.log(response);
        console.log(formData)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <>
      <header>
        <head>
          <title>Accmmod | Write a Blog</title>
        </head>
      </header>
      <div>
        <h1>Write a Blog</h1>
        <img alt="" />
        <div>
          <form onSubmit={(e) => postBlog(e)}>
            <input
              type="text"
              name="title"
              className="border border-pmry"
              placeholder="title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              id="description"
              type="text"
              rows="7"
              className="border border-pmry"
              name="description"
              placeholder="description"
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              className="bg-pmry"
              type="file"
              name="image"
              id="image"
              alt=""
              onChange={(e) => handleChange(e)}
            />
            <button type="submit">post blog</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewBlog;
