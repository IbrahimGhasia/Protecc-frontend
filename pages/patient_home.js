import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import Navbar from "../Components/Header/Navbar";

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="grid v-screen place-items-center mt-5">
                <ConnectButton />

                <div className="mt-10">
                    <div className="block p-6 max-w-4xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Ibrahim Ghasia
                        </h5>
                        <ul className="text-2xl">
                            <li>Age : 20</li>
                            <li>Sex: Male</li>
                            <li>Date of Birth: 16/04/2002</li>
                            <li>Occupation: Student</li>
                            <li>Emergency Contact: Mom - XX23902210</li>
                            <li>Aadhar ID: ---- ---- ----</li>
                            <li>Address: Al-Haider Manzil, Khatriwad, Surat</li>
                        </ul>

                        <Link href="/patient_edit">
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
