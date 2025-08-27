import type { IconType } from "react-icons";
import Mist from "../Images/Mist.jpg";
import Rainy from "../Images/Rainy.jpg";
import Sleet from "../Images/Sleet.jpg";
import Snowy from "../Images/Snowy.jpg";
import Sunny from "../Images/Sunny.jpg";
import Thunder from "../Images/Thunder.jpg";

import { FaBolt, FaCloudRain, FaCloudShowersHeavy, FaSmog, FaSnowflake, FaSun } from "react-icons/fa";

export interface WeatherData {
  current_condition: CurrentCondition[];
  nearest_area: NearestArea[];
  request: Request[];
  weather: Weather[];
}

type weatherObject = {
  category: string;
  description: string;
  image: string;
  icon: IconType,
}

export type apiStatesType<T> = {
  error: boolean;
  loading: boolean;
  data?: T;
};

export type userCoords = {
  lat: number;
  lon: number;
}

export type WeatherAppDataType = {
  userLocation: boolean;
  userCoords?: userCoords
  apiStates: apiStatesType<WeatherData>;
  searched: { [key: string]: WeatherData };
};

export const weatherCodes: Record<string, weatherObject> = {
  "113": { category: "Sunny", description: "Clear / Sunny", image: Sunny, icon: FaSun },
  "116": { category: "Sunny", description: "Partly cloudy", image: Sunny, icon: FaSun },
  "119": { category: "Sunny", description: "Sunny", image: Sunny, icon: FaSun },
  "122": { category: "Sunny", description: "Overcast", image: Sunny, icon: FaSun },
  "143": { category: "Mist", description: "Mist", image: Mist, icon: FaSmog },
  "176": { category: "Rainy", description: "Patchy rain possible", image: Rainy, icon: FaCloudRain },
  "179": { category: "Snowy", description: "Patchy snow possible", image: Snowy, icon: FaSnowflake },
  "182": { category: "Sleet", description: "Patchy sleet possible", image: Sleet, icon: FaCloudShowersHeavy },
  "185": { category: "Sleet", description: "Patchy freezing drizzle possible", image: Sleet, icon: FaCloudShowersHeavy },
  "200": { category: "Thunder", description: "Thundery outbreaks possible", image: Thunder, icon: FaBolt },
  "227": { category: "Snowy", description: "Blowing snow", image: Snowy, icon: FaSnowflake },
  "230": { category: "Snowy", description: "Blizzard", image: Snowy, icon: FaSnowflake },
  "248": { category: "Mist", description: "Fog", image: Mist, icon: FaSmog },
  "260": { category: "Mist", description: "Freezing fog", image: Mist, icon: FaSmog },
  "263": { category: "Rainy", description: "Patchy light drizzle", image: Rainy, icon: FaCloudRain },
  "266": { category: "Rainy", description: "Light drizzle", image: Rainy, icon: FaCloudRain },
  "281": { category: "Rainy", description: "Freezing drizzle", image: Rainy, icon: FaCloudRain },
  "284": { category: "Rainy", description: "Heavy freezing drizzle", image: Rainy, icon: FaCloudRain },
  "293": { category: "Rainy", description: "Patchy light rain", image: Rainy, icon: FaCloudRain },
  "296": { category: "Rainy", description: "Light rain", image: Rainy, icon: FaCloudRain },
  "299": { category: "Rainy", description: "Moderate rain at times", image: Rainy, icon: FaCloudRain },
  "302": { category: "Rainy", description: "Moderate rain", image: Rainy, icon: FaCloudRain },
  "305": { category: "Rainy", description: "Heavy rain at times", image: Rainy, icon: FaCloudRain },
  "308": { category: "Rainy", description: "Heavy rain", image: Rainy, icon: FaCloudRain },
  "311": { category: "Rainy", description: "Light freezing rain", image: Rainy, icon: FaCloudRain },
  "314": { category: "Sleet", description: "Moderate or heavy freezing rain", image: Sleet, icon: FaCloudShowersHeavy },
  "317": { category: "Sleet", description: "Light sleet", image: Sleet, icon: FaCloudShowersHeavy },
  "320": { category: "Sleet", description: "Moderate or heavy sleet", image: Sleet, icon: FaCloudShowersHeavy },
  "323": { category: "Snowy", description: "Patchy light snow", image: Snowy, icon: FaSnowflake },
  "326": { category: "Snowy", description: "Light snow", image: Snowy, icon: FaSnowflake },
  "329": { category: "Snowy", description: "Patchy moderate snow", image: Snowy, icon: FaSnowflake },
  "332": { category: "Snowy", description: "Moderate snow", image: Snowy, icon: FaSnowflake },
  "335": { category: "Snowy", description: "Patchy heavy snow", image: Snowy, icon: FaSnowflake },
  "338": { category: "Snowy", description: "Heavy snow", image: Snowy, icon: FaSnowflake },
  "350": { category: "Snowy", description: "Ice pellets", image: Snowy, icon: FaSnowflake },
  "353": { category: "Rainy", description: "Light rain shower", image: Rainy, icon: FaCloudRain },
  "356": { category: "Rainy", description: "Moderate or heavy rain shower", image: Rainy, icon: FaCloudRain },
  "359": { category: "Rainy", description: "Torrential rain shower", image: Rainy, icon: FaCloudRain },
  "362": { category: "Sleet", description: "Light sleet showers", image: Sleet, icon: FaCloudShowersHeavy },
  "365": { category: "Sleet", description: "Moderate or heavy sleet showers", image: Sleet, icon: FaCloudShowersHeavy },
  "368": { category: "Snowy", description: "Light snow showers", image: Snowy, icon: FaSnowflake },
  "371": { category: "Snowy", description: "Moderate or heavy snow showers", image: Snowy, icon: FaSnowflake },
  "386": { category: "Thunder", description: "Patchy light rain with thunder", image: Thunder, icon: FaBolt },
  "389": { category: "Thunder", description: "Moderate or heavy rain with thunder", image: Thunder, icon: FaBolt },
  "392": { category: "Thunder", description: "Patchy light snow with thunder", image: Thunder, icon: FaBolt },
  "395": { category: "Thunder", description: "Moderate or heavy snow with thunder", image: Thunder, icon: FaBolt },
};



