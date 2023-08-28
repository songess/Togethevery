import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MYAPIKEY = 'AIzaSyCmoLq9yCPnjG4Z2NEduVZxDVaP7kKBLrg';//신용카드 인증필요

const containerStyle = {
  width: '800px',
  height: '400px'
};

const center = {
  lat: 37.7749,
  lng: -122.4194
};

const markers = [
  { lat: 37.7749, lng: -122.4194 }
  // You can add more markers here
];

function MapComponent() {
  return (
    <LoadScript googleMapsApiKey={MYAPIKEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {markers.map((marker, index) => (
          <Marker key={index} position={marker} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}

export default MapComponent;
