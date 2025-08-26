import { type ReactElement } from 'react';
import { FaSearchLocation } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { useGlobalContext } from '../hooks/useGlobalContext';

export default function WeatherBar(): ReactElement {


    const { weatherAppData, setWeatherAppData } = useGlobalContext();

    function handleCurrentLocation() {
        navigator.geolocation.getCurrentPosition((data) => {
            setWeatherAppData({
                ...weatherAppData,
                userLocation: true,
                userCoords: {
                    lat: data?.coords?.latitude,
                    lon: data?.coords?.longitude
                }
            })
        }, (error) => {
            alert(error?.message);
        })
    }

    return (
        <div>
            <div
                className='fixed top-0 flex py-4 px-5 z-50 w-full items-center justify-evenly bg-gray-700 text-sm md:text-2xl text-white shadow shadow-2xl'
            >
                <div
                    className='w-full'
                >
                    Weather Info
                </div>
                <div
                    onClick={() => { document.getElementById("locationSearch")?.focus() }}
                    className='w-full focus-within:border focus-within:border-gray-400 rounded flex px-2 items-center bg-gray-600'
                >
                    <FaSearchLocation
                        className='bg-gray-900 rounded text-blue-200 p-1 text-3xl md:text-4xl'
                    />
                    <input
                        id="locationSearch"
                        type="text"
                        className='w-full m-2 outline-0'
                        placeholder='Enter Location'
                    />
                    <FaLocationCrosshairs
                        className='cursor-pointer'
                        onClick={handleCurrentLocation}
                    />
                </div>
            </div>
        </div>
    )
}
