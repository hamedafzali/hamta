import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
//import "leaflet/dist/leaflet.css";
class Map extends Component {
  state = {};
  render() {
    const position = [35.735346, 51.430152];
    return (
      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={false}
        className="map"
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">Amitis Hamta</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            شرکت بازرگانی آمیتیس همتا <br /> نماینده فروش انواع پایانه فروش(POS)
            و پین پد(PinPad)
          </Popup>
        </Marker>
      </MapContainer>
    );
  }
}

export default Map;
