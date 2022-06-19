import React from 'react'
import styles from "./Contact.module.scss"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { LatLngExpression } from 'leaflet'
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
// Re-uses images from ~leaflet package
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; 



const MapDynamic = () => {

  const position: LatLngExpression = [-7.6729369, 112.6120327];

  return (
  <>
    <div className={styles['info-map']} style={{animation: "bounceIn 1s"}}>
      Achmad Rizal Yogaswara, 
      <br />
      Mojokerto, Jawa Timur <br />
      <br />
      Indonesia.
      <br />
      <span>ach.rizal.yogaswara@gmail.com</span>
    </div>
    <div className={styles['map-wrap']}>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer 
         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} >
          <Popup>Rizalyoga lives here, <br /> come over for a cup of coffee :</Popup>
        </Marker>
      </MapContainer>
    </div>
  </>
  )
}

export default MapDynamic