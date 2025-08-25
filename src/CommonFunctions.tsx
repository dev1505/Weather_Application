import axios from "axios";
import CurrentLocWeatherDataCard from "./Components/CurrentLocWeatherDataCard";
import WeatherBar from "./Components/WeatherBar";
import LoadingSpinner from "./Components/LoadingSpinner";

type apiCall = {
    url: string,
    params?: object,
    apiKey?: string,
    apiStates: Function,
    method?: string,
}

// export const apis = {
//     allDataAPi: "https://wttr.in/?format=j1",
//     latLongApi: `https://wttr.in/${lat},${lon}/?format=j1`,
// }

export async function handleApiCall({ url = "", apiStates = () => { }, params = {}, method = "GET" }: apiCall): Promise<object | Boolean> {
    const response = await axios.get(url, { method: method, });
    apiStates({ loading: true, error: false, data: response?.data });
    if (response) {
        response;
        apiStates({ loading: false, error: false, data: response?.data });
    }
    else {
        apiStates({ loading: false, error: true, data: false });
    }
    return response;
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
        name: "CurrentLocationComp",
        component: CurrentLocWeatherDataCard,
    },
    {
        name: "CurrentLocationComp",
        component: LoadingSpinner,
    },
]