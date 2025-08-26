import { useEffect, type ReactElement } from 'react';
import { AllComponents, handleApiCall } from '../CommonFunctions';
import { useGlobalContext } from '../hooks/useGlobalContext';
import type { WeatherData } from '../types';
import LoadingSpinner from './LoadingSpinner';

export default function MainPageComponent(): ReactElement {
    const { setWeatherAppData, weatherAppData } = useGlobalContext();

    useEffect(() => {

        let url = "";
        if (!weatherAppData?.userLocation) {
            url = "https://wttr.in/?format=j1";
        }
        else {
            url = `https://wttr.in/${weatherAppData?.userCoords?.lat},${weatherAppData?.userCoords?.lon}?format=j1`;
        }
        handleApiCall<WeatherData>({
            url: url,
            setData: setWeatherAppData,
        });

    }, [weatherAppData?.userLocation]);

    if (weatherAppData?.apiStates?.loading) {
        return (
            <div>
                <LoadingSpinner />
            </div>
        )
    }

    return (
        <div>
            <div className={`pt-16 md:pt-20 h-dvh`}>
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
