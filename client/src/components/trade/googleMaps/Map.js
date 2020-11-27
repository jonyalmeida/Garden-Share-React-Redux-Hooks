import React from "react";
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";
import { formatRelative } from "date-fns";

import mapStyles from "./mapStyle";

const libraries = ["places"];
const mapContainerStyle = {
    width: "100vw",
    height: "100vh",
};

const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
};

export default function Map({ productsLocationList = [], zoomLevel }) {
    console.log(productsLocationList[0][0]);
    const center = {
        lat: Number(productsLocationList[0][0]),
        lng: Number(productsLocationList[0][1]),
    };

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        libraries,
    });

    if (loadError) return "Error loading maps.";
    if (!isLoaded) return "Loading maps..";

    return (
        <>
            <div>
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    zoom={8}
                    center={center}
                    options={options}></GoogleMap>
            </div>
        </>
    );
}

//     return (
//         <div className='google-map'>
//             <GoogleMapReact
//                 disableDefaultUI={true}
//                 styles=
//                 bootstrapURLKeys={{
//                     key: `${key}`,
//                 }}
//                 defaultCenter={{
//                     lat: Number(productsLocationList[0][0]),
//                     lng: Number(productsLocationList[0][1]),
//                 }}
//                 defaultZoom={zoomLevel}>
//                 {productsLocationList.map((item, idx) => (
//                     <LocationPin
//                         key={idx}
//                         lat={Number(item[0])}
//                         lng={Number(item[1])}
//                         text='This will be a short description of the product. Maybe this amount of words of less.'
//                     />
//                 ))}
//             </GoogleMapReact>
//         </div>
//     );
// }

// function LocationPin({ text }) {
//     return (
//         <div className='pin'>
//             <Icon icon={locationIcon} className='pin-icon' />
//             <p className='pin-text'>{text}</p>
//         </div>
//     );
// }
