import axios from "axios";
import type { Dispatch, SetStateAction } from "react";
import CurrentLocWeatherDataCard from "./Components/CurrentLocWeatherDataCard";
import DaysWeather from "./Components/DaysWeather";
import WeatherBar from "./Components/WeatherBar";

type CurrentLocWeatherParams<T> = {
    url: string;
    params?: object;
    method?: string;
    setData: Dispatch<SetStateAction<{
        userLocation: boolean;
        apiStates: {
            error: boolean;
            loading: boolean;
            data?: T;
        };
    }>>;
};

export async function handleFetchCurrentLocWeather<T>({ url, params = {}, method = "GET", setData, }: CurrentLocWeatherParams<T>): Promise<void> {
    setData(prevState => ({
        ...prevState,
        apiStates: {
            ...prevState.apiStates,
            loading: true,
            error: false,
        },
    }));

    try {
        const response = await axios.request<T>({
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
