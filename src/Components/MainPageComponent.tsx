import { useEffect, type ReactElement } from 'react';
import { AllComponents, handleApiCall } from '../CommonFunctions';
import { useGlobalContext } from '../hooks/useGlobalContext';
import type { WeatherData } from '../types';

export default function MainPageComponent(): ReactElement {
    const { setWeatherAppData } = useGlobalContext();

    useEffect(() => {
        handleApiCall<WeatherData>({
            url: "https://wttr.in/?format=j1",
            setData: setWeatherAppData,
        });
    }, [setWeatherAppData]);

    return (
        <div>
            <div className={`pt-16 md:pt-20 bg-zinc-500 h-dvh`}>
                <div className='flex flex-col wrap-break-word'>
                    {
                        AllComponents?.length > 0 ?
                            AllComponents?.map((data, index) => {
                                const Component = data?.component;
                                return (
                                    <div key={index}>
                                        <Component />
                                    </div>
                                )
                            })
                            : ""
                    }
                </div>
            </div>
        </div>
    )
}
