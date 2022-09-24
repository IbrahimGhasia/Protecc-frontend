import React from "react"

const DoctorCard = () => {
    return (
        <div className="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-10">
                <img
                    className="mb-3  h-28  object-cover rounded-full shadow-lg"
                    src="/docimg.jpg"
                    alt="Doctor"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    Dr. Mehta
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">General Physician</span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                    <a
                        href="#"
                        className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Allow Access
                    </a>
                    <a
                        href="#"
                        className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                    >
                        Revoke Access
                    </a>
                </div>
            </div>
        </div>
    )
}

export const PatientCard = ({ profileURL, name, date,time, handleClick }) => {
    return (
        <div className="w-full max-w-[200px] py-3 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center py-0">
                <img
                    className="mb-0  h-16  object-cover rounded-full shadow-lg "
                    src={profileURL}
                    alt="Doctor"
                />
                <h5 className="mb-0 text-lg font-medium text-gray-900 dark:text-white">{name}</h5>
                <span className="text-xs font-bold text-gray-500 dark:text-gray-400">Time :- {time}</span>
                <span className="text-xs font-bold text-gray-500 dark:text-gray-400">Date: {date}</span>
                <div className="flex mt-0 space-x-3 md:mt-0">
                    <button
                        onClick={handleClick}
                        className="inline-flex items-center py-1 px-2 text-xs mt-2 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Accept Appointment
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DoctorCard
