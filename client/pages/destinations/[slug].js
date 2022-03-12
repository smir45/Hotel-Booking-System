import React,{useState,useEffect} from 'react';
import {useRouter} from "next/router";
import axios from 'axios';


const slug = () => {
    const [attraction, setAttraction] = useState([]);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const router = useRouter();
    const destination = router.query.slug;
    const  url = (`http://localhost:8000/api/destinations/${destination}`);

    useEffect( ()  => {

        const fetchData = async () => {
            const result = await axios(url);
            setData(result.data);
            setAttraction(result.data.data);
            setIsLoading(false);

        };

        fetchData();
    },[])
    console.log(attraction);
    return (
        <div>
            {
                attraction.map( (item, index) => {
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