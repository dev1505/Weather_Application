import { createContext, useState, type Dispatch, type ReactElement, type SetStateAction } from "react";
import type { WeatherData } from "../types";
// Define the shape of the context

type apiStatesType<T> = {
    error: boolean;
    loading: boolean;
    data?: T;
};

type WeatherAppDataType = {
    userLocation: boolean;
    apiStates: apiStatesType<WeatherData>;
};

type ContextType = {
    weatherAppData: WeatherAppDataType;
    setWeatherAppData: Dispatch<SetStateAction<WeatherAppDataType>>;
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
        },
    });

    return (
        <GlobalContext.Provider value={{ weatherAppData, setWeatherAppData }}>
            {children}
        </GlobalContext.Provider>
    );
}