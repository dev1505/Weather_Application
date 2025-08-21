import { type ReactElement } from 'react'

type propsType = {
    a: number,
    b?: string,
}

export default function Test(props: propsType): ReactElement {
    const { a } = { ...props }
    return (
        <div>
            <div>
                {a}
            </div>
        </div>
    )
}
