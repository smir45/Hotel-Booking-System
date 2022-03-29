import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const mapStyles = {
  width: "30.5vw",
  height: "200px",
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
          lng: `${this.props.lon}`,
          lat: `${this.props.lat}`,
        }}
      >
        <Marker
          title={"Current location"}
          name={"Current location"}
          position={{
            lng: `${this.props.lon}`,
            lat: `${this.props.lat}`,
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
