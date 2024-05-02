/* eslint-disable @typescript-eslint/no-unused-vars */

import './App.css'
import { LoadScript } from '@react-google-maps/api'
import Map from './components/Map'
// import Maps from './components/Maps'

function App() {
  return (
    // <LoadScript googleMapsApiKey="AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg">
    <LoadScript
      googleMapsApiKey="AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg"
      libraries={["places"]}
      loadingElement={
        <div>Loading...</div>
      }
      scriptProps={{
        async: true,
        defer: true,
        onLoad: () => console.log('Google Maps API loaded successfully')
      }}
    >
      <Map />
    </LoadScript>
  );
}

export default App
