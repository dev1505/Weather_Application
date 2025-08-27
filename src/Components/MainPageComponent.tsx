import { useEffect, type ReactElement } from 'react';
import { AllComponents, handleFetchCurrentLocWeather } from '../CommonFunctions';
import { useGlobalContext } from '../hooks/useGlobalContext';

export default function MainPageComponent(): ReactElement {
    const { setWeatherAppData, weatherAppData } = useGlobalContext();
    const { error, loading } = weatherAppData.apiStates;

    useEffect(() => {
        let url = "";
        if (!weatherAppData?.userLocation) {
            url = "https://wttr.in/?format=j1";
        }
        else {
            url = `https://wttr.in/${weatherAppData?.userCoords?.lat},${weatherAppData?.userCoords?.lon}?format=j1`;
        }
        handleFetchCurrentLocWeather({
            url: url,
            setData: setWeatherAppData,
        });
    }, [weatherAppData?.userLocation, weatherAppData?.userCoords?.lat, weatherAppData?.userCoords?.lon, setWeatherAppData]);

    if (loading) {
        return <div className="flex justify-center items-center h-screen bg-gray-900 text-white text-xl">Your Data is Loading...</div>;
    }

    if (error) {
        return <div className='flex justify-center items-center h-screen bg-gray-900 text-white text-xl'>Error loading data</div>;
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
