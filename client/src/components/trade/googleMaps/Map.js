import React, { useState, useCallback, useRef } from "react";
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import { formatRelative } from "date-fns";

import mapStyles from "./mapStyle";
import { useSelector } from "react-redux";

const libraries = ["places"];
const mapContainerStyle = {
    width: "100vw",
    height: "90vh",
};

const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
};

export default function Map({ productsLocationList = [], zoomLevel }) {
    const [selected, setSelected] = useState({});
    const gkey = useSelector((state) => state.gkey);
    const center = {
        lat: productsLocationList[0].itemLat,
        lng: productsLocationList[0].itemLng,
    };

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: gkey,
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
                <Search />
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
                            }}
                            onCloseClick={() => {
                                setSelected({});
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

function Search() {
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
            location: { lat: () => 33.3870493, lng: () => -117.5236667 },
            radius: 200 * 1000,
        },
    });

    return (
        <Combobox
            onSelect={(address) => {
                console.log(address);
            }}>
            <ComboboxInput
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
                disabled={!ready}
                placeholder='Enter an address'
            />
            <ComboboxPopover>
                {status === "OK" &&
                    data.map(({ id, description }) => (
                        <ComboboxOption key={id} value={description} />
                    ))}
            </ComboboxPopover>
        </Combobox>
    );
}
