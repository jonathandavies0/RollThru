export async function fetchLocation() {
    //write code to get the longitude and latitude of a user

    let lat = navigator.coords.longitude
    let long = navigator.coords.longitude
return {
    lat: lat,
    long: long
}
}