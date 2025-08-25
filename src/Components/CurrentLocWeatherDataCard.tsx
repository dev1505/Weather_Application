import type { ReactElement } from "react";
import Rainy from "../Images/Rainy.jpg"
import Sunny from "../Images/Sunny.jpg"
import Winter from "../Images/Winter.jpg"

type contentJson = {
    FeelsLikeC: string
    FeelsLikeF: string
    humidity: string
    temp_C: string
    temp_F: string
    windspeedKmph: string
    windspeedMiles: string
    date: string
    observation_time: string
}

export default function CurrentLocWeatherDataCard(): ReactElement {
    return (
        <div className="h-screen">
            <div className="relative m-7 h-2/3 md:h-1/3 rounded-2xl overflow-hidden">
                <img
                    src={Rainy}
                    alt="sorry"
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-5 left-5 z-10 right-5 text-white flex flex-col w-auto">
                    <div>
                        Current Weather Condition
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <div>
                                26° C / 27° F
                            </div>
                            <div>
                                Feels Like 26° C
                                <br />
                                Feels Like 26° C
                            </div>
                        </div>
                        <div>
                            <AirQualityCard />
                        </div>
                    </div>
                    <div>
                        Current Weather Condition
                    </div>
                </div>
            </div>
        </div>
    );
}

function AirQualityCard() {
    return (
        <div className="bg-green-300 z-10 rounded">
            <div>
                Hello
            </div>
        </div>
    )
}
