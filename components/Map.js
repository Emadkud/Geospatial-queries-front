import { useContext, useEffect } from 'react'
import { MapContext } from '../contexts/Map'
import 'leaflet/dist/leaflet.css'
import { Icon } from 'leaflet'
import {MapContainer,TileLayer,Marker} from 'react-leaflet'


const markerIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.2/dist/images/marker-icon-2x.png',
  iconSize: [32, 50]
})

const Map = () => {
    const {toilettes, location, zoom} = useContext(MapContext)



  if (!location) {
    return <p>Veuillez autoriser la position</p>
  }


  return (
    <>

      {location ? ( 

      <MapContainer
        center={[position.lat, position.lng]}
        zoom={'25'}
        scrollWheelZoom={true}
        height={'100vh'}
        >
      
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />

        {toilettes.map(toilette => { 
      return( 
        <Marker
          key={bar.id}
          icon={markerIcon}
          opacity={0.5}
        >
        
        </Marker>
         )
            })}
                </MapContainer>
            ) : (
                <></>
            )}
        </>
    )
}

export default Map