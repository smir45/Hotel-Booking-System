import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { FiMapPin, FiStar } from "react-icons/fi";

const BestHotelsElements = () => {
    return(
        <main>
            <section className="container p-6 mx-auto bg-white dark:bg-gray-800">
        <h2 className="text-xl font-medium text-gray-800 capitalize dark:text-white md:text-2xl pb-5 border-pmry border-b-4" style={{width:"fit-content"}}>Best Hotels</h2>

        <div className=" w-96 rounded-2xl my-5 shadow-lg">
            <div>
                <img className="rounded-tl-2xl rounded-tr-2xl" src="https://images.unsplash.com/photo-1544865267-c9e6d003f2ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="img" />

            </div>
            <div className="p-5 capitalize">
                <div className="flex">
                <p className="my-1 mr-1" style={{color: "grey"}}><FiMapPin/></p>
                <p style={{color: "grey"}}>city, country</p>
                </div>
                <div className="flex justify-between">
                <a href="#" className="text-primary font-bold text-2xl">title of the place</a>
                <a href="#" className="text-arimary p-2 rounded-full" style={{border: "1px solid rgba(0, 0, 0, .2)"}}><FaRegHeart/></a>
                </div>
                <div className="flex">
                    <span className="flex my-1 mr-2">
                        <FiStar className="border text-yellow" />
                        <FiStar className="border text-yellow" />
                        <FiStar className="border text-yellow" />
                        <FiStar className="border text-yellow" />
                        <FiStar className="border text-yellow" />

                    </span>
                    <p>number of reviews</p>
                </div>
                <div>
                    <p>number of days for offer</p>
                    <p>from, price in bole</p>
                </div>

            </div>
        </div>
    </section>
        </main>
    )
}

const BestHotels = () => {
    return(
        <div>
            <BestHotelsElements />
        </div>
    )
}

export default BestHotels;

