import React, { useState, useEffect, Component } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FiCornerDownLeft } from "react-icons/fi";
import Link from "next/link";
export const getStaticPaths = async ({ query }) => {
  const res = await fetch(`http://localhost:8000/api/blogs/getblogs`);
  const data = await res.json();
  console.log(res);
  const paths = data.data.map((item) => {
    return {
      params: {
        slug: item.slug.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const slug = context.params.slug;
  const res = await fetch("http://localhost:8000/api/blogs/getblogs/" + slug);
  const data = await res.json();

  return {
    props: {
      item: data,
    },
  };
};

const BlogPost = ({ item }) => {
  return (
    <div className="mx-auto mt-5 w-11/12">
      <div className="flex justify-end w-4/5 mx-auto">
        <span className="my-1 font-bold text-xl">
          <FiCornerDownLeft />
        </span>{" "}
        &nbsp;
        <Link href={"/blog"}>
          <h1 className="underline cursor-pointer">Go Back</h1>
        </Link>
      </div>
      <img
        className=" mx-auto my-5 w-[70vw] h-[30vw]"
        src={item.data.image}
        alt="image"
      />
      <div>
        <h1 className="text-3xl my-2 font-bold">{item.data.title}</h1>
        <div className="flex">
          <p className="text-primary mx-1 my-1">
            <FaCalendarAlt />
          </p>
          <p className="text-[#909090]">
            {new Date(item.data.updatedAt).toDateString()}
          </p>
        </div>
        <p className="text-[#505050] text-justify text-md my-2">
          {item.data.description}
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
