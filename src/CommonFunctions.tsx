import axios from "axios";
import type { Dispatch, SetStateAction } from "react";
import CurrentLocWeatherDataCard from "./Components/CurrentLocWeatherDataCard";
import DaysWeather from "./Components/DaysWeather";
import WeatherBar from "./Components/WeatherBar";

type ApiCallParams<T> = {
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

export async function handleApiCall<T>({ url, params = {}, method = "GET", setData, }: ApiCallParams<T>): Promise<void> {
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
    } catch (error) {
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
