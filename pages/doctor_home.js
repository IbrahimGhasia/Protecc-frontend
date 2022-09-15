import Navbar_Doc from "../Components/Header/Navbar_Doc"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import Link from "next/link"
import { useAccount } from "wagmi"
import { useEffect } from "react"
import toast, { Toaster } from "react-hot-toast"

export default function Home() {
    useEffect(() => {
        toast(
            "Wallet Connected",
            {
                duration: 4000,
                position: "bottom-right",

                // Styling
                style: {},
                className: "",

                // Custom Icon
                icon: "👏",

                // Change colors of success/error/loading icon
                iconTheme: {
                    primary: "#000",
                    secondary: "#fff",
                },

                // Aria
                ariaProps: {
                    role: "status",
                    "aria-live": "polite",
                },
            },
            []
        )
    })
    return (
        <div>
            <Navbar_Doc />
            <div className="grid v-screen place-items-center mt-5">
                <ConnectButton />
            </div>

            {useAccount().isConnected ? (
                <div className="ml-4 mr-4 mt-10 md:ml-20 md:mr-20 p-8 border-2 rounded-lg">
                    <div>
                        <h5 className="text-2xl md:text-4xl mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                            Rajesh Shah
                        </h5>
                        <hr className="my-2 h-px bg-gray-700 border-2 dark:bg-gray-700" />

                        <ul className="text-md md:text-2xl">
                            <li>Mobile Number : XX02331155</li>
                            <li>Specialisation: MBBS</li>
                            <li>Location: Surat, Gujarat, India</li>
                            <li>Gender: Male</li>
                        </ul>

                        <Link href="/doctor_edit">
                            <div className="text-center">
                                <button className="mt-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2">
                                    Edit Profile
                                </button>
                            </div>
                        </Link>
                    </div>
                    <Toaster />
                </div>
            ) : (
                <div className="grid v-screen place-items-center">
                    <div
                        class="p-4 mb-4 mt-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                        role="alert"
                    >
                        <span class="font-medium">Wallet Not Connected!</span> Please Connect your
                        wallet
                    </div>
                </div>
            )}
        </div>
    )
}
