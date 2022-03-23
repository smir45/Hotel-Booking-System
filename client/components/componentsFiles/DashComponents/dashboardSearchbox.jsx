import React, {useState, useEffect} from "react";
import router from "next/router";
import Link from "next/link";
import Axios from 'axios';

const Contents = {
    search: "Search",
    dest: "Destination",
    arraival: "Arrival",
    depature: "Depature",
    date: "Date",
    number: "Number of person",

};

const DashboardSearchBoxElements = () => {
    const url = "http://localhost:8000/api/destinations/search/:city";
    const [data, setData] = React.useState({
        city_name: "",
        checkin: "",
        checkout: "",
        person: "",
    });
    const [error, setError] = React.useState("");
    const searchHotels = (e) => {
        e.preventDefault();
        Axios.post(url, {
            city_name: data.city_name,
            checkin: data.checkin,
            checkout: data.checkout,
            person: data.person,
        })
            .then((res) => {
                // router.push({
                //     pathname: "/hotels",
                //     params: {
                //         city: data.city_name,
                //     },
                // });
            })
            .catch((err) => {
                setError(err.response.data.message);
                console.log(err);
            });
    };
    const handleChange = (e) => {
        const newdata = {...data};
        newdata[e.target.id] = e.target.value;
        setData(newdata);

    };
    return (
        <main className="flex sm:flex-col justify-center mx-auto items-center py-2 pb-10 bg-gray-100 ">
            <div className="">
                <form action=""
                      className="flex p-5 sm:flex-col sm:w-screen xsm:w-screen xsm:flex-col fold:flex-col fold:w-screen md:flex-col md:w-screen lg:flex-row lg:w-full lg:justify-center"
                      onSubmit={(e) => searchHotels(e)}>
                    <div className="mx-1">

                        <p className="font-bold text-primary p-2">City</p>
                        <input
                            onChange={(e) => handleChange(e)}
                            className="p-5 rounded shadow-lg  bg-gray-50 md:w-full sm:w-full xsm:w-full fold:w-full"
                            type="city_name"
                            name="city_name"
                            id="city_name"
                            placeholder="Biratnagar"
                        />
                    </div>
                    <div className="mx-1">
                        <p className="font-bold text-primary p-2">{Contents.arraival}</p>
                        <input
                            onChange={(e) => handleChange(e)}
                            className="p-5  rounded shadow-lg bg-gray-50 md:w-full sm:w-full xsm:w-full fold:w-full"
                            type="date"
                            name="checkin"
                            id="checkin"
                        />
                    </div>
                    <div className="mx-1">
                        <p className="font-bold text-primary p-2">{Contents.depature}</p>
                        <input
                            onChange={(e) => handleChange(e)}
                            className="p-5 rounded shadow-lg bg-gray-50 md:w-full sm:w-full xsm:w-full fold:w-full"
                            type="date"
                            name="checkout"
                            id="checkout"
                        />
                    </div>
                    <div className="mx-1">
                        <p className="font-bold text-primary p-2">{Contents.number}</p>
                        <input
                            onChange={(e) => handleChange(e)}
                            className="p-5  rounded shadow-lg bg-gray-50 md:w-full sm:w-full xsm:w-full fold:w-full"
                            type="number"
                            name="person"
                            id="person"
                            placeholder="1"
                        />
                    </div>
                    <div>
                        <p className="p-2 select-none text-white">search</p>

                        <button
                            onSubmit={(e) => searchHotels(e)}
                            type="submit"
                            className="mx-1  rounded shadow-lg py-5 px-16 bg-pmry text-white font-bold md:w-full sm:w-full xsm:w-full fold:w-full hover:bg-blue-700 hover:transition-all hover:duration-900"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
};

const DashboardSearchBox = () => {
    return (
        <div>
            <DashboardSearchBoxElements/>
        </div>
    );
};

export default DashboardSearchBox;
