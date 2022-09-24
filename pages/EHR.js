import React from "react"
import Link from "next/link"
import { useState } from "react"
import Navbar from "../Components/Header/Navbar"

const EHR = () => {
    const [modalOpen, setModalOpen] = useState(false)
    const changeModalState = () => {
        setModalOpen((prev) => !prev)
    }
    const [appointment, setAppointment] = useState([])

    const [formValue, setFormValue] = useState({
        date: "",
        time: "",
        consulate: "General Physician",
    })

    const handleChange = (e) => {
        setFormValue((p) => ({ ...p, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setAppointment((p) => [
            ...p,
            { ...formValue, id: new Date().toISOString(), doctor: "Dr. Metha" },
        ])
        setModalOpen(false)
    }

    return (
        <div>
            <Navbar />
            <header className="text-gray-600 bg-black/10 body-font">
                <div className="container mx-auto flex flex-wrap py-5 flex-row md:flex-row width-100 justify-between">
                    <nav className="flex flex-wrap items-center text-base float-left">
                        <Link href="/patient_home">
                            <a className="mr-5 hover:text-gray-900 ">My EHR</a>
                        </Link>

                        <a className="mr-5 hover:text-gray-900 ">Medication</a>
                        <Link href="/EHR">
                        <a className="mr-5 hover:text-gray-900 ">Health Reports</a>
                        </Link>
                        <a className="mr-5 hover:text-gray-900 ">Support</a>
                    </nav>
                    <nav className="flex flex-wrap items-center text-base float-right ">
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white mx-10">
                            Schedule Appointment
                        </span>
                        <button
                            className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-10 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
                            type="button"
                            onClick={changeModalState}
                        >
                            Book
                        </button>
                    </nav>
                </div>
            </header>
            <div
                className={`${
                    modalOpen ? "" : "hidden"
                } absolute top-0 left-0 z-40 w-screen h-screen bg-black/10 backdrop-blur `}
            />
            <div
                tabindex="-1"
                aria-hidden="true"
                className={`${
                    modalOpen ? "" : "hidden"
                } overflow-y-auto overflow-x-hidden fixed top-1/2 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full align-center flex justify-center items-center`}
            >
                <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button
                            type="button"
                            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                            onClick={() => setModalOpen(false)}
                        >
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="py-6 px-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                                Book an Appointment
                            </h3>
                            <form className="space-y-6" action="#" onSubmit={handleSubmit}>
                                <div>
                                    <label
                                        for="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Select Date
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        value={formValue.date}
                                        onChange={handleChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        for=""
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Time
                                    </label>
                                    <input
                                        type="time"
                                        name="time"
                                        value={formValue.time}
                                        onChange={handleChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        for="password"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Select Area of Consulation
                                    </label>
                                    <select
                                        type="dropdown"
                                        value={formValue.consulate}
                                        onChange={handleChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required
                                        name="consulate"
                                    >
                                        <option value="GP" selected>
                                            General Physician
                                        </option>
                                        <option value="GP">General Physician</option>
                                        <option value="GP">General Physician</option>
                                        <option value="GP">General Physician</option>
                                        <option value="GP">General Physician</option>
                                        <option value="GP">General Physician</option>
                                    </select>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Confirm Appointment
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto flex py-10 gap-4">
                <div className="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700  pt-5">
                    <div className="flex flex-col items-center pt-0">
                        <img
                            className="mb-3  h-32  object-cover rounded-full shadow-lg"
                            src="/patient.jpg"
                            alt="Doctor"
                        />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                            Dave Jay
                        </h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Details:-</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Age :- 19</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            Blood Group :- O+
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            Height :- 1.70m
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            Weight :- 65kg
                        </span>
                        <button className="text-white bg-gradient-to-r from-blue-500 to-sky-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-base px-5 py-2.5 text-center my-6">
                                    Connect Smart Watch 
                                </button>
                        <div className="flex mt-4 space-x-3 md:mt-6"></div>
                    </div>
                </div>
                <div className="flex gap-4 flex-1  p-4 bg-white rounded-lg border border-gray-200 shadow-md">
                    <div className="flex justify-between flex-col">
                        <div className="relative h-32 aspect-square mx-auto">
                            <img className="mb-3" src="/yellowchart.svg" alt="Doctor" />
                            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                General
                            </p>
                        </div>
                        <div className="relative h-32 aspect-square mx-auto">
                            <img className="mb-3" src="/bluechart.svg" alt="Doctor" />
                            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                Hydration
                            </p>
                        </div>
                    </div>
                    <div className="relative my-auto h-full">
                        <img className="mb-3" src="/graph.svg" alt="Doctor" />
                        <p className=" text-center">
                            Health Graph
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EHR
