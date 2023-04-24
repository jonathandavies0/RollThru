import React from "react";
import { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  const [currLocation, setCurrLocation] = useState({});
    useEffect(()=>{ 
      getLocation();
    }, []);

    const getLocation = () =>{
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        const {latitude, longitude} = position.coords;
        setCurrLocation({latitude, longitude});
      });
    }

  console.log("Lat: " + currLocation.latitude)
  console.log("Long: " + currLocation.longitude)
  const defaultProps = {
    center: {
      lat: currLocation.latitude,
      lng: currLocation.longitude,
    },
    zoom: 15,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCS0KMn8RqbCFWjZ02U0hkYNjMCjS8fkrc" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={currLocation.latitude} lng={currLocation.longitude} text="My Marker" /> 
      </GoogleMapReact>
    </div>
  );
}