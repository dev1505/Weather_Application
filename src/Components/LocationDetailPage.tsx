import { useEffect, useState, type ReactElement } from 'react';
import { useParams } from 'react-router-dom';

interface WeatherData {
    current_condition: {
        FeelsLikeC: string;
        temp_C: string;
        weatherDesc: { value: string }[];
        windspeedKmph: string;
        humidity: string;
        pressure: string;
        visibility: string;
        uvIndex: string;
    }[];
    nearest_area: {
        areaName: { value: string }[];
        country: { value: string }[];
        region: { value: string }[];
    }[];
    weather: {
        date: string;
        astronomy: {
            sunrise: string;
            sunset: string;
            moonrise: string;
            moonset: string;
            moon_phase: string;
            moon_illumination: string;
        }[];
        maxtempC: string;
        mintempC: string;
        hourly: {
            time: string;
            tempC: string;
            weatherDesc: { value: string }[];
            windspeedKmph: string;
            humidity: string;
            chanceofrain: string;
        }[];
    }[];
}

export default function LocationDetailPage(): ReactElement {
    const { lat, lon } = useParams<{ lat: string; lon: string }>();
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`https://wttr.in/${lat},${lon}?format=j1`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setWeatherData(data);
            } catch (error) {
                setError('Failed to fetch weather data.');
                console.error('Error fetching weather data:', error);
            } finally {
                setLoading(false);
            }
        };

        if (lat && lon) {
            fetchData();
        }
    }, [lat, lon]);

    if (loading) {
        return <div className="flex justify-center items-center h-screen bg-gray-900 text-white">Loading...</div>;
    }

    if (error) {
        return <div className="flex justify-center items-center h-screen bg-gray-900 text-red-500">{error}</div>;
    }

    if (!weatherData) {
        return <div className="flex justify-center items-center h-screen bg-gray-900 text-white">No weather data available.</div>;
    }

    const { current_condition, nearest_area, weather } = weatherData;
    const current = current_condition[0];
    const area = nearest_area[0];
    const today = weather[0];

    const formatTime = (time: string): string => {
        const hour = parseInt(time) / 100;
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
        return `${formattedHour}:00 ${ampm}`;
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen p-4 sm:p-6 md:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold">{area.areaName[0].value}</h1>
                    <p className="text-xl text-gray-400">{area.region[0].value}, {area.country[0].value}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Current Weather</h2>
                        <div className="flex justify-between items-center">
                            <p className="text-6xl font-bold">{current.temp_C}°C</p>
                            <div className="text-right">
                                <p className="text-xl">{current.weatherDesc[0].value}</p>
                                <p>Feels like {current.FeelsLikeC}°C</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <p><strong>Wind:</strong> {current.windspeedKmph} km/h</p>
                            <p><strong>Humidity:</strong> {current.humidity}%</p>
                            <p><strong>Pressure:</strong> {current.pressure} hPa</p>
                            <p><strong>Visibility:</strong> {current.visibility} km</p>
                            <p><strong>UV Index:</strong> {current.uvIndex}</p>
                        </div>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4">Today's Forecast</h2>
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-3xl font-bold">{today.maxtempC}°C / {today.mintempC}°C</p>
                                <p>Max / Min</p>
                            </div>
                            <div className="text-right">
                                <p><strong>Sunrise:</strong> {today.astronomy[0].sunrise}</p>
                                <p><strong>Sunset:</strong> {today.astronomy[0].sunset}</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <p><strong>Moon Phase:</strong> {today.astronomy[0].moon_phase}</p>
                            <p><strong>Illumination:</strong> {today.astronomy[0].moon_illumination}%</p>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">Hourly Forecast</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                        {today.hourly.map((hour, index) => (
                            <div key={index} className="text-center bg-gray-700 p-3 rounded-md">
                                <p className="font-semibold">{formatTime(hour.time)}</p>
                                <p className="text-2xl my-1">{hour.tempC}°C</p>
                                <p className="text-xs text-gray-400">{hour.weatherDesc[0].value}</p>
                                <p className="text-xs">💧 {hour.chanceofrain}%</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
