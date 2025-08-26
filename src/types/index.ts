import Rainy from "../Images/Rainy.jpg";
import Snowy from "../Images/Snowy.jpg";
import Sunny from "../Images/Sunny.jpg";
import Mist from "../Images/Mist.jpg";
import Sleet from "../Images/Sleet.jpg";
import Thunder from "../Images/Thunder.jpg";

export interface WeatherData {
  current_condition: CurrentCondition[];
  nearest_area: NearestArea[];
  request: Request[];
  weather: Weather[];
}

export const weatherCodes = {
  113: { category: "Sunny", description: "Clear / Sunny", image: Sunny },
  116: { category: "Sunny", description: "Partly cloudy", image: Sunny },
  119: { category: "Sunny", description: "Sunny", image: Sunny },
  122: { category: "Sunny", description: "Overcast", image: Sunny },
  143: { category: "Mist", description: "Mist", image: Mist },
  176: { category: "Rainy", description: "Patchy rain possible", image: Rainy },
  179: { category: "Snowy", description: "Patchy snow possible", image: Snowy },
  182: { category: "Sleet", description: "Patchy sleet possible", image: Sleet },
  185: { category: "Sleet", description: "Patchy freezing drizzle possible", image: Sleet },
  200: { category: "Thunder", description: "Thundery outbreaks possible", image: Thunder },
  227: { category: "Snowy", description: "Blowing snow", image: Snowy },
  230: { category: "Snowy", description: "Blizzard", image: Snowy },
  248: { category: "Mist", description: "Fog", image: Mist },
  260: { category: "Mist", description: "Freezing fog", image: Mist },
  263: { category: "Rainy", description: "Patchy light drizzle", image: Rainy },
  266: { category: "Rainy", description: "Light drizzle", image: Rainy },
  281: { category: "Rainy", description: "Freezing drizzle", image: Rainy },
  284: { category: "Rainy", description: "Heavy freezing drizzle", image: Rainy },
  293: { category: "Rainy", description: "Patchy light rain", image: Rainy },
  296: { category: "Rainy", description: "Light rain", image: Rainy },
  299: { category: "Rainy", description: "Moderate rain at times", image: Rainy },
  302: { category: "Rainy", description: "Moderate rain", image: Rainy },
  305: { category: "Rainy", description: "Heavy rain at times", image: Rainy },
  308: { category: "Rainy", description: "Heavy rain", image: Rainy },
  311: { category: "Rainy", description: "Light freezing rain", image: Rainy },
  314: { category: "Sleet", description: "Moderate or heavy freezing rain", image: Sleet },
  317: { category: "Sleet", description: "Light sleet", image: Sleet },
  320: { category: "Sleet", description: "Moderate or heavy sleet", image: Sleet },
  323: { category: "Snowy", description: "Patchy light snow", image: Snowy },
  326: { category: "Snowy", description: "Light snow", image: Snowy },
  329: { category: "Snowy", description: "Patchy moderate snow", image: Snowy },
  332: { category: "Snowy", description: "Moderate snow", image: Snowy },
  335: { category: "Snowy", description: "Patchy heavy snow", image: Snowy },
  338: { category: "Snowy", description: "Heavy snow", image: Snowy },
  350: { category: "Snowy", description: "Ice pellets", image: Snowy },
  353: { category: "Rainy", description: "Light rain shower", image: Rainy },
  356: { category: "Rainy", description: "Moderate or heavy rain shower", image: Rainy },
  359: { category: "Rainy", description: "Torrential rain shower", image: Rainy },
  362: { category: "Sleet", description: "Light sleet showers", image: Sleet },
  365: { category: "Sleet", description: "Moderate or heavy sleet showers", image: Sleet },
  368: { category: "Snowy", description: "Light snow showers", image: Snowy },
  371: { category: "Snowy", description: "Moderate or heavy snow showers", image: Snowy },
  386: { category: "Thunder", description: "Patchy light rain with thunder", image: Thunder },
  389: { category: "Thunder", description: "Moderate or heavy rain with thunder", image: Thunder },
  392: { category: "Thunder", description: "Patchy light snow with thunder", image: Thunder },
  395: { category: "Thunder", description: "Moderate or heavy snow with thunder", image: Thunder }
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
