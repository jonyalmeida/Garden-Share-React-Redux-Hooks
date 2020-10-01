import React, { useState, useCallback, useRef } from 'react';
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from '@react-google-maps/api';
import { formatRelative } from 'date-fns';
import usePlacesAutoComplete /*, {
    // getGeocode,
    // getLatLng,
}*/ from 'use-places-autocomplete';
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    /* ComboboxList,*/
    ComboboxOption,
} from '@reach/combobox';
import '@reach/combobox/styles.css'

import mapStyles from './map-styles/mapStyles';

const libraries = ['places'];
const mapContainerStyle = {
    width: '100vw',
    height: '100vh',
}

const center = {
    lat: 33.5064051,
    lng: -117.683808,
}

const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
}

export default function MapListings() {

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        libraries,
    });
    console.log(process.env);
    const [markers, setMarkers] = useState([]);
    const [selected, setSelected] = useState(null);

    const onMapClick = useCallback(e => {
        setMarkers(current => [...current,
        {
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
            time: new Date(),
        },
        ]);
    }, []);

    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    if (loadError) return 'Error loading maps';
    if (!isLoaded) return 'Loading Maps';

    return (
        <div>
            <h1>
                Goods{''}
                <span role='img' aria-label='tent'>
                    🥕🐔🍉
                </span>

                <Search />

            </h1>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={8}
                center={center}
                options={options}
                onClick={onMapClick}
                onLoad={onMapLoad}
            >
                {markers.map(marker => <Marker
                    key={marker.time.toISOString()}
                    position={{ lat: marker.lat, lng: marker.lng }}
                    icon={{
                        url: '/images/fruit-basket.jpg',
                        scaledSize: new window.google.maps.Size(30, 30),
                        origin: new window.google.maps.Point(0, 0),
                        anchor: new window.google.maps.Point(15, 15),
                    }}
                    onClick={() => {
                        setSelected(marker);
                    }}
                />)}

                {selected ? (<InfoWindow
                    position={{ lat: selected.lat, lng: selected.lng }}
                    onCloseClick={() => {
                        setSelected(null);
                    }}
                >
                    <div>
                        <h2>Garden Share!</h2>
                        <p>Spotted {formatRelative(selected.time, new Date())}</p>
                    </div>
                </InfoWindow>) : null}
            </GoogleMap>
        </div >
    );
}

function Search() {
    const { ready, value, suggestions: { status, data }, setValue, /*clearSuggestions*/ } = usePlacesAutoComplete({
        requestOptions: {
            location: {
                lat: () => 43.653225,
                lng: () => -79.383186,
            },
            radius: 100 * 1000,
        },
    });

    return (
        <div className='search'>
            <Combobox onSelect={(address) => { console.log(address); }}>
                <ComboboxInput
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    disabled={!ready}
                    placeholder="Enter an address"
                />
                <ComboboxPopover>
                    {status === 'OK' && data.map(({ id, description }) => (
                        <ComboboxOption key={id} value={description} />
                    ))}
                </ComboboxPopover>
            </Combobox>
        </div>
    )
}