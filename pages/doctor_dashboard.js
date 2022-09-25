import Link from "next/link"
import { useEffect, useState } from "react"
import Navbar_Doc from "../Components/Header/Navbar_Doc"
// import { PatientCard } from "../Components/Doctor Card Profile/index"
import PatientCard from "../Components/Cards/PatientCard"
import tableland from "../lib/tableland"
import { useSigner, useAccount } from "wagmi"
import { Client } from "@xmtp/xmtp-js"
import lit from "../lib/lit"
import { useNotification } from "@web3uikit/core"

export default function Home() {
    useEffect(() => {
        populateAppointments()
    }, [])

    const dispatch = useNotification()

    const [appointments, setAppointments] = useState([]);
    const [doctorProfile, setDoctorProfile] = useState({});
    const [patientDetails, setPatientDetails] = useState({});

    const { data: signer, isError, isLoading } = useSigner()
    const { address, isConnecting, isDisconnected } = useAccount()

    async function populateAppointments() {
        const tables = await tableland.checkExistingTable("appointmentStage")
        console.log(tables)
        if (tables.length === 0) {
            console.log("Need to register!")
        } else {
        const appointment = await tableland.readAppointmentsFromTable(tables[0].name)
        console.log(appointment)
        setAppointments([{ ...appointment, accepted: false }])
        }
    }

    useEffect(() => {
        async function populateDoctorProfile() {
            const profile = await fetchDoctorProfile();
            setDoctorProfile(JSON.parse(profile));
        }
        populateDoctorProfile();
    }, [])

    async function sendMessage() {
        const xmtp = await Client.create(signer)
    // Start a conversation with XMTP
    const conversation = await xmtp.conversations.newConversation(
        address
    )
    // Send a message
    await conversation.send(JSON.stringify(doctorProfile))
    // Add dispatch here
    dispatch({
        type: "success",
        title: "Appointment accepted!",
        message: "Request for data access sent to user!",
        position: "bottomL",
    })
    setAppointments([{...appointments[0], accepted: true, conversation: conversation}]);
    console.log(appointments)
    // Listen for new messages in the conversation
    for await (const message of await conversation.streamMessages()) {
    console.log(`${message.content}`)
    setPatientDetails(JSON.parse(message.content))
    }
    }

    async function fetchDoctorProfile() {
        const tables = await tableland.checkExistingTable("doctorProfileStage")
        if (tables.length === 0) {
            console.log("Need to register!")
        } else {
            const decryptedObject = await tableland
                .readFromTable(tables[0].name)
                .then((res) => lit.decryptObject(res, address))
            const profile = decryptedObject["PatientDetails"]
            return profile
        }
    }

    const appointmentDetails = Object.keys(appointments).map((k) => (
        <PatientCard
            profileURL="/patient.jpg"
            name={appointments[k].address}
            date={appointments[k].date}
            time={appointments[k].time}
            accepted={appointments[k].accepted}
            handleClick={sendMessage}
            conversation={appointments[k].conversation}
            patientDetails={patientDetails}
            key={k}
        />
    ))

    return (
        <div className="">
            <Navbar_Doc />
            <div className="flex pt-2 container mx-auto">
                <div className="flex-auto max-w-auto mx-2 my-2">
                    <p className="font-bold font-2xl "> Today Schedule </p>
                    <div className="flex flex-wrap gap-3 py-4">{appointmentDetails}</div>
                </div>

                <div className="flex-auto max-w-xs right-0 mx-2">
                    <div className="flex flex-col max-w-auto mx-2 my-2 gap-4">
                        <p className="font-bold font-xl">My Details </p>
                        <div className="w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex flex-col items-center pt-0">
                                <img
                                    className="my-3  h-32  object-cover rounded-full shadow-lg"
                                    src="/docimg.jpg"
                                    alt="Doctor"
                                />
                                <h5 className="my-1 text-xl font-medium text-gray-900 dark:text-white">
                                    Dr. {doctorProfile.FullName}
                                </h5>
                                <span className="mb-1 text-md font-medium text-gray-900 dark:text-white">
                                Specialisation: General Physician
                                </span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    Average Rating :- 4.2/5.0
                                </span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    Avaliable Slot :- 8/15
                                </span>
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    Patients :- 130
                                </span>
                                <span className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                                    Consultations :- 241
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
