import React, { Component } from "react";
import { Marker, InfoWindow } from "react-google-maps";

class MarkersContainer extends Component {
  render() {
    return (
      !this.props.locationsNotFound && (
        <Marker
          position={this.props.location}
          name={this.props.name}
          onClick={this.props.onClick}
          address={this.props.address}
          selectedLocation={this.props.selectedLocation}
          animation={
            this.props.selectedLocation === this.props.checkId &&
            window.google.maps.Animation.BOUNCE
          }
        >
          {this.props.selectedLocation === this.props.checkId && (
            <InfoWindow>
              <div className="info-window">
                <span className="info-window-name"> {this.props.name}</span>
                <br />
                {this.props.address}
              </div>
            </InfoWindow>
          )}
        </Marker>
      )
    );
  }
}

export default MarkersContainer;
