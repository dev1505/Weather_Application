import { type ReactElement } from 'react'

export default function DaysWeather(): ReactElement {

    const days = ["Today", "Tommorow", "Day After Tommorow"]

    return (
        <div>
            <div className='flex justify-evenly gap-3 justify-center items-center align-middle px-8'>
                {
                    days?.map((data, index) => {
                        return (
                            <div key={index} className='bg-slate-400 w-full rounded'>
                                <div>
                                    {data}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
