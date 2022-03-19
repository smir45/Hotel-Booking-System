import React, {useState, useEffect} from 'react';

const DestinationSuggestion = () => {
    const [suggestions, setSuggestions] = useState([]);
    const [filtered, setFiltered] = useState([]);

    // console.log(city, 'city');
    useEffect(() => {
        var city = localStorage.getItem('city');
        const cityName = city.replace(/"/g, '');
        const url = `http://localhost:8000/api/destinations/search/${cityName}`;

        const fetchSuggestions = async () => {
            const response = await fetch(url);
            const data = await response.json();
            const suggestDatas = data.data.slice(0, 4).reverse();
            setSuggestions(suggestDatas);
            console.log(data);
        }
        fetchSuggestions();
    }, []);
    const handleChange = (e) => {
        const value = e.target.value;
        const filtered = suggestions.filter(suggestion => suggestion.name.toLowerCase().includes(value.toLowerCase()));
        setFiltered(filtered);
    }
    return (
        <div>
            <input className="none" disabled type="text" onChange={handleChange}/>
            <ul className="w-full overflow-hidden">
                <div className="w-4/5 flex justify-center items-center mx-auto overflow-auto">
                    {suggestions.map(suggestion => (
                        <div key={suggestion.id}>
                            <div
                                className="flex justify-evenly mx-5">
                                <div
                                    className="h-52"
                                    style={{width: "300px"}}>
                                    <img className="w-full h-full rounded-lg"
                                         src={suggestion.image}
                                         alt=""/>
                                    <div
                                        className="p-1 text-white text-center -my-8 font-bold backdrop-blur-sm w-full rounded-b-lg"
                                        style={{background: "rgba(0, 0, 0, .4)"}}>
                                        <h3>{suggestion.name}</h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </ul>

        </div>
    )
}

export default DestinationSuggestion;