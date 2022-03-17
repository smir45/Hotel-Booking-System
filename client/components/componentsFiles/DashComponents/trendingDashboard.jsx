import React, {useState, useEffect} from "react";
import axios from "axios";
import Link from "next/link";
import router from "next/router";
import Loading from "../Loading";
import {useToasts} from "react-toast-notifications";
import {getCookie} from "../../componentDatas/userdetails/userdataCookies";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

const DashboardTrendingElements = () => {
    const {addToast} = useToasts();
    const [isLoading, setIsLoading] = useState(true);
    const [trending, setTrending] = useState(null);
    const [trendData, setTrendData] = useState(null);
    const datas = trending;
    const secdata = trendData;

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios("http://localhost:8000/api/destinations/");
            setTrending(result.data);
            setTrendData(result.data.slice(0, 4));
            setIsLoading(false);
        };

        fetchData();
        var auth = getCookie("token");
        // var auth2 = getCookie("loginData");
        const auth2 = getCookie("loginData");
        // if (!auth ? !auth2) {
        //     addToast("Please Login to Continue", {appearance: "error"});
        //     return router.push("/login");
        // }
    }, []);

    console.log(trendData)

    if (isLoading) {
        return (
            <div>
                <h2
                    className="text-xl mx-24 my-5 font-medium text-gray-800 capitalize dark:text-white md:text-2xl pb-5 border-pmry border-b-4"
                    style={{width: "fit-content"}}
                >
                    Trending Destinations
                </h2>
                <Typography className="flex justify-evenly">
                    <Skeleton variant="rectangular" width={250} height={190}/>
                    <Skeleton variant="rectangular" width={250} height={190}/>
                    <Skeleton variant="rectangular" width={250} height={190}/>
                    <Skeleton variant="rectangular" width={250} height={190}/>
                </Typography>
            </div>
        );
    }
    return (
        <main>
            <section className="container p-6 mx-auto bg-white dark:bg-gray-800">
                <h2
                    className="text-xl font-medium text-gray-800 capitalize dark:text-white md:text-2xl pb-5 border-pmry border-b-4"
                    style={{width: "fit-content"}}
                >
                    Trending Destinations
                </h2>

                <div className="flex items-center justify-center">

                    <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {secdata.map((data) => (
                            <Link href={`/hotels/${encodeURIComponent(data.title)}`}>
                                <div
                                    className="w-full max-w-xs text-center hover:opacity-30 hover:cursor-pointer duration-1000"
                                    key={data.id}
                                >
                                    <img
                                        className="object-cover object-center w-full h-48 mx-auto rounded-lg"
                                        src={data.images.map((image) => image.name)}
                                        alt="avatar"
                                    />

                                    <div className="mt-2">
                                        <h3 className="text-lg font-bold text-gray-700 dark:text-gray-200 capitalize">
                                            {data.name}
                                        </h3>
                                        {/* <span className="mt-1 font-medium text-gray-600 dark:text-gry-300">{data.description}</span> */}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                    {/* <Loading/> */}
                </div>
            </section>
            <div className="w-11/12">
                <Link href="/destinations">
                    <p className="underline cursor-pointer float-right">View More..</p>
                </Link>
            </div>
        </main>
    );
};

const DashboardTrending = () => {
    return (
        <div>
            <DashboardTrendingElements/>
        </div>
    );
};

export default DashboardTrending;
