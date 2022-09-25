import React from "react"
import Link from "next/link"

const Navbar_home = () => {
    return (
        <nav className=" px-2 md:px-4 py-1 rounded">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link href="/">
                    <a className="flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            className="ml-3 mt-3"
                            fill="white"
                        >
                            <path
                                d="M8.434 20.566c1.335 0 2.591-.52 3.535-1.464l7.134-7.133a5.008 5.008 0 0 0-.001-7.072 4.969 4.969 0 0 0-3.536-1.463c-1.335 0-2.59.52-3.534 1.464l-7.134 7.133a5.01 5.01 0 0 0-.001 7.072 4.971 4.971 0 0 0 3.537 1.463zm5.011-14.254a2.979 2.979 0 0 1 2.12-.878c.802 0 1.556.312 2.122.878a3.004 3.004 0 0 1 .001 4.243l-2.893 2.892-4.242-4.244 2.892-2.891z"
                                className="scale-150 scale"
                            ></path>
                        </svg>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                            PROTECC
                        </span>
                    </a>
                </Link>

                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4  rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
                        <li>
                            <Link href="/patient_home">
                                <button className="text-white bg-gradient-to-r from-blue-500 to-sky-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-base px-5 py-2.5 text-center">
                                    Sign in as Patient
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link href="/doctor_home">
                                <button className="text-white bg-gradient-to-r from-blue-500 to-sky-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-base px-5 py-2.5 text-center">
                                    Sign in as Doctor
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar_home
