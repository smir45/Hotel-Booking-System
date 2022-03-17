import React, {useState, useEffect} from 'react';
import {useRouter} from "next/router";
import axios from 'axios';


const slug = () => {
    const [attraction, setAttraction] = useState([]);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const router = useRouter();
    const destination = router.query.slug;

    useEffect(() => {

        const fetchData = async () => {
            const result = await fetch(`http://localhost:8000/api/destinations/${destination}`);
            const resultData = await result.json();

            setAttraction(resultData.data);

        };

        fetchData();
    }, [])
    console.log(attraction);
    return (
        <div>
            {
                attraction.map((item, index) => {
                    return (
                        <div key={index}>
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                        </div>
                    )
                })
            }
        </div>
    );
};
export default slug;