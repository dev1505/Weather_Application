import { useState, type ReactElement } from 'react';
import { useGlobalContext } from '../hooks/useGlobalContext';

// Helper function to format time
const formatTime = (time: string): string => {
    const hour = parseInt(time) / 100;
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
    return `${formattedHour}:00 ${ampm}`;
};

export default function DaysWeather(): ReactElement {
    const { weatherAppData } = useGlobalContext();
    const { loading, error, data } = weatherAppData?.apiStates;
    const [selectedDayIndex, setSelectedDayIndex] = useState(0);

    if (loading) {
        return <div className="text-center p-8">Loading...</div>;
    }

    if (error) {
        return <div className="text-center p-8 text-red-500">Error loading weather data.</div>;
    }

    return (
        <div className="w-full bg-gray-800 text-white p-4 md:p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">{weatherAppData?.apiStates?.data?.weather?.length}-Day Weather Forecast</h2>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
                {data?.weather?.map((weather, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedDayIndex(index)}
                        className={`cursor-pointer px-4 py-2 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${selectedDayIndex === index ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-700 hover:bg-gray-600'}`}
                    >
                        <p className="font-semibold text-lg">{new Date(weather.date).toLocaleDateString('en-US', { weekday: 'short' })}</p>
                        <p className="text-sm">{weather.date}</p>
                    </button>
                ))}
            </div>

            {data?.weather?.[selectedDayIndex] && (
                <div className="bg-gray-900 p-6 rounded-xl shadow-2xl">
                    <h3 className="text-2xl font-semibold mb-6 text-center">
                        Hourly Forecast for {data.weather[selectedDayIndex].date}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-4">
                        {data.weather[selectedDayIndex].hourly?.map((hourlyData, index2) => (
                            <div
                                key={index2}
                                className="bg-gray-700 p-4 rounded-lg flex flex-col items-center text-center transition-transform duration-300 hover:bg-gray-600 hover:scale-105"
                            >
                                <p className="font-bold text-lg">{formatTime(hourlyData.time)}</p>
                                <p className="text-2xl font-light my-2">{hourlyData.tempC}°C</p>
                                <p className="text-xs text-gray-400">{hourlyData.weatherDesc?.[0]?.value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}