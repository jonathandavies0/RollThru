//same thing to do from GoogleMaps.jsx but this file is in js and outside of Components
//API with our current location: https://ipapi.co/json
export async function fetchLocation() {
  //write code to get the longitude and latitude of a user

  let lat = navigator.coords.longitude
  let long = navigator.coords.longitude
  return {
    lat: lat,
    long: long
  }
}