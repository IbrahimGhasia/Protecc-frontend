import { ConnectButton } from "@rainbow-me/rainbowkit"
import Link from "next/link"
import Navbar from "../Components/Header/Navbar"
import toast, { Toaster } from "react-hot-toast"
import { useAccount } from "wagmi"
import { useEffect, useState } from "react"
import { useNotification } from "@web3uikit/core"
import lit from "../lib/lit";
import tableland from "../lib/tableland";

export default function Home() {
    const account = useAccount().address;

    useEffect(() => {
        fetchEHR();
    }, []);

    const [patientDetails, setPatientDetails] = useState({});

    async function fetchEHR() {
        const tables = await tableland.checkExistingTable();
        if (tables.length === 0) {
            console.log("Need to register!");
          }
          else {
            const decryptedObject = await tableland.readFromTable(tables[0].name).then((res) => lit.decryptObject(res, account));
            setPatientDetails(JSON.parse(decryptedObject["PatientDetails"]));
            console.log(JSON.parse(decryptedObject["PatientDetails"]));
          }
    }

    const ehrDetails = Object.keys(patientDetails).map(k => (
        <li
         key={k}
        >{k} : {patientDetails[k]}</li>
      ));

    return (
        <div className="dark:bg-gray-800">
            <Navbar />
            <div className="grid v-screen place-items-center mt-5">
                <ConnectButton />
            </div>

            {useAccount().isConnected ? (
                <div className="ml-4 mr-4 mt-10 md:ml-20 md:mr-20 p-8 border-2 rounded-lg">
                    <div>
                        <h5 className="text-2xl md:text-4xl mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                            {patientDetails.FirstName}{" "}{patientDetails.LastName}
                        </h5>
                        <hr className="my-2 h-px bg-gray-700 border-2 dark:bg-gray-700" />

                        <ul className="text-md md:text-2xl">
                            {ehrDetails}
                        </ul>

                        <Link href="/patient_edit">
                            <div className="text-center">
                                <button className="mt-2 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2">
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
