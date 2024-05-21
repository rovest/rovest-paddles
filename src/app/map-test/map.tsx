"use client";

import { useState } from "react";

import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from "@vis.gl/react-google-maps";


type MapComponentProps = {
    lat: number;
    long: number;
}

export default function MapComponent(props: MapComponentProps) {
    const position = { lat: props.lat, lng: props.long };


    return (
        <APIProvider apiKey="AIzaSyDVCDVoyA6dMdp2412qwKpEieTDXFUFjFM">
            <div className="flex w-full h-full w-[100%] h-[500px]">
                <Map zoom={9} center={position} className="h-full w-full"></Map>
            </div>
        </APIProvider>
    )
}