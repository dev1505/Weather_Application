import { type ReactElement } from "react";
import {
  FaCloud,
  FaCloudSun,
  FaEye,
  FaMoon,
  FaSnowflake,
  FaSun,
  FaTachometerAlt,
  FaThermometerHalf,
  FaTint,
  FaWind,
} from "react-icons/fa";
import Rainy from "../Images/Rainy.jpg";
import Sunny from "../Images/Sunny.jpg";
import Winter from "../Images/Winter.jpg";
import { useGlobalContext } from "../hooks/useGlobalContext";

// Mapping of weather descriptions to images
const weatherImages: { [key: string]: string } = {
  "rain": Rainy,
  "sunny": Sunny,
  "clear": Sunny,
  "winter": Winter,
  "snow": Winter,
  "cloudy": Rainy,
  "overcast": Rainy,
  "mist": Rainy,
  "drizzle": Rainy,
};

// Function to get the appropriate image based on weather description
const getWeatherImage = (weatherDesc: string): string => {
  const lowerCaseDesc = weatherDesc.toLowerCase();
  for (const key in weatherImages) {
    if (lowerCaseDesc.includes(key)) {
      return weatherImages[key];
    }
  }
  return Rainy; // Default image
};

export default function CurrentLocWeatherDataCard(): ReactElement {
  const { weatherAppData } = useGlobalContext();
  const { error, data } = weatherAppData.apiStates;

  if (error || !data) {
    return <div>Error loading data</div>;
  }

  const currentCondition = data.current_condition[0];
  const nearestArea = data.nearest_area[0];
  const todayWeather = data.weather[0];

  const weatherDesc = currentCondition.weatherDesc[0].value;
  const backgroundImage = getWeatherImage(weatherDesc);

  const weatherIcons: { [key: string]: ReactElement } = {
    "rain": <FaTint />,
    "sunny": <FaSun />,
    "clear": <FaSun />,
    "cloudy": <FaCloud />,
    "snow": <FaSnowflake />,
    "overcast": <FaCloud />,
    "mist": <FaTint />,
    "drizzle": <FaTint />,
    "default": <FaThermometerHalf />,
  };

  const getWeatherIcon = (weatherDesc: string) => {
    const lowerCaseDesc = weatherDesc.toLowerCase();
    for (const key in weatherIcons) {
      if (lowerCaseDesc.includes(key)) {
        return weatherIcons[key];
      }
    }
    return weatherIcons["default"];
  };

  return (
    <div className="bg-gray-800 p-4 md:p-8">
      <div className="relative rounded-2xl overflow-hidden h-full">
        <div>
          <img
            src={backgroundImage}
            alt="Weather background"
            className="absolute w-full h-full object-cover blur-xs z-0"
          />
          <div className="relative z-10 text-white bg-black/30 p-4 md:p-6 backdrop-blur-none">
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-4xl font-bold">
                  {nearestArea.areaName[0].value},{" "}
                  {nearestArea.country[0].value}
                </h2>
                <p className="text-lg">{currentCondition.localObsDateTime}</p>
              </div>
              <div className="text-right">
                <div className="flex items-center text-2xl">
                  {getWeatherIcon(weatherDesc)}
                  <span className="ml-2">{weatherDesc}</span>
                </div>
              </div>
            </div>

            {/* Main Weather Info */}
            <div className="mb-6">
              <h1 className="text-4xl font-extrabold">
                {currentCondition.temp_C}°C / {currentCondition.temp_F}°F
              </h1>
              <p className="text-2xl">
                Feels Like: {currentCondition.FeelsLikeC}°C /{" "}
                {currentCondition.FeelsLikeF}°F
              </p>
            </div>

            {/* Detailed Weather Info */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              <div className="flex items-center">
                <FaTint className="mr-2" />
                <p>Humidity: {currentCondition.humidity}%</p>
              </div>
              <div className="flex items-center">
                <FaWind className="mr-2" />
                <p>Wind: {currentCondition.windspeedKmph} km/h</p>
              </div>
              <div className="flex items-center">
                <FaTachometerAlt className="mr-2" />
                <p>UV Index: {currentCondition.uvIndex}</p>
              </div>
              <div className="flex items-center">
                <FaEye className="mr-2" />
                <p>Visibility: {currentCondition.visibility} km</p>
              </div>
              <div className="flex items-center">
                <FaThermometerHalf className="mr-2" />
                <p>Pressure: {currentCondition.pressure} hPa</p>
              </div>
              <div className="flex items-center">
                <FaCloud className="mr-2" />
                <p>Cloud Cover: {currentCondition.cloudcover}%</p>
              </div>
            </div>

            {/* Today's Forecast */}
            <div className="mt-6 pt-4 border-t border-gray-400">
              <h3 className="text-2xl mb-2">Today's Forecast</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="flex items-center">
                  <FaSun className="mr-2" />
                  <p>Sunrise: {todayWeather.astronomy[0].sunrise}</p>
                </div>
                <div className="flex items-center">
                  <FaCloudSun className="mr-2" />
                  <p>Sunset: {todayWeather.astronomy[0].sunset}</p>
                </div>
                <div className="flex items-center">
                  <FaMoon className="mr-2" />
                  <p>Moonrise: {todayWeather.astronomy[0].moonrise}</p>
                </div>
                <div className="flex items-center">
                  <FaMoon className="mr-2" />
                  <p>Moonset: {todayWeather.astronomy[0].moonset}</p>
                </div>
                <div>
                  <p>
                    Max Temp: {todayWeather.maxtempC}°C /{" "}
                    {todayWeather.maxtempF}°F
                  </p>
                </div>
                <div>
                  <p>
                    Min Temp: {todayWeather.mintempC}°C /{" "}
                    {todayWeather.mintempF}°F
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}