import React from "react"
import Link from "next/link"

const PatientCard = ({  profileURL, name, date, time, accepted, handleClick}) => {
    return (
        <div className="w-full max-w-sm py-1 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center py-0">
                <img
                    className="mb-0 w-16 object-cover rounded-full shadow-lg "
                    src={profileURL}
                    alt={name}
                />
                <h5 className="mb-0 text-lg font-medium text-gray-900 dark:text-white">{name}</h5>
            
                <span className="text-xs font-bold text-gray-500 dark:text-gray-400">{date}</span>
                <span className="text-xs font-bold text-gray-500 dark:text-gray-400">Time: {time}</span>

                <div className="mt-2">
                    {accepted ? (<Link href="/doctor_consultation">
                        <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                            Consultation Notes
                        </button>
                    </Link>) : (
                        <button
                        onClick={handleClick}
                        className="inline-flex items-center py-1 px-2 text-xs mt-2 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Accept Appointment
                    </button>
                    )
                        }
                    
                </div>
            </div>
        </div>
    )
}

export default PatientCard
