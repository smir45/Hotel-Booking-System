import React, {useState, useEffect} from "react";
import Link from "next/link";
import router from "next/router";
import axios from "axios";

const BlogData = () => {
    // const [isLoading, setIsLoading] = useState(true);
    // const [Blog, setBlog] = useState(null);
    // const [dash, setDash] = useState(null);
    // const datas = Blog;
    // const daatas = dash;
    //
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const result = await axios("http://localhost:8000/api/blog/post/get");
    //         setBlog(result.data);
    //         setIsLoading(false);
    //         setDash(result.data.slice(0, 3));
    //     };
    //     fetchData();
    // }, []);
    // if (isLoading) {
    //     return <div className="login-back-loading">Loading...</div>;
    // }
    return (
        <>
            {/* Section 1 */}
            <section className="bg-white">
                <div className="flex grid grid-cols-12 pb-10 sm:px-5 gap-x-8 gap-y-16">
                    <div className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
                        <a href="#_" className="block">
                            <img
                                className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56"
                                src="https://cdn.devdojo.com/images/may2021/fruit.jpg"
                            />
                        </a>
                        <div
                            className="bg-purple-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white inline-block">
                            <span>Lifestyle</span>
                        </div>
                        <h2 className="text-lg font-bold sm:text-xl md:text-2xl">
                            <a href="#_">Creating a Future Worth Living</a>
                        </h2>
                        <p className="text-sm text-gray-500">
                            Learn the attributes you need to gain in order to build a future and
                            create a life that you are truly happy with.
                        </p>
                        <p className="pt-2 text-xs font-medium">
                            <a href="#_" className="mr-1 underline">
                                Mary Jane
                            </a>{" "}
                            · <span className="mx-1">April 17, 2021</span> ·{" "}
                            <span className="mx-1 text-gray-600">3 min. read</span>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogData;
