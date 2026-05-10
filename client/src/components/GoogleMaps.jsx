import {
  GoogleMap,
  LoadScript,
  Marker,
} from "@react-google-maps/api";

import { useState } from "react";



const containerStyle = {
  width: "100%",
  height: "100vh",
};



const center = {
  lat: 12.9716,
  lng: 77.5946,
};



export default function GoogleMapComponent() {

  const [marker, setMarker] =
    useState(null);



  const handleMapClick = (event) => {

    const lat = event.latLng.lat();

    const lng = event.latLng.lng();



    setMarker({
      lat,
      lng,
    });



    console.log("Latitude:", lat);

    console.log("Longitude:", lng);
  };



  return (

    <LoadScript
      googleMapsApiKey={
        import.meta.env
          .VITE_GOOGLE_MAPS_API_KEY
      }
    >

      <GoogleMap

        mapContainerStyle={
          containerStyle
        }

        center={center}

        zoom={13}

        onClick={handleMapClick}
      >

        {marker && (

          <Marker position={marker} />
        )}

      </GoogleMap>

    </LoadScript>
  );
}