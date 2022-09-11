import Navbar_Doc from "../Components/Header/Navbar_Doc";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
export default function Home() {
    return (
        <div>
            <Navbar_Doc />
            <div className="grid v-screen place-items-center mt-5">
                <ConnectButton />

                <div className="mt-10">
                    <div className="block p-6 max-w-4xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Rajesh Shah
                        </h5>
                        <ul className="text-2xl">
                            <li>Mobile Number : XX02331155</li>
                            <li>Specialisation: MBBS</li>
                            <li>Location: Surat, Gujarat, India</li>
                            <li>Gender: Male</li>
                        </ul>

                        <Link href="/doctor_edit">
                            <button className="mt-3 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                Edit Profile
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
