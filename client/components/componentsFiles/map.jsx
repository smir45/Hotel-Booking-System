import React, {Component} from 'react';
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';

const mapStyles = {
    width: '30vw',
    height: '300px',
    position: 'relative',
};

export class MapContainer extends Component {
    render() {
        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{
                    lat: 26.45282812195282,
                    lng: 87.27805615576436
                }}

            >
                <Marker
                    title={"Current location"}
                    name={"Current location"}
                    position={{
                        lat: 26.65632900033799,
                        lng: 87.3021194613583
                    }}
                />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    // apiKey: 'AIzaSyA4YKODPQEsXODTnV8v9LBPNf1yM9ICrHY'
    apiKey: 'AIzaSyD9XB9omWRPcQV8ss7HhMQtQMNgYtgDVGA'
})(MapContainer);