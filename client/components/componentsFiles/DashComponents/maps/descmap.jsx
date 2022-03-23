import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import mapData from "./mapData";

const mapStyles = {
  width: "31vw",
  height: "200px",
  position: "relative",
};

export class DescMapContainer extends React.Component {
  constructor(props) {
    super({ ...props });
  }
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        data={{
        //   lat: this.props.latitude,
        //   lng: this.props.longitude,
            
            lat: this.props.latitude,
            lng: this.props.longitude,
        }}
      >
        <Marker
          title={"Current location"}
          name={"Current location"}
          position={{
            // lat: this.props.latitude,
            // lng: this.props.longitude,
            lat: this.props.latitude,
            lng: this.props.longitude,
          }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  // apiKey: 'AIzaSyA4YKODPQEsXODTnV8v9LBPNf1yM9ICrHY'
  apiKey: "AIzaSyD9XB9omWRPcQV8ss7HhMQtQMNgYtgDVGA",
  
})(DescMapContainer);
