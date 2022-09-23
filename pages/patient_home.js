import { ConnectButton } from "@rainbow-me/rainbowkit"
import Link from "next/link"
import Navbar from "../Components/Header/Navbar"
import toast, { Toaster } from "react-hot-toast"
import { useEffect, useState } from "react"
import { signIn, useSession } from "next-auth/react"
import { useAccount, useSignMessage, useNetwork } from "wagmi"
import { useRouter } from "next/router"
import axios from "axios"
import User from "./User"
import { useNotification } from "@web3uikit/core"
import lit from "../lib/lit"
import tableland from "../lib/tableland"

export default function Home() {
    const [walletConnected, setWalletConnected] = useState()

    const { isConnected, address } = useAccount()
    const { chain } = useNetwork()
    const { status } = useSession()
    const { signMessageAsync } = useSignMessage()
    const { push } = useRouter()

    useEffect(() => {
        const handleAuth = async () => {
            const userData = { address, chain: chain.id, network: "evm" }

            const { data } = await axios.post("/api/auth/request-message", userData, {
                headers: {
                    "content-type": "application/json",
                },
            })

            const message = data.message

            const signature = await signMessageAsync({ message })
            console.log(signature)

            // redirect user after success authentication to '/user' page
            const { url } = await signIn("credentials", {
                message,
                signature,
                redirect: false,
                // callbackUrl: "/user",
            })
            /**
             * instead of using signIn(..., redirect: "/user")
             * we get the url from callback and push it to the router to avoid page refreshing
             */
            push(url)
        }
        if (status === "unauthenticated" && isConnected) {
            handleAuth()
        }

        if (isConnected) {
            setWalletConnected(true)
        } else {
            setWalletConnected(false)
        }
    }, [status, isConnected])

    const account = useAccount().address

    useEffect(() => {
        fetchEHR()
    }, [])

    const [patientDetails, setPatientDetails] = useState({})
    const [dataNotAvaialable, setDataNotAvailable] = useState()

    async function fetchEHR() {
        const tables = await tableland.checkExistingTable()
        if (tables.length === 0) {
            console.log("Need to register!")
            setDataNotAvailable(true)
        } else {
            setDataNotAvailable(false)
            const decryptedObject = await tableland
                .readFromTable(tables[0].name)
                .then((res) => lit.decryptObject(res, account))
            setPatientDetails(JSON.parse(decryptedObject["PatientDetails"]))
            console.log(JSON.parse(decryptedObject["PatientDetails"]))
        }
    }

    const ehrDetails = Object.keys(patientDetails).map((k) => (
        <li key={k}>
            {k} : {patientDetails[k]}
        </li>
    ))

    return (
        <div>
            <Navbar />
            <div className="grid v-screen place-items-center mt-5">
                <ConnectButton />
                {/* <User /> */}
            </div>

            {walletConnected ? (
                <div>
                    {dataNotAvaialable ? (
                        <div className="mt-5 grid v-screen place-items-center">
                            <div
                                className="p-4 mb-4 mt-4 text-lg text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800"
                                role="alert"
                            >
                                <span className="font-medium">
                                    You have not registed before! Please register first.
                                </span>

                                <Link href="/patient_edit">
                                    <div className="text-center">
                                        <button className="mt-2 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2">
                                            Register Now
                                        </button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div className="ml-4 mr-4 mt-10 md:ml-20 md:mr-20 p-8 border-2 rounded-lg">
                            <div>
                                <h5 className="text-2xl md:text-4xl mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                                    {patientDetails.FirstName} {patientDetails.LastName}
                                </h5>
                                <hr className="my-2 h-px bg-gray-700 border-2 dark:bg-gray-700" />
                                <ul className="text-md md:text-2xl">{ehrDetails}</ul>

                                <Link href="/patient_edit">
                                    <div className="text-center">
                                        <button className="mt-2 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2">
                                            Edit Profile
                                        </button>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div className="grid v-screen place-items-center">
                    <div
                        className="p-4 mb-4 mt-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                        role="alert"
                    >
                        <span className="font-medium">Wallet Not Connected!</span> Please Connect
                        your wallet
                    </div>
                </div>
            )}
        </div>
    )
}
