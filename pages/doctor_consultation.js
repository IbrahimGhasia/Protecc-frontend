import Navbar_Doc from "../Components/Header/Navbar_Doc"
import TextArea from "../Components/UI/TextArea"
import Checkbox from "../Components/UI/Checkbox"
import { useRef, useState } from "react"
import { useNotification } from "@web3uikit/core"
import Link from "next/link"

export default function Home() {
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

            dispatch({
                type: "success",
                title: "Encrypted data with Lit",
                message: "Succesfully encrypted your data!",
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
        <div>
            <Navbar_Doc />
            <div>
                <div>
                    <h3 className="text-xl px-8 font-bold">Doctor Consultation Notes</h3>
                    <hr className="my-2 h-px bg-gray-700 border-1 dark:bg-gray-700" />
                </div>

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
                        label="Social History (Habits, recent travels, exposure to pets)"
                        placeholder="Enter your Social History"
                        ref={socialHistoryRef}
                    />

                    <TextArea
                        label="Alergies"
                        placeholder="Specify Alergies If you have any"
                        ref={alergiesRef}
                    />
                </div>

                <p className="text-lg px-8">Investigation Advised - </p>
                <div className="flex items-center mr-4 px-8 mt-4">
                    <div
                        className="grid gap-6 mb-6 md:grid-cols-7 px-8"
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
                    <TextArea label="Treatment Given" ref={treatmentGivenRef} required={true} />
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
    )
}
