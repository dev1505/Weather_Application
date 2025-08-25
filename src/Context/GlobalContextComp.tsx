import { createContext, useState, type ReactElement, type Dispatch, type SetStateAction } from "react";

// Define the shape of the context

type apiStatesType = {
    error: Boolean,
    loading: Boolean,
    data: object | Boolean,
}

type WeatherAppDataType = {
    theme: string;
    apiStates: apiStatesType;
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
        theme: new Date().getHours() < 18 ? "light" : "dark",
        apiStates: {
            error: false,
            loading: true,
            data: false,
        },
    });

    return (
        <GlobalContext.Provider value={{ weatherAppData, setWeatherAppData }}>
            {children}
        </GlobalContext.Provider>
    );
}
