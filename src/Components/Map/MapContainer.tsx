import React, { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { MapService, LatLngLiteral } from '../../../modules/map/MapService';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const defaultCenter = {
    lat: 50.4501,
    lng: 30.5234
};

interface MapContainerProps {
    onAddressSelect: (address: string) => void;
}

export const MapContainer: React.FC<MapContainerProps> = ({ onAddressSelect }) => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_MAP_KEY ?? '',
        libraries: ['places']
    });

    const [marker, setMarker] = useState<LatLngLiteral | null>(null);
    const [map, setMap] = useState<google.maps.Map | null>(null);

    const onLoad = useCallback((map: google.maps.Map) => {
        setMap(map);
    }, []);

    const onUnmount = useCallback(() => {
        setMap(null);
    }, []);

    const handleMapClick = async (e: google.maps.MapMouseEvent) => {
        if (e.latLng) {
            const clickedPos: LatLngLiteral = {
                lat: e.latLng.lat(),
                lng: e.latLng.lng()
            };

            if (MapService.isValidLocation(clickedPos)) {
                setMarker(clickedPos);

                const result = await MapService.getAddressFromCoordinates(clickedPos);

                if (result.success) {
                    onAddressSelect(result.address);
                } else {
                    console.error(result.error);
                }
            }
        }
    };

    if (!isLoaded) {
        return <div data-testid="map-loading">Loading map...</div>;
    }

    return (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={defaultCenter}
            zoom={10}
            onClick={handleMapClick}
            onLoad={onLoad}
            onUnmount={onUnmount}
            data-testid="google-map"
        >
            {marker && <Marker position={marker} data-testid="map-marker" />}
        </GoogleMap>
    );
};