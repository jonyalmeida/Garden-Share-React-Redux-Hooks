import React, { useState, useCallback, useRef } from "react";
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";
import { formatRelative } from "date-fns";

import mapStyles from "./mapStyle";
import basketIcon from "../../../public/images/products-basket-marker-icon.png";

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
    const [selected, setSelected] = useState({});

    const center = {
        lat: productsLocationList[0].itemLat,
        lng: productsLocationList[0].itemLng,
    };

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        libraries,
    });

    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    if (loadError) return "Error loading maps.";
    if (!isLoaded) return "Loading maps..";

    console.log(selected);
    return (
        <>
            <div>
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    zoom={8}
                    center={center}
                    options={options}
                    onLoad={onMapLoad}>
                    {productsLocationList.map((item, idx) => (
                        <Marker
                            onClick={() => {
                                setSelected(item);
                            }}
                            key={idx}
                            position={{
                                lat: Number(item.itemLat),
                                lng: Number(item.itemLng),
                            }}
                            icon={{
                                url: "/images/products-basket-marker-icon.png",
                                scaledSize: new window.google.maps.Size(45, 45),
                                origin: new window.google.maps.Point(0, 0),
                                anchor: new window.google.maps.Point(15, 15),
                            }}
                        />
                    ))}

                    {selected.itemName ? (
                        <InfoWindow
                            position={{
                                lat: selected.itemLat,
                                lng: selected.itemLng,
                            }}>
                            <>
                                <h1>{selected.itemName}</h1>
                                <h3>{selected.itemQty}</h3>
                                <p>{selected.itemDescription}</p>
                            </>
                        </InfoWindow>
                    ) : null}
                </GoogleMap>
            </div>
        </>
    );
}
