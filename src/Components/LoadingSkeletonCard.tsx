import { type ReactElement } from 'react'

export default function LoadingSkeletonCard(): ReactElement {
    return (
        <div>
            <div className="p-7 bg-gray-800 h-screen">
                <div className="animate-pulse bg-gray-300 rounded h-48 mb-4"></div>
                <div className="animate-pulse bg-gray-300 rounded h-6 w-3/4 mb-2"></div>
                <div className="animate-pulse bg-gray-300 rounded h-4 w-1/2 mb-4"></div>
                <div className="space-y-2">
                    <div className="animate-pulse bg-gray-300 rounded h-4 w-full"></div>
                    <div className="animate-pulse bg-gray-300 rounded h-4 w-5/6"></div>
                    <div className="animate-pulse bg-gray-300 rounded h-4 w-2/3"></div>
                </div>
            </div>
        </div>
    )
}
