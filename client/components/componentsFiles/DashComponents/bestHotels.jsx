import React, { useState, useEffect } from "react";
import Link from "next/link";


const BestHotelsElements = () => {
    return(
        <main>
            <section className="container p-6 mx-auto bg-white dark:bg-gray-800">
        <h2 className="text-xl font-medium text-gray-800 capitalize dark:text-white md:text-2xl pb-5 border-pmry border-b-4" style={{width:"fit-content"}}>Trending Destinations</h2>

        <div className="flex items-center justify-center">
            <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {/* {secdata.map((data) => ( */}
                {/* //   <Link href={`/${encodeURIComponent(data.slug)}`}> */}
                <div className="w-full max-w-xs text-center hover:opacity-30 hover:cursor-pointer duration-1000">
                    <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="img" alt="avatar"/>

                    <div className="mt-2">
                        <h3 className="text-lg font-bold text-gray-700 dark:text-gray-200 capitalize">Name</h3>
                        <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">city</span>
                    </div>
                </div>
                {/* </Link> */}
                {/* ))} */}
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

