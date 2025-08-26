import { useEffect, type ReactElement } from 'react';
import { AllComponents, handleFetchCurrentLocWeather } from '../CommonFunctions';
import { useGlobalContext } from '../hooks/useGlobalContext';
import type { WeatherData } from '../types';
import LoadingSkeletonCard from './LoadingSkeletonCard';

export default function MainPageComponent(): ReactElement {
    const { setWeatherAppData, weatherAppData } = useGlobalContext();
    const { error, loading, data } = weatherAppData.apiStates;

    useEffect(() => {
        let url = "";
        if (!weatherAppData?.userLocation) {
            url = "https://wttr.in/?format=j1";
        }
        else {
            url = `https://wttr.in/${weatherAppData?.userCoords?.lat},${weatherAppData?.userCoords?.lon}?format=j1`;
        }
        if (!data?.current_condition?.length) {
            handleFetchCurrentLocWeather<WeatherData>({
                url: url,
                setData: setWeatherAppData,
            });
        }
    }, [weatherAppData?.userLocation]);


    if (loading) {
        return <div><LoadingSkeletonCard /></div>
    }

    if (error) {
        return <div>Error loading data</div>;
    }

    return (
        <div>
            <div className={`pt-28 md:pt-20 h-dvh`}>
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
