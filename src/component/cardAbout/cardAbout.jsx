import React from 'react'

const CardAbout = ({ name, position, description }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out dark:bg-[#1E293B] dark:bg-opacity-50">
            <div className="mb-4 flex items-center">
                <div className="bg-blue-500 rounded-full h-12 w-12 flex items-center justify-center text-white text-lg font-bold">
                    {name.charAt(0)}
                </div>
                <div className="ml-4">
                    <h3 className="text-xl font-semibold dark:text-white">{name}</h3>
                    <p className="text-gray-600 dark:text-white">{position}</p>
                </div>
            </div>
            <p className="text-gray-700 dark:text-white">{description}</p>
        </div>
    )
}

export default CardAbout
