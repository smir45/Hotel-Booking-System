import React, {useState, useEffect} from 'react'
import DestinationCard from '../components/cards/destinations';
import axios from 'axios';

const DestinationHome = () => {
  const [trending, setTrending] = useState(null);
  const [trendData, setTrendData] = useState(null);
  const datas = trending;
  const secdata = trendData;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8000/api/hotels");
      const data = result.data;
      setTrending(data);
    };

    fetchData();
    
  }, []);
  console.log(trendData, 'trendData');
  return (
    <div>
      <DestinationCard />
    </div>
  )
}

export default DestinationHome