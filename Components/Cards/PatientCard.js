import React from "react"
import Link from "next/link"
import { useState, useRef } from "react"
import TextArea from "../UI/TextArea"
import Checkbox from "../UI/Checkbox"
import { useNotification } from "@web3uikit/core"

const PatientCard = ({ profileURL, name, date, time, accepted, conversation, handleClick }) => {
    const [modalOpen, setModalOpen] = useState(false)
    const changeModalState = () => {
        setModalOpen((prev) => !prev)
    }

    const dispatch = useNotification()

    const chiefComplaintRef = useRef()
    const historyOfIllnesRef = useRef()
    const familyDiseaseRef = useRef()
    const socialHistoryRef = useRef()
    const alergiesRef = useRef()
    const provisionalDiagnosisRef = useRef()
    const treatmentGivenRef = useRef()

    const [investigationAdvised, setInvestigationAdvised] = useState([])

    const handleInvestigationAdvised = (event) => {
        let updatedList = [...investigationAdvised]
        if (event.target.checked) {
            updatedList = [...investigationAdvised, event.target.value]
        } else {
            updatedList.splice(investigationAdvised.indexOf(event.target.value), 1)
        }
        setInvestigationAdvised(updatedList)
    }

    const submitData = async (event) => {
        event.preventDefault()
        if (
            chiefComplaintRef.current.value.length > 0 &&
            historyOfIllnesRef.current.value.length > 0 &&
            provisionalDiagnosisRef.current.value.length > 0 &&
            treatmentGivenRef.current.value.length
        ) {
            const doctorConsultationData = {
                ChiefComplaint: chiefComplaintRef.current.value,
                HistoryOfIllness: historyOfIllnesRef.current.value,
                FamilyDisease: familyDiseaseRef.current.value,
                SocialHistory: socialHistoryRef.current.value,
                Alergies: alergiesRef.current.value,
                InvestigationAdvised: investigationAdvised,
                ProvisionalDiagnosis: provisionalDiagnosisRef.current.value,
                TreatmentGiven: treatmentGivenRef.current.value,
            }
            console.log(doctorConsultationData)
            await conversation.send(JSON.stringify(doctorConsultationData))

            dispatch({
                type: "success",
                title: "Sent case record to patient!",
                message: "Patient can now view the case record!",
                position: "bottomL",
            })
        } else {
            dispatch({
                type: "error",
                title: "Incomplete data field",
                message: "Please fill all the Mandatory (*) data field!",
                position: "bottomL",
            })
        }
    }

    return (
        <div className="w-full max-w-md py-1 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center py-0">
                <img
                    className="w-16 object-cover rounded-full shadow-lg "
                    src={profileURL}
                    alt={name}
                />
                <h5 className="mb-0 text-md font-medium text-gray-900 dark:text-white">{name}</h5>

                <span className="text-xs font-bold text-gray-500 dark:text-gray-400">{date}</span>
                <span className="text-xs font-bold text-gray-500 dark:text-gray-400">
                    Time: {time}
                </span>

                <div className="mt-2">
                    {accepted ? (
                        <div>
                            <button
                                class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                type="button"
                                data-modal-toggle="defaultModal"
                                onClick={changeModalState}
                            >
                                Consultation Notes
                            </button>

                            <div className="grid place-items-center">
                                <div
                                    id="defaultModal"
                                    tabindex="-1"
                                    // aria-hidden="true"

                                    class={`${
                                        modalOpen ? "" : "hidden"
                                    } overflow-y-auto overflow-x-hidden fixed grid place-items-center w-full md:inset-0 h-modal md:h-full justify-center items-center`}
                                >
                                    <div class="relative p-4 w-full max-w-4xl h-full md:h-auto">
                                        <div class="relative bg-gray-200 rounded-lg shadow dark:bg-gray-700">
                                            <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                                    Doctor Consultation Notes
                                                </h3>
                                                <button
                                                    type="button"
                                                    onClick={changeModalState}
                                                    class={`text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white`}
                                                    data-modal-toggle="defaultModal"
                                                >
                                                    <svg
                                                        aria-hidden="true"
                                                        class="w-5 h-5"
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
                                                    <span class="sr-only">Close modal</span>
                                                </button>
                                            </div>
                                            <div class="p-6 space-y-6">
                                                <div className="grid gap-6 mb-6 md:grid-cols-2 px-8">
                                                    <TextArea
                                                        label="Chief Complaint"
                                                        placeholder="Breifly describe the complaints ..."
                                                        ref={chiefComplaintRef}
                                                        required={true}
                                                    />
                                                    <TextArea
                                                        label="History of Presenting Illness"
                                                        placeholder="Breifly describe the presenting illness"
                                                        ref={historyOfIllnesRef}
                                                        required={true}
                                                    />
                                                </div>

                                                <div className="grid gap-6 mb-6 md:grid-cols-3 px-8">
                                                    <TextArea
                                                        label="Family Diseases"
                                                        placeholder="Enter your Family Diseases"
                                                        ref={familyDiseaseRef}
                                                    />
                                                    <TextArea
                                                        label="Social History"
                                                        placeholder="Enter your Social History (Habits, recent travels, exposure to pets)"
                                                        ref={socialHistoryRef}
                                                    />

                                                    <TextArea
                                                        label="Alergies"
                                                        placeholder="Specify Alergies If you have any"
                                                        ref={alergiesRef}
                                                    />
                                                </div>

                                                <p className="text-lg px-8">
                                                    Investigation Advised -{" "}
                                                </p>
                                                <div className="flex items-center mr-4 px-8 mt-4">
                                                    <div
                                                        className="grid gap-6 mb-6 md:grid-cols-4 px-8"
                                                        onChange={handleInvestigationAdvised}
                                                    >
                                                        <Checkbox label="Blood" />
                                                        <Checkbox label="Urine" />
                                                        <Checkbox label="Sputum" />
                                                        <Checkbox label="CSF" />
                                                        <Checkbox label="X-Ray" />
                                                        <Checkbox label="CT Scan" />
                                                        <Checkbox label="MRI" />
                                                    </div>
                                                </div>

                                                <div className="grid gap-6 mb-6 md:grid-cols-2 px-8">
                                                    <TextArea
                                                        label="Provisional Diagnosis"
                                                        ref={provisionalDiagnosisRef}
                                                        required={true}
                                                    />
                                                    <TextArea
                                                        label="Treatment Given"
                                                        ref={treatmentGivenRef}
                                                        required={true}
                                                    />
                                                </div>

                                                <div className="flex justify-center text-center mt-5">
                                                    <button
                                                        type="submit"
                                                        onClick={submitData}
                                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-md px-20 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                    >
                                                        Submit
                                                    </button>
                                                    <Link href="/doctor_prescription">
                                                        <button
                                                            type="submit"
                                                            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-md px-10 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                        >
                                                            Add Prescription
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <button
                            onClick={handleClick}
                            className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Accept Appointment
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PatientCard
