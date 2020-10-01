import React from 'react';
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from '@react-google-maps/api';
import { formatRelative } from 'date-fns';

import mapStyles from './map-styles/mapStyles';

const libraries = ['places'];
const mapContainerStyle = {
    width: '100vw',
    height: '100vh',
}

const center = {
    lat: 43.653225,
    lng: -79.383186,
}

const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
}

export default function MapListings() {

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyAa9OQmHsG06coixPdOKcQ5Q-YdQwvch2Q',
        libraries,
    });

    if (loadError) return 'Error loading maps';
    if (!isLoaded) return 'Loading Maps';

    return (
        <div>
            <h1>
                Goods{''}
                <span role='img' aria-label='tent'>
                    🥕🐔🍉
                </span>
            </h1>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={8}
                center={center}
                options={options}
            ></GoogleMap>
        </div>
    );
}
