import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "30vw",
  height: "300px",
  position: "relative",
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lng: 85.34868474871804,
          lat: 27.710505082142905,
        }}
      >
        <Marker
          title={"Current location"}
          name={"Current location"}
          position={{
            lng: 85.34868474871804,
            lat: 27.710505082142905,
          }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  // apiKey: 'AIzaSyA4YKODPQEsXODTnV8v9LBPNf1yM9ICrHY'
  apiKey: "AIzaSyD9XB9omWRPcQV8ss7HhMQtQMNgYtgDVGA",
})(MapContainer);
