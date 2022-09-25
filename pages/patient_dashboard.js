import { useCallback, useEffect, useState } from "react"
import Navbar from "../Components/Header/Navbar"
import { Client } from "@xmtp/xmtp-js"
import { useSigner, useAccount } from "wagmi"
import { useNotification } from "@web3uikit/core"
import tableland from "../lib/tableland"
import Input from "../Components/UI/Input"

import Card from "../Components/Cards/Card"
import doctor from "./../data/doctors"
import DoctorCard from "../Components/Doctor Card Profile"
import Link from "next/link"
import lit from "../lib/lit"

export default function Home() {
    const [modalOpen, setModalOpen] = useState(false)
    const changeModalState = () => {
        setModalOpen((prev) => !prev)
    }

    const { data: signer, isError, isLoading } = useSigner()
    const { address, isConnecting, isDisconnected } = useAccount()
    const dispatch = useNotification()
    const [client, setClient] = useState(null)

    const initClient = useCallback(
        async (wallet) => {
            if (wallet && !client) {
                try {
                    setClient(await Client.create(wallet))
                } catch (e) {
                    console.error(e)
                    setClient(null)
                }
            }
        },
        [client]
    )

    async function populateAppointments() {
        const tables = await tableland.checkExistingTable("appointmentTest")
        console.log(tables)
        const appointment = await tableland.readAppointmentsFromTable(tables[0].name)
        console.log(appointment)
        setAppointments([{ ...appointment, accepted: false }])
    }

    const disconnect = () => {
        setClient(null)
    }

    useEffect(() => {
        signer ? initClient(signer) : disconnect()
    }, [signer])

    useEffect(() => {
        if (!client) return

        const listConversations = async () => {
            console.log("Waiting for new conversations!")
            const stream = await client.conversations.stream()
            var newConvo
            for await (const conversation of stream) {
                console.log(`New conversation started with ${conversation.peerAddress}`)
                // Say hello to your new friend
                newConvo = conversation
                const messages = await conversation.messages()
                console.log(messages)
                const lastMsg = messages[messages.length - 1].content
                addDoctor([
                    {
                        ...JSON.parse(lastMsg),
                        address: `${conversation.peerAddress}`,
                        conversation: newConvo,
                    },
                ])
                break
            }
            for await (const message of await newConvo.streamMessages()) {
                console.log(`[${message.senderAddress}]: ${message.content}`)
                break
            }
        }
        listConversations()
    }, [client])

    async function sendMessage() {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        // get the end user
        const signer = provider.getSigner()
        const xmtp = await Client.create(signer)
        // Start a conversation with XMTP
        const conversation = await xmtp.conversations.newConversation(address)
        // Load all messages in the conversation
        const messages = await conversation.messages()
        // Send a message
        await conversation.send("gm")
        // Listen for new messages in the conversation
        for await (const message of await conversation.streamMessages()) {
            console.log(`[${message.senderAddress}]: ${message.content}`)
        }
    }

    const [appointments, setAppointments] = useState([])

    const [formValue, setFormValue] = useState({
        address: "",
        date: "",
        time: "",
        consulate: "General Physician",
    })

    const [doctors, addDoctor] = useState([])

    const handleChange = (e) => {
        setFormValue((p) => ({ ...p, [e.target.name]: e.target.value }))
    }

    const submitAppointment = async (e) => {
        e.preventDefault()

        console.log(formValue)
        const tableName = await tableland.createAppointmentTable()
        console.log(tableName)

        formValue.address = address
        await tableland.writeUnencryptedToTable(tableName, formValue)
        console.log("Table created and written to")

        dispatch({
            type: "success",
            title: "TableLand write done",
            message: "Appointment submitted succesfully!",
            position: "bottomL",
        })

        setAppointment((p) => [
            ...p,
            { ...formValue, id: new Date().toISOString(), doctor: "Dr. Metha" },
        ])

        setModalOpen(false)
    }
    useEffect(() => {
        populateAppointments()
    }, [])

    async function giveLitAccess() {
        const tables = await tableland.checkExistingTable("myEHRTest2")
        if (tables.length === 0) {
            console.log("Need to register!")
        } else {
            const decryptedObject = await tableland
                .readFromTable(tables[0].name)
                .then((res) => lit.decryptObject(res, address))
            console.log(decryptedObject)
            // await lit.giveAccess(encryptedObject, address, doctors[0].address)
            dispatch({
                type: "success",
                title: "Permissions updated",
                message: "Succesfully gave your EHR access to doctor!",
                position: "bottomL",
            })
            // Let doctor know!
            await doctors[0].conversation.send(decryptedObject["PatientDetails"])
        }
    }

    const appointmentDetails = Object.keys(appointments).map((k) => (
        <Card
            appointment={appointments[k]}
            // name={appointments[k].address}
            // date={appointments[k].date}
            // time={appointments[k].time}
            // accepted={appointments[k].accepted}
            // handleClick={sendMessage}
            key={k}
        />
    ))

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
                            <a className="mr-5 hover:text-gray-900 ">Health Stats</a>
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
                            <form className="space-y-6" action="#" onSubmit={submitAppointment}>
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
                                        <option value="GP">Peadetrician</option>
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

            <div className="flex pt-2 container mx-auto">
                <div className="flex-auto max-w-auto mx-2">
                    <p className="font-bold font-xl"> Upcoming Appointment </p>

                    {appointments.length === 0 ? (
                        <p className="text-green-500 font-bold text-lg">No Upcoming Appointment</p>
                    ) : (
                        appointmentDetails
                    )}
                </div>
                <div className="flex-auto max-w-sm right-0 mx-2">
                    <div className="flex flex-col max-w-auto mx-2 py-2 gap-4">
                        <p className="font-bold font-xl">Who can Access your data? </p>

                        {doctors.length === 0 && (
                            <p className="text-green-500 font-bold text-lg">
                                You are free from every doctor keep eating apples
                            </p>
                        )}
                        {doctors &&
                            doctors.map((doc) => (
                                <DoctorCard
                                    doctor={doc}
                                    allowAccess={giveLitAccess}
                                    key={doc.FullName}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
