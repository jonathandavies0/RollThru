import NavigationTwoToneIcon from "@mui/icons-material/NavigationTwoTone";
import GoogleMapReact from "google-map-react";
import React, { useEffect, useState } from "react";
import "./SimpleMap.css";
const AnyReactComponent = ({ lat, lng }) => (
  <div style={{ position: "absolute", transform: "translate(-50%, -50%)" }}>
    <NavigationTwoToneIcon
      style={{ color: "red", animation: "blink 1s infinite" }}
    />
  </div>
);

export default function SimpleMap() {
  const [loading, setLoading] = useState(true);

  const [center, setCenter] = useState({
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      const { latitude, longitude } = position.coords;
      setCenter({ lat: latitude, lng: longitude });
      setLoading(false);
    });
  };

  console.log("Lat: " + center.lat);
  console.log("Long: " + center.lng);

  const defaultProps = {
    zoom: 15,
  };

  if (loading) return <h1>loading</h1>;
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyCS0KMn8RqbCFWjZ02U0hkYNjMCjS8fkrc",
        }}
        center={center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={center.lat} lng={center.lng} />
      </GoogleMapReact>
    </div>
  );
}
