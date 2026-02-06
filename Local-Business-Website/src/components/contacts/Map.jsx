import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "256px",
};

const center = {
  lat: -1.9536, // Example: Kigali latitude
  lng: 30.0606, // Kigali longitude
};

function Map() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCZzW8pCgGnqGoUSiL2s5GhUM9gMgz0QnI">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
