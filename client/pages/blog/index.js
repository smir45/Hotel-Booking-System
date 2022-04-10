import React, {useState, useEffect} from "react";
import Link from "next/link";
import router from "next/router";
import axios from "axios";
import {FaEdit} from "react-icons/fa";

const BlogData = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios("http://localhost:8000/api/blogs/getblogs");
            setBlogs(result.data.data);
            setLoading(false);
        };

        fetchData();
    }, []);
    return (
        <>
            
            <div className="bg-[#EEF6FC]">
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto max-w-7x1">
                        <div className="flex flex-wrap w-full mb-4 p-4">
                            <div className="w-full mb-6 lg:mb-0">
                                <h1 className="sm:text-4xl text-center underline text-5xl font-bold title-font mb-2 text-gray-900">
                                    Accommod Blogs
                                </h1>
                                <div className="h-1 w-20 bg-primary rounded"/>
                            </div>
                            <div className="w-4/5 mt-5 mx-auto">
                                <a className="float-right font-xl py-2 flex px-5 rounded-lg bg-pmry text-white"
                                   href="/blog/postblog"><span className="my-1 mx-2"><FaEdit/></span>Write a Blog</a>
                            </div>
                        </div>


                        <div className="flex flex-wrap m-4">
                            {blogs.map((blog) => {
                                return (
                                    <Link href={`/blog/${blog.slug}`}>
                                        <div className="xl:w-1/3 md:w-1/2  p-4">
                                            <div className="bg-white p-6 border bg-[#ffff] shadow-xl rounded-xl">
                                                <img
                                                    className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded-lg w-full object-cover object-center mb-5"
                                                    src={blog.image}
                                                    alt="Image Size 720x400"
                                                />
                                                <h2 className="text-xl text-gray-900 font-bold text-center title-font mb-4">
                                                    {blog.title}
                                                </h2>
                                                <p className="leading-relaxed text-base">
                                                    {blog.desctiption}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default BlogData;
