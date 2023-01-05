import { createContext, useEffect, useState } from "react";

const MapContext = createContext({})

const MapContextProvider = ({ children }) => {
    
   const [location, setLocation] = useState(null)
    const [toilette, setToilette] = useState([])

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            position => {
              setLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude
              })
              getToilette(position.coords.latitude, position.coords.longitude)
            },
            () => {
              setLocation({
                lat: 48.840905986519076,
                lng: 2.300280980817665,
              })
              getToilette(48.840905986519076,  2.300280980817665)
            }
          )
    }, [])

    const getToilette = async (lat, lng) => {

        const request = await fetch(`http://localhost:5000/toilette?latitude=${lat}&longitude=${lng}&radius=10000`);
        const response = await request.json();

        // console.log(response)

        setToilette(response)
        return response;
    };    

    // console.log(location)

    const value = {
        location, 
        toilette, 
        zoom:25, 
    }

    return <MapContext.Provider value={value}>{children}</MapContext.Provider>
}

export { MapContext, MapContextProvider }