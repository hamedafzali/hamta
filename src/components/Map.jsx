import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
//import "leaflet/dist/leaflet.css";
import logo from "../assets/images/_logo.png";
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
          attribution='&copy; <a href="https://github.com/hamedafzali" target="_blank"> <i className="fa fa-dev"/>Hamed Afzali</a> '
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup className="text-center">
            <div className="row">
              <div className="col-4">
                <img src={logo} width={80} alt="" />
              </div>
              <div className="col-8">
                شرکت بازرگانی آمیتیس همتا <br /> نماینده فروش انواع پایانه
                فروش(POS) و پین پد(PinPad)
              </div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    );
  }
}

export default Map;
