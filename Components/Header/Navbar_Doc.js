import React from "react"
import Link from "next/link"
const Navbar_Doc = () => {
    const [modalOpen, setModalOpen] = React.useState(false)
    const changeModalState = () => {
        setModalOpen((prev) => !prev)
    }
    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link href="/">
                    <a className="flex items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            className="mr-3"
                            fill="currentColor"
                        >
                            <path d="M8.434 20.566c1.335 0 2.591-.52 3.535-1.464l7.134-7.133a5.008 5.008 0 0 0-.001-7.072 4.969 4.969 0 0 0-3.536-1.463c-1.335 0-2.59.52-3.534 1.464l-7.134 7.133a5.01 5.01 0 0 0-.001 7.072 4.971 4.971 0 0 0 3.537 1.463zm5.011-14.254a2.979 2.979 0 0 1 2.12-.878c.802 0 1.556.312 2.122.878a3.004 3.004 0 0 1 .001 4.243l-2.893 2.892-4.242-4.244 2.892-2.891z"></path>
                        </svg>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                            Protecc
                        </span>
                    </a>
                </Link>

                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
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
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link href="/">
                                <a
                                    className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                    aria-current="page"
                                >
                                    Home
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/doctor_home">
                                <a className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    Profile
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/doctor_edit">
                                <a className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    Edit
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/doctor_dashboard">
                                <a className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                    Dashboard
                                </a>
                            </Link>
                        </li>
                        <li>
                            <div
                                onClick={changeModalState}
                                className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z"></path>
                                </svg>
                            </div>
                        </li>
                    </ul>
                </div>

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
                    } overflow-y-auto overflow-x-hidden fixed top-0 right-0 z-50 h-screen`}
                >
                    <div className="px-6 lg:px-8 w-96 h-screen">
                            <div
                                className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
                                id="notification"
                            >
                                <div className="2xl:w-4/12 bg-gray-50 h-screen overflow-y-auto p-8 absolute right-0">
                                    <div className="flex items-center justify-between">
                                        <p
                                            tabindex="0"
                                            className="focus:outline-none text-2xl font-semibold leading-6 text-gray-800"
                                        >
                                            Notifications
                                        </p>
                                        <button
                                            role="button"
                                            aria-label="close modal"
                                            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-md cursor-pointer"
                                            onClick={() => setModalOpen(false)}
                                        >
                                            <img
                                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/notification_1-svg1.svg"
                                                alt="icon"
                                            />
                                        </button>
                                    </div>

                                    <div className="w-full p-3 mt-8 bg-white rounded flex">
                                        <div
                                            tabindex="0"
                                            aria-label="heart icon"
                                            role="img"
                                            className="focus:outline-none w-8 h-8 border rounded-full border-gray-200 flex items-center justify-center"
                                        >
                                            <img
                                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/notification_1-svg2.svg"
                                                alt="icon"
                                            />
                                        </div>
                                        <div className="pl-3">
                                            <p
                                                tabindex="0"
                                                className="focus:outline-none text-sm leading-none"
                                            >
                                                <span className="text-indigo-700">James Doe</span>{" "}
                                                favourited an{" "}
                                                <span className="text-indigo-700">item</span>
                                            </p>
                                            <p
                                                tabindex="0"
                                                className="focus:outline-none text-xs leading-3 pt-1 text-gray-500"
                                            >
                                                2 hours ago
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-full p-3 mt-4 bg-white rounded  flex flex-shrink-0">
                                        <div
                                            tabindex="0"
                                            aria-label="group icon"
                                            role="img"
                                            className="focus:outline-none w-8 h-8 border rounded-full border-gray-200 flex flex-shrink-0 items-center justify-center"
                                        >
                                            <img
                                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/notification_1-svg3.svg"
                                                alt="icon"
                                            />
                                        </div>
                                        <div className="pl-3 w-full">
                                            <div className="flex items-center justify-between w-full">
                                                <p
                                                    tabindex="0"
                                                    className="focus:outline-none text-sm leading-none"
                                                >
                                                    <span className="text-indigo-700">Sash</span>{" "}
                                                    added you to the group:{" "}
                                                    <span className="text-indigo-700">
                                                        UX Designers
                                                    </span>
                                                </p>
                                              
                                            </div>
                                            <p
                                                tabindex="0"
                                                className="focus:outline-none text-xs leading-3 pt-1 text-gray-500"
                                            >
                                                2 hours ago
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-full p-3 mt-4 bg-white rounded flex">
                                        <div
                                            tabindex="0"
                                            aria-label="post icon"
                                            role="img"
                                            className="focus:outline-none w-8 h-8 border rounded-full border-gray-200 flex items-center justify-center"
                                        >
                                            <img
                                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/notification_1-svg5.svg"
                                                alt="icon"
                                            />
                                        </div>
                                        <div className="pl-3">
                                            <p
                                                tabindex="0"
                                                className="focus:outline-none text-sm leading-none"
                                            >
                                                <span className="text-indigo-700">Sarah</span>{" "}
                                                posted in the thread:{" "}
                                                <span className="text-indigo-700">
                                                    Update gone wrong
                                                </span>
                                            </p>
                                            <p
                                                tabindex="0"
                                                className="focus:outline-none text-xs leading-3 pt-1 text-gray-500"
                                            >
                                                2 hours ago
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-full p-3 mt-4 bg-red-100 rounded flex items-center">
                                        <div
                                            tabindex="0"
                                            aria-label="storage icon"
                                            role="img"
                                            className="focus:outline-none w-8 h-8 border rounded-full border-red-200 flex items-center flex-shrink-0 justify-center"
                                        >
                                            <img
                                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/notification_1-svg6.svg"
                                                alt="icon"
                                            />
                                        </div>
                                        <div className="pl-3 w-full flex items-center justify-between">
                                            <p
                                                tabindex="0"
                                                className="focus:outline-none text-sm leading-none text-red-700"
                                            >
                                                Low on storage: 2.5/32gb remaining
                                            </p>
                                            <p
                                                tabindex="0"
                                                className="focus:outline-none text-xs leading-3 cursor-pointer underline text-right text-red-700"
                                            >
                                                Manage
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-full p-3 mt-4 bg-white rounded flex">
                                        <div
                                            tabindex="0"
                                            aria-label="loading icon"
                                            role="img"
                                            className="focus:outline-none w-8 h-8 border rounded-full border-gray-200 flex items-center justify-center"
                                        >
                                            <img
                                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/notification_1-svg7.svg"
                                                alt="icon"
                                            />
                                        </div>
                                        <div className="pl-3">
                                            <p
                                                tabindex="0"
                                                className="focus:outline-none text-sm leading-none"
                                            >
                                                Shipmet delayed for order
                                                <span className="text-indigo-700"> #25551</span>
                                            </p>
                                            <p
                                                tabindex="0"
                                                className="focus:outline-none text-xs leading-3 pt-1 text-gray-500"
                                            >
                                                2 hours ago
                                            </p>
                                        </div>
                                    </div>
                             
                                    <div className="flex items-center justiyf-between">
                                        <hr className="w-full" />
                                        <p
                                            tabindex="0"
                                            className="focus:outline-none text-sm flex flex-shrink-0 leading-normal px-3 py-16 text-gray-500"
                                        >
                                            Thats it for now :)
                                        </p>
                                        <hr className="w-full" />
                                    </div>
                                </div>
                            </div>
                        </div>
                 
                </div>
            </div>
        </nav>
    )
}

export default Navbar_Doc
