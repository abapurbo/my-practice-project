import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from "react-router";

export default function Coverage() {
    const serviceDatas = useLoaderData()
    const position = [23.685, 90.356]
    const mapRef = useRef()
    // search in the districts
    const handleSearch = e => {
        e.preventDefault();
        const location = e.target.location.value
        const district = serviceDatas.find(c => c.district.toLowerCase().includes(location.toLowerCase()))
        if (district) {
            const coord = [district.latitude, district.longitude]
            mapRef.current.flyTo(coord, 14)
        }
    }
    return (
        <div>
            <h1 className="text-5xl text-center">We are availabel in 64 districts</h1>
            <div>
                {/* search  */}
                <form onSubmit={handleSearch}>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" className="grow" name="location" placeholder="Search" />

                    </label>
                </form>
            </div>
            <div className="w-full border h-[800px]">
                <MapContainer center={position} scrollWheelZoom={false} ref={mapRef} zoom={8} className='h-[800px]'>
                    <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                    {
                        serviceDatas.map((center, inx) => (
                            <Marker key={inx} position={[center.latitude, center.longitude]}>
                                <Popup>
                                    <strong>{center.district}</strong> <br />
                                    Service Area:{center.covered_area.join(',')}
                                </Popup>
                            </Marker>
                        ))
                    }
                </MapContainer>
            </div>
        </div>
    )
}
