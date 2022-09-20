import { useState } from "react"
import Navbar from "../Components/Header/Navbar"

export default function Home() {
    const [modalOpen, setModalOpen] = useState(false)
    const changeModalState = () => {
        setModalOpen((prev) => !prev)
    }
    return (
        <div className="dark:bg-gray-800">
            <Navbar />
            <header className="text-gray-600 bg-black/10 body-font">
                <div className="container mx-auto flex flex-wrap py-5 flex-col md:flex-row">
                    <nav className="flex flex-wrap items-center text-base justify-center">
                        <a className="mr-5 hover:text-gray-900">Overview</a>
                        <a className="mr-5 hover:text-gray-900">Tab A</a>
                        <a className="mr-5 hover:text-gray-900">Tab B</a>
                        <a className="mr-5 hover:text-gray-900">Tab C</a>
                    </nav>
                </div>
            </header>

            <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 w-full">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                        Schedule Appointment
                    </span>

                    <div className="flex md:order-2">
                        <button
                            className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            type="button"
                            onClick={changeModalState}
                        >
                            Book
                        </button>
                        <button
                            data-collapse-toggle="navbar-sticky"
                            type="button"
                            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-sticky"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
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
                            <form className="space-y-6" action="#">
                                <div>
                                    <label
                                        for="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Select Date
                                    </label>
                                    <input
                                        type="date"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        placeholder="name@company.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label
                                        for="password"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Time
                                    </label>
                                    <input
                                        type="time"
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
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required
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
            <div className="flex">
                <div className="flex-auto max-w-auto mx-2">
                    <label> Previous Reports </label>

                    <a
                        href="#"
                        class="block p-8 max-w-auto mx-auto my-4 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                    >
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Cold and Cough
                        </h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">
                            Consulting Doctor :-{" "}
                            <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                Dr. Mehta
                            </a>
                        </p>
                        <p class="font-normal text-gray-700 dark:text-gray-400">
                            Prescribed Medicines :- Vicks Action 500
                        </p>
                        <p class="font-normal text-gray-700 dark:text-gray-400">
                            Doctor Notes :- General Viral Cold
                        </p>
                    </a>
                    <a
                        href="#"
                        class="block p-8 max-w-auto mx-auto my-4 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                    >
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Cold and Cough
                        </h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">
                            Consulting Doctor :-{" "}
                            <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                Dr. Mehta
                            </a>
                        </p>
                        <p class="font-normal text-gray-700 dark:text-gray-400">
                            Prescribed Medicines :- Vicks Action 500
                        </p>
                        <p class="font-normal text-gray-700 dark:text-gray-400">
                            Doctor Notes :- General Viral Cold
                        </p>
                    </a>
                </div>
                <div className="flex-auto max-w-sm right-0 mx-2">
                    <label> Who all can Access your Medical Data</label>
                    <a
                        href="#"
                        class="block p-8 max-w-auto mx-auto my-4 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                    >
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Cold and Cough
                        </h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">
                            Consulting Doctor :-{" "}
                            <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                Dr. Mehta
                            </a>
                        </p>
                        <p class="font-normal text-gray-700 dark:text-gray-400">
                            Prescribed Medicines :- Vicks Action 500
                        </p>
                        <p class="font-normal text-gray-700 dark:text-gray-400">
                            Doctor Notes :- General Viral Cold
                        </p>
                    </a>
                    <a
                        href="#"
                        class="block p-8 max-w-auto mx-auto my-4 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                    >
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Cold and Cough
                        </h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">
                            Consulting Doctor :-{" "}
                            <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                Dr. Mehta
                            </a>
                        </p>
                        <p class="font-normal text-gray-700 dark:text-gray-400">
                            Prescribed Medicines :- Vicks Action 500
                        </p>
                        <p class="font-normal text-gray-700 dark:text-gray-400">
                            Doctor Notes :- General Viral Cold
                        </p>
                    </a>
                    <a
                        href="#"
                        class="block p-8 max-w-auto mx-auto my-4 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                    >
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Cold and Cough
                        </h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">
                            Consulting Doctor :-{" "}
                            <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                Dr. Mehta
                            </a>
                        </p>
                        <p class="font-normal text-gray-700 dark:text-gray-400">
                            Prescribed Medicines :- Vicks Action 500
                        </p>
                        <p class="font-normal text-gray-700 dark:text-gray-400">
                            Doctor Notes :- General Viral Cold
                        </p>
                    </a>
                </div>
            </div>
        </div>
    )
}
