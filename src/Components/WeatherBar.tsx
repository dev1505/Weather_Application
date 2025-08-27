import { useEffect, useState, type ReactElement } from 'react';
import { FaSearchLocation } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../hooks/useGlobalContext';

interface NominatimResult {
    place_id: number;
    licence: string;
    osm_type: string;
    osm_id: number;
    boundingbox: string[];
    lat: string;
    lon: string;
    display_name: string;
    class: string;
    type: string;
    importance: number;
    icon?: string;
}

export default function WeatherBar(): ReactElement {
    const { weatherAppData, setWeatherAppData } = useGlobalContext();
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState<NominatimResult[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    function handleCurrentLocation() {
        navigator.geolocation.getCurrentPosition((data) => {
            setWeatherAppData({
                ...weatherAppData,
                userLocation: true,
                userCoords: {
                    lat: data?.coords?.latitude,
                    lon: data?.coords?.longitude
                }
            });
        }, (error) => {
            alert(error?.message);
        });
    }

    useEffect(() => {
        const fetchLocations = async () => {
            if (searchQuery.trim() === "") {
                setSearchResults([]);
                return;
            }
            setIsLoading(true);
            setError(null);
            try {
                const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${searchQuery}&format=json`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data: NominatimResult[] = await response.json();
                setSearchResults(data);
            } catch (error) {
                setError("Failed to fetch locations.");
                console.error("Error fetching locations:", error);
            } finally {
                setIsLoading(false);
            }
        };

        const timerId = setTimeout(() => {
            fetchLocations();
        }, 500);

        return () => {
            clearTimeout(timerId);
        };
    }, [searchQuery]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleResultClick = (result: NominatimResult) => {
        navigate(`/location/${result.lat}/${result.lon}`);
        setSearchQuery(result.display_name);
        setSearchResults([]);
    };

    return (
        <div className="relative">
            <div className='fixed top-0 flex flex-col gap-2 md:flex-row py-4 px-5 z-50 w-full items-center justify-evenly bg-gray-700 text-xl  md:text-2xl text-white shadow-2xl'>
                <div className='w-full text-center md:text-left'>
                    Climactic
                </div>
                <div className='w-full relative'>
                    <div className='focus-within:border focus-within:border-gray-400 rounded flex px-2 items-center bg-gray-600'>
                        <FaSearchLocation className='bg-gray-900 rounded text-blue-200 p-1 text-3xl md:text-4xl' />
                        <input
                            id="locationSearch"
                            type="text"
                            className='w-full bg-gray-600 text-white m-2 outline-0'
                            placeholder='Enter Location'
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <FaLocationCrosshairs
                            className='cursor-pointer'
                            onClick={handleCurrentLocation}
                        />
                    </div>
                    {
                        (searchResults.length > 0 || isLoading || error) && (
                            <div className="absolute top-full left-0 right-0 bg-gray-600 mt-1 rounded-md shadow-lg z-50 max-h-80 overflow-y-auto">
                                {isLoading && <div className="p-4 text-center">Loading...</div>}
                                {error && <div className="p-4 text-center text-red-400">{error}</div>}
                                <ul>
                                    {searchResults.map((result) => (
                                        <li
                                            key={result.place_id}
                                            className="p-4 text-xl border-b border-b-gray-400 cursor-pointer hover:bg-gray-500"
                                            onClick={() => handleResultClick(result)}
                                        >
                                            {result.display_name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}