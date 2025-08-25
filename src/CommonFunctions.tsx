import axios from "axios";
import ThemeComponent from "./Components/ThemeComponent";
import WeatherBar from "./Components/WeatherBar";
import CurrentLocWeatherDataCard from "./Components/CurrentLocWeatherDataCard";

type apiCall = {
    url: string,
    params?: object,
    apiKey?: string,
    apiStates: Function,
    method?: string,
}

export const apis = {
    allDataAPi: "https://wttr.in/?format=j1",
    latLongApi: "",
}

export async function handleApiCall({
    url = "",
    apiStates = () => { },
    params = {},
    method = "GET"
}: apiCall): Promise<object | Boolean> {
    const response = await axios.get(url, {
        method: method,
    });
    let data = {};
    if (response) {
        data = response;
        if (data) {
            apiStates({ loading: false, error: false, data: data });
        }
        else {
            apiStates({ loading: false, error: true, data: data });
        }
    }
    else {
        apiStates({ loading: false, error: true, data: false });
    }
    return data;
}

export const AllComponents = [
    // {
    //     name: "Theme",
    //     component: ThemeComponent
    // },
    {
        name: "WeatherBar",
        component: WeatherBar,
    },
    {
        name: "CurrentLocationComp",
        component: CurrentLocWeatherDataCard,
    },
]