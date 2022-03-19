import React, {useRef, useEffect, useState} from 'react';
import mapboxgl from '!mapbox-gl';

const mapbox = () => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic21pcjQ1IiwiYSI6ImNsMHkydGFydjF3Y2czZW9wZmp2Y3B4dHAifQ.PfPlmRvW8953yg0Hl3LhXA';
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(26.656156407090098);
    const [lat, setLat] = useState(87.30224820740027);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    });
    return (
        <div>
            <h1>Mapbox</h1>
            <div style={{height: "400px"}} ref={mapContainer} className="map-container"/>
        </div>
    )
}
export default mapbox;