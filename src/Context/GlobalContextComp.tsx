import { createContext, useRef, useState, type Dispatch, type ReactElement, type RefObject, type SetStateAction } from "react";
import type { WeatherData } from "../types";
// Define the shape of the context

type apiStatesType<T> = {
    error: boolean;
    loading: boolean;
    data?: T;
};

type userCoords = {
    lat: number;
    lon: number;
}

type WeatherAppDataType = {
    userLocation: boolean;
    userCoords?: userCoords
    apiStates: apiStatesType<WeatherData>;
};

type UserSearchType = {
    placeId: number;
    lat: string;
    lon: string;
}

type ContextType = {
    weatherAppData: WeatherAppDataType;
    setWeatherAppData: Dispatch<SetStateAction<WeatherAppDataType>>;
    userSearch: RefObject<UserSearchType>;
};

// Create the context with default `undefined` to force consumer checks
export const GlobalContext = createContext<ContextType | undefined>(undefined);

// Props for the provider
type PropsType = {
    children: ReactElement;
};

export default function GlobalContextComp({ children }: PropsType): ReactElement {
    const [weatherAppData, setWeatherAppData] = useState<WeatherAppDataType>({
        userLocation: false,
        apiStates: {
            error: false,
            loading: true,
            data: {
                current_condition: [],
                nearest_area: [],
                request: [],
                weather: [],
            }
        },
    });

    const userSearch = useRef<UserSearchType>({ placeId: 0, lat: "", lon: "" });

    return (
        <GlobalContext.Provider value={{ weatherAppData, setWeatherAppData, userSearch }}>
            {children}
        </GlobalContext.Provider>
    );
}