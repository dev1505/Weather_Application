import { type ReactElement } from 'react'

type propsType = {
    a: number,
    b?: string,
}

export default function Test(props: propsType): ReactElement {

    function handleClick() {
        navigator.geolocation.getCurrentPosition(async (success) => {
            await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${success?.coords?.latitude}&lon=${success?.coords?.longitude}&appid=${"d265eca4e299bbc96fb40d6d0b20f76b"}`, {
                method: "GET",
            })
                .then(res => {
                    console.log(res);
                    return res.json()
                })
                .then((data) => {
                    console.log(data)
                })
        }, (error) => {
            console.log(error)
        })
    }

    return (
        <div>
            <div>
                <button
                    className='bg-black rounded text-white m-5 p-3'
                    onClick={handleClick}>Get Location</button>
            </div>
        </div>
    )
}