export interface CurrentCondition {
  FeelsLikeC: string;
  FeelsLikeF: string;
  cloudcover: string;
  humidity: string;
  localObsDateTime: string;
  observation_time: string;
  precipInches: string;
  precipMM: string;
  pressure: string;
  pressureInches: string;
  temp_C: string;
  temp_F: string;
  uvIndex: string;
  visibility: string;
  visibilityMiles: string;
  weatherCode: string;
  weatherDesc: WeatherDesc[];
  weatherIconUrl: WeatherIconURL[];
  winddir16Point: string;
  winddirDegree: string;
  windspeedKmph: string;
  windspeedMiles: string;
}

export interface WeatherDesc {
  value: string;
}

export interface WeatherIconURL {
  value: string;
}

export interface NearestArea {
  areaName: WeatherDesc[];
  country: WeatherDesc[];
  latitude: string;
  longitude: string;
  population: string;
  region: WeatherDesc[];
  weatherUrl: WeatherIconURL[];
}

export interface Request {
  query: string;
  type: string;
}

export interface Weather {
  astronomy: Astronomy[];
  avgtempC: string;
  avgtempF: string;
  date: string;
  hourly: Hourly[];
  maxtempC: string;
  maxtempF: string;
  mintempC: string;
  mintempF: string;
  sunHour: string;
  totalSnow_cm: string;
  uvIndex: string;
}

export interface Astronomy {
  moon_illumination: string;
  moon_phase: string;
  moonrise: string;
  moonset: string;
  sunrise: string;
  sunset: string;
}

export interface Hourly {
  DewPointC: string;
  DewPointF: string;
  FeelsLikeC: string;
  FeelsLikeF: string;
  HeatIndexC: string;
  HeatIndexF: string;
  WindChillC: string;
  WindChillF: string;
  WindGustKmph: string;
  WindGustMiles: string;
  chanceoffog: string;
  chanceoffrost: string;
  chanceofhightemp: string;
  chanceofovercast: string;
  chanceofrain: string;
  chanceofremdry: string;
  chanceofsnow: string;
  chanceofsunshine: string;
  chanceofthunder: string;
  chanceofwindy: string;
  cloudcover: string;
  diffRad: string;
  humidity: string;
  precipInches: string;
  precipMM: string;
  pressure: string;
  pressureInches: string;
  shortRad: string;
  tempC: string;
  tempF: string;
  time: string;
  uvIndex: string;
  visibility: string;
  visibilityMiles: string;
  weatherCode: string;
  weatherDesc: WeatherDesc[];
  weatherIconUrl: WeatherIconURL[];
  winddir16Point: string;
  winddirDegree: string;
  windspeedKmph: string;
  windspeedMiles: string;
}