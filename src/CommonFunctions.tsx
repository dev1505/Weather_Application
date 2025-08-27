import axios from "axios";
import type { Dispatch, SetStateAction } from "react";
import CurrentLocWeatherDataCard from "./Components/CurrentLocWeatherDataCard";
import DaysWeather from "./Components/DaysWeather";
import WeatherBar from "./Components/WeatherBar";
import type { WeatherAppDataType, WeatherData } from "./types";

type CurrentLocWeatherParams = {
    url: string;
    params?: object;
    method?: string;
    setData: Dispatch<SetStateAction<WeatherAppDataType>>;
};

export async function handleFetchCurrentLocWeather({ url, params = {}, method = "GET", setData, }: CurrentLocWeatherParams): Promise<void> {
    setData(prevState => ({
        ...prevState,
        apiStates: {
            ...prevState.apiStates,
            loading: true,
            error: false,
        },
    }));

    try {
        const response = await axios.request<WeatherData>({
            url,
            method,
            params,
        });
        setData(prevState => ({
            ...prevState,
            apiStates: {
                loading: false,
                error: false,
                data: response.data,
            },
        }));
    } catch {
        setData(prevState => ({
            ...prevState,
            apiStates: {
                ...prevState.apiStates,
                loading: false,
                error: true,
            },
        }));
    }
}


export const AllComponents = [
    {
        name: "WeatherBar",
        component: WeatherBar,
    },
    {
        name: "CurrentLocationComp",
        component: CurrentLocWeatherDataCard,
    },
    {
        name: "3DaysWeather",
        component: DaysWeather,
    },
];
