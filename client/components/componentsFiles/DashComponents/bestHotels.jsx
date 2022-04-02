import React, {useState, useEffect} from "react";
import axios from "axios";
import Link from "next/link";
import {FaRegHeart} from "react-icons/fa";
import {FiMapPin, FiStar} from "react-icons/fi";

const BestHotelsElements = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [trending, setTrending] = useState(null);
    const [trendData, setTrendData] = useState(null);
    const [hotels, setHotels] = useState(null);
    const datas = trending;
    const secdata = trendData;

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios("http://localhost:8000/api/hotels");
            const data = result.data.reverse();
            setTrending(data);

            const uniqueData = data.filter((item, index) => {
                return data.findIndex((i) => i.title === item.title) === index;
            });
            setTrendData(uniqueData);
            setIsLoading(false);
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <div className="login-back-loading">Loading...</div>;
    }

    return (
        <main>
            <section className="container p-6 mx-auto bg-white dark:bg-gray-800">
                <h2
                    className="text-xl font-medium text-gray-800 capitalize dark:text-white md:text-2xl pb-5 border-pmry border-b-4"
                    style={{width: "fit-content"}}
                >
                    Best Hotels
                </h2>


                <div className="flex justify-evenly">
                    {trendData.slice(0, 3).map((data, index) => (
                        <Link href={`/hotels/${encodeURIComponent(data.slug)}`}>
                            <div className=" w-96 rounded-2xl my-5 shadow-lg" key={data.id}>
                                <div>
                                    <img
                                        className="rounded-tl-2xl h-56 w-full rounded-tr-2xl"
                                        src={data.thumbnail}
                                        alt="img"
                                    />
                                </div>
                                {/*{console.log(data)}*/}
                                {console.log(data, "data")}
                                <div className="p-5 capitalize">
                                    <div className="flex">
                                        <p className="my-1 mr-1" style={{color: "grey"}}>
                                            <FiMapPin/>
                                        </p>
                                        <p style={{color: "grey"}}>
                                            {data.Addresses.map((address, index) => (
                                                <span key={index}>
                                                    <p>{address.city}{","}&nbsp;{address.country}</p>
                                                </span>
                                            ))}
                                        </p>
                                    </div>
                                    <div className="flex justify-between">
                                        <a href="#" className="text-primary font-bold text-2xl">
                                            {data.title}
                                        </a>
                                        <a
                                            href="#"
                                            className="text-arimary p-2 rounded-full"
                                            style={{border: "1px solid rgba(0, 0, 0, .2)"}}
                                        >
                                            <FaRegHeart/>
                                        </a>
                                    </div>
                                    <div className="flex">
                    <span className="flex my-1 mr-2">
                      <FiStar style={{color: "gold"}}/>
                    </span>
                                        <p>{data.review_score}&nbsp;/ 10</p>
                                    </div>
                                    <div>
                                        <p>Distance: {data.distance}</p>
                                        <p>
                                            from, <strong>${data.price}</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
};

const BestHotels = () => {
    return (
        <div>
            <BestHotelsElements/>
        </div>
    );
};

export default BestHotels;
