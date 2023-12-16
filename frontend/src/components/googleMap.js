import React from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import '../App.css';

const defaultCenter = { lat: 53.3498, lng: -6.2603 };

const MapComponent = ({ selectedLocation }) => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
    });
    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);
    if (loadError) return "Error";
    if (!isLoaded) return "Maps";

    return (
        <div className="mapContainer">
            <GoogleMap
                mapContainerStyle={{
                    height: "25rem",
                }}
                // center={selectedLocation}
                center={selectedLocation && selectedLocation.lat && selectedLocation.lng
                    ? selectedLocation
                    : defaultCenter}
                zoom={13}
                onLoad={onMapLoad}
            >
                <MarkerF
                    position={selectedLocation}
                    icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
                />
            </GoogleMap>
        </div>
    );
};

export default MapComponent;