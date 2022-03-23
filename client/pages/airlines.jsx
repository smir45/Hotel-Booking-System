import React, {useState, useEffect} from 'react';
import axios from "axios";

const Airlines = () => {

    const [airline, setAirline] = useState('')
    useEffect(async () => {
        const data = await axios('https://airlabs.co/api/v9/flights?api_key=f73c98d5-b836-40b3-8776-0a0239d6c903')
        // const airlines = data.json()
        console.log(data.data.response)
        // setAirline(airlines)
    }, [])
    return (
        <div>
            <h1>Airlines</h1>
            {/*{console.log(airline)}*/}
            {/*<ul>*/}
            {/*    {airline.map(a => (*/}
            {/*        <li key={a.id}>*/}
            {/*            <Link to={`/airlines/${a.id}`}>*/}
            {/*                {a.name}*/}
            {/*            </Link>*/}
            {/*        </li>*/}
            {/*    ))}*/}
            {/*</ul>*/}
        </div>
    )
    return (
        <div>
            <h1>Airlines</h1>
        </div>
    );
};
export default Airlines;