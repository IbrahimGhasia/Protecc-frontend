import Input from "../Components/UI/Input"
import Select from "../Components/UI/Select"
import Navbar from "../Components/Header/Navbar"
import TextArea from "../Components/UI/TextArea"
import { useEffect, useRef, useState } from "react"
import Checkbox from "../Components/UI/Checkbox"
import lit from "../lib/lit"
import tableland from "../lib/tableland"

import { useNotification } from "@web3uikit/core"
import { useAccount } from "wagmi"

export default function Home(props) {
    const [walletConnected, setWalletConnected] = useState()

    const dispatch = useNotification()

    const { isConnected, address } = useAccount()

    const [display, setDisplay] = useState()
    console.log(useAccount().address)

    useEffect(() => {
        if (address) {
            setDisplay(true)
        } else {
            setDisplay(false)
        }

        if (isConnected) {
            setWalletConnected(true)
        } else {
            setWalletConnected(false)
        }
    }, [isConnected])

    /*----------------------------- For Getting CheckBox Values UseState's ------------------------- */
    const [medHisChecked, setMedHisChecked] = useState([])

    const [generalChecked, setGeneralChecked] = useState([])
    const [throatChecked, setThroatChecked] = useState([])
    const [bloodChecked, setBloodChecked] = useState([])
    const [muscleChecked, setMuscleChecked] = useState([])
    const [heartAndLungsChecked, setHeartAndLungsChecked] = useState([])
    const [kidneyChecked, setKidneyChecked] = useState([])
    const [earsChecked, setEarsChecked] = useState([])
    const [nervousChecked, setNervousChecked] = useState([])
    const [stomachChecked, setStomachChecked] = useState([])
    const [eyesChecked, setEyesChecked] = useState([])
    const [skinChecked, setSkinChecked] = useState([])
    const [womenOnlyChecked, setWomenOnlyChecked] = useState([])

    /*----------------------------- Handle Events For CheckBox Values ------------------------------------- */

    const handleMedHisCheck = (event) => {
        let updatedList = [...medHisChecked]
        if (event.target.checked) {
            updatedList = [...medHisChecked, event.target.value]
        } else {
            updatedList.splice(medHisChecked.indexOf(event.target.value), 1)
        }
        setMedHisChecked(updatedList)
    }

    const handleGeneralCheck = (event) => {
        let updatedList = [...generalChecked]
        if (event.target.checked) {
            updatedList = [...generalChecked, event.target.value]
        } else {
            updatedList.splice(generalChecked.indexOf(event.target.value), 1)
        }
        setGeneralChecked(updatedList)
    }

    const handleThroatCheck = (event) => {
        let updatedList = [...throatChecked]
        if (event.target.checked) {
            updatedList = [...throatChecked, event.target.value]
        } else {
            updatedList.splice(throatChecked.indexOf(event.target.value), 1)
        }
        setThroatChecked(updatedList)
    }

    const handleBloodCheck = (event) => {
        let updatedList = [...bloodChecked]
        if (event.target.checked) {
            updatedList = [...bloodChecked, event.target.value]
        } else {
            updatedList.splice(bloodChecked.indexOf(event.target.value), 1)
        }
        setBloodChecked(updatedList)
    }

    const handleMuscleCheck = (event) => {
        let updatedList = [...muscleChecked]
        if (event.target.checked) {
            updatedList = [...muscleChecked, event.target.value]
        } else {
            updatedList.splice(muscleChecked.indexOf(event.target.value), 1)
        }
        setMuscleChecked(updatedList)
    }

    const handleHeartAndLungsCheck = (event) => {
        let updatedList = [...heartAndLungsChecked]
        if (event.target.checked) {
            updatedList = [...heartAndLungsChecked, event.target.value]
        } else {
            updatedList.splice(heartAndLungsChecked.indexOf(event.target.value), 1)
        }
        setHeartAndLungsChecked(updatedList)
    }

    const handleKidneyCheck = (event) => {
        let updatedList = [...kidneyChecked]
        if (event.target.checked) {
            updatedList = [...kidneyChecked, event.target.value]
        } else {
            updatedList.splice(kidneyChecked.indexOf(event.target.value), 1)
        }
        setKidneyChecked(updatedList)
    }

    const handleEarsCheck = (event) => {
        let updatedList = [...earsChecked]
        if (event.target.checked) {
            updatedList = [...earsChecked, event.target.value]
        } else {
            updatedList.splice(earsChecked.indexOf(event.target.value), 1)
        }
        setEarsChecked(updatedList)
    }

    const handleNervousSystemCheck = (event) => {
        let updatedList = [...nervousChecked]
        if (event.target.checked) {
            updatedList = [...nervousChecked, event.target.value]
        } else {
            updatedList.splice(nervousChecked.indexOf(event.target.value), 1)
        }
        setNervousChecked(updatedList)
    }

    const handleStomachCheck = (event) => {
        let updatedList = [...stomachChecked]
        if (event.target.checked) {
            updatedList = [...stomachChecked, event.target.value]
        } else {
            updatedList.splice(stomachChecked.indexOf(event.target.value), 1)
        }
        setStomachChecked(updatedList)
    }

    const handleEyesCheck = (event) => {
        let updatedList = [...eyesChecked]
        if (event.target.checked) {
            updatedList = [...eyesChecked, event.target.value]
        } else {
            updatedList.splice(eyesChecked.indexOf(event.target.value), 1)
        }
        setEyesChecked(updatedList)
    }

    const handleSkinCheck = (event) => {
        let updatedList = [...skinChecked]
        if (event.target.checked) {
            updatedList = [...skinChecked, event.target.value]
        } else {
            updatedList.splice(skinChecked.indexOf(event.target.value), 1)
        }
        setSkinChecked(updatedList)
    }

    const handleWomenOnlyCheck = (event) => {
        let updatedList = [...womenOnlyChecked]
        if (event.target.checked) {
            updatedList = [...womenOnlyChecked, event.target.value]
        } else {
            updatedList.splice(womenOnlyChecked.indexOf(event.target.value), 1)
        }
        setWomenOnlyChecked(updatedList)
    }

    /*----------------------------------- Refs For Storing Input Data ----------------------------------------*/
    const fnameRef = useRef()
    const lnameRef = useRef()
    const ageRef = useRef()
    const sexRef = useRef()
    const dobRef = useRef()
    const occupationRef = useRef()
    const emrgencyContactRef = useRef()
    const aadhaarIDRef = useRef()
    const addressRef = useRef()
    const marStatusRef = useRef()
    const currentSymptomsRef = useRef()
    const otherConsultanceRef = useRef()
    const familyDiseaseRef = useRef()
    const socialHistoryRef = useRef()
    const alergiesRef = useRef()

    /*----------------------------------------- Submit Button Handler ---------------------------------------*/
    const submitData = async (event) => {
        event.preventDefault()

        const firstName = fnameRef.current.value.length
        const lastName = lnameRef.current.value.length
        const age = ageRef.current.value.length
        const sex = sexRef.current.value.length
        const dateOfBirth = dobRef.current.value.length
        const occupation = occupationRef.current.value.length
        const emergencyContact = emrgencyContactRef.current.value.length
        const aadhaarId = aadhaarIDRef.current.value.length
        const addressInput = addressRef.current.value.length
        const maratialStatus = marStatusRef.current.value.length

        /* ------------------------------ JSON Object of all Values ------------------------------------------*/
        if (
            firstName > 0 &&
            lastName > 0 &&
            age > 0 &&
            sex > 0 &&
            dateOfBirth > 0 &&
            occupation > 0 &&
            emergencyContact > 0 &&
            aadhaarId > 0 &&
            addressInput > 0 &&
            maratialStatus > 0
        ) {
            const editFormData = {
                FirstName: fnameRef.current.value,
                LastName: lnameRef.current.value,
                Age: ageRef.current.value,
                Sex: sexRef.current.value,
                DateOfBirth: dobRef.current.value,
                Occupation: occupationRef.current.value,
                EmergencyContact: emrgencyContactRef.current.value,
                AadhaardId: aadhaarIDRef.current.value,
                Address: addressRef.current.value,
                MaratialStatus: marStatusRef.current.value,
                CurrentSymptoms: currentSymptomsRef.current.value,
                OtherConsultance: otherConsultanceRef.current.value,
                // FamilyDiseases: familyDiseaseRef.current.value,
                // SocialHistory: socialHistoryRef.current.value,
                // Alergies: alergiesRef.current.value,
                PastMedicalHistory: medHisChecked,
                SystemReview: {
                    General: generalChecked,
                    Throat: throatChecked,
                    Blood: bloodChecked,
                    Muscle: muscleChecked,
                    HeartAndLungs: heartAndLungsChecked,
                    Kidney: kidneyChecked,
                    Ears: earsChecked,
                    NervousSystem: nervousChecked,
                    Stomach: stomachChecked,
                    Eyes: eyesChecked,
                    Skin: skinChecked,
                    WomenOnly: womenOnlyChecked,
                },
            }
            console.log(editFormData)
            // Encrypting the data
            const encryptedEHR = await lit.encryptObject(editFormData, address)
            dispatch({
                type: "success",
                title: "Encrypted data with Lit",
                message: "Succesfully encrypted your data!",
                position: "bottomL",
            })

            const tableName = await tableland.createTable()

            await tableland.writeToTable(tableName, encryptedEHR)
            console.log("Table created and written to")

            dispatch({
                type: "success",
                title: "TableLand write done",
                message: "Data securely saved to Polygon!",
                position: "bottomL",
            })
        } else {
            dispatch({
                type: "error",
                title: "Incomplete data field",
                message: "Please fill all the (mandotory) * data field",
                position: "bottomL",
            })
        }
    }

    return (
        <div>
            <Navbar />
            {walletConnected ? (
                <div>
                    <div>
                        <h3 className="text-xl px-8 font-bold">Personal Information</h3>
                        <hr className="my-2 h-px bg-gray-700 border-1 dark:bg-gray-700" />
                    </div>
                    <form>
                        <div className="grid gap-6 mb-6 md:grid-cols-2 px-8">
                            <Input
                                type="text"
                                label="First Name"
                                placeholder="Enter Your First Name"
                                ref={fnameRef}
                                required={true}
                            />
                            <Input
                                type="text"
                                label="Last Name"
                                placeholder="Enter Your Last Name"
                                ref={lnameRef}
                                required={true}
                            />
                        </div>

                        <div className="grid gap-6 mb-6 md:grid-cols-3 px-8">
                            <Input
                                type="number"
                                label="Age"
                                placeholder="Enter Your Age"
                                ref={ageRef}
                                required={true}
                            />

                            <Select
                                label="Sex"
                                title="Select your Gender"
                                opt1="Male"
                                opt2="Female"
                                opt3="Non-Binary"
                                opt4="Don't want to disclose"
                                ref={sexRef}
                            />

                            <Input
                                type="date"
                                label="Date of Birth"
                                placeholder="Enter your Date of Birth"
                                ref={dobRef}
                                required={true}
                            />
                        </div>

                        <div className="grid gap-6 mb-6 md:grid-cols-3 px-8">
                            <Input
                                type="text"
                                label="Occupation"
                                placeholder="Enter your Occupation"
                                ref={occupationRef}
                                required={true}
                            />

                            <Input
                                type="text"
                                label="Emergency Contact"
                                placeholder="Enter Emergency Contact"
                                ref={emrgencyContactRef}
                                required={true}
                            />

                            <Input
                                type="number"
                                label="Aadhaar ID"
                                placeholder="Enter your Aadhaar Card Number"
                                ref={aadhaarIDRef}
                                required={true}
                            />
                        </div>

                        <div className="grid gap-6 mb-6 md:grid-cols-2 px-8">
                            <TextArea
                                label="Address"
                                placeholder="Enter your permanent address"
                                ref={addressRef}
                                required={true}
                            />
                            <Input
                                type="text"
                                label="Marital Status"
                                placeholder="Enter your Martial Status"
                                ref={marStatusRef}
                                required={true}
                            />
                        </div>

                        <div>
                            <h3 className="text-xl px-8 font-bold">Medical Information</h3>
                            <hr className="my-2 h-px bg-gray-700 border-1 dark:bg-gray-700" />
                        </div>

                        <div className="grid gap-6 mb-6 md:grid-cols-2 px-8">
                            <TextArea
                                label="Current Symptoms"
                                placeholder="Breifly describe your current symptoms ..."
                                ref={currentSymptomsRef}
                            />
                            <TextArea
                                label="List the name of other Consultance"
                                placeholder="Please enter the names of other practitioners you have seen for this problem ..."
                                ref={otherConsultanceRef}
                            />
                        </div>

                        <div>
                            <h3 className="text-xl px-8 font-bold">Past Medical History</h3>
                            <hr className="my-2 h-px bg-gray-700 border-1 dark:bg-gray-700" />
                        </div>

                        <p className="text-lg px-8">Do you now or have you ever had :</p>
                        <div className="flex items-center mr-4 px-8 mt-4">
                            <div
                                className="grid gap-6 mb-6 md:grid-cols-5 px-8"
                                onChange={handleMedHisCheck}
                            >
                                <Checkbox label="Diabetes" />
                                <Checkbox label="High blood pressure" />
                                <Checkbox label="High Cholesterol" />
                                <Checkbox label="Goiter" />
                                <Checkbox label="Cancer" />
                                <Checkbox label="Leukemia" />
                                <Checkbox label="Psoriasis" />
                                <Checkbox label="Angina" />
                                <Checkbox label="Heart Problems" />
                                <Checkbox label="Heart Murmur" />
                                <Checkbox label="Pneumonia" />
                                <Checkbox label="Pulmonary embolism" />
                                <Checkbox label="Asthma" />
                                <Checkbox label="Emphysema" />
                                <Checkbox label="Stroke" />
                                <Checkbox label="Epilepsy (seizures)" />
                                <Checkbox label="Cataracts" />
                                <Checkbox label="Kidney disease" />
                                <Checkbox label="Kidney stones" />
                                <Checkbox label="Crohn's disease" />
                                <Checkbox label="Colitis" />
                                <Checkbox label="Anemia" />
                                <Checkbox label="Jaundice" />
                                <Checkbox label="Hepatitis" />
                                <Checkbox label="Stomach or peptic ulcer" />
                                <Checkbox label="Rheumatic fever" />
                                <Checkbox label="Tuberculosis" />
                                <Checkbox label="HIV / AIDS" />
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl px-8 font-bold">System Review</h3>
                            <hr className="my-2 h-px bg-gray-700 border-1 dark:bg-gray-700" />
                        </div>

                        <p className="text-lg px-8 mb-4">
                            In the past month, have you had any of the following problems?
                        </p>

                        <div className="grid md:grid-cols-4 gap-6">
                            <div>
                                <p className="text-lg px-8 font-semibold ml-8">GENERAL</p>

                                <div className="ml-8" onChange={handleGeneralCheck}>
                                    <Checkbox label="Recent Weight Gain" />
                                    <Checkbox label="Recent Weight Loss" />
                                    <Checkbox label="Fatigue" />
                                    <Checkbox label="Weakness" />
                                    <Checkbox label="Fever" />
                                    <Checkbox label="Night Sweats" />
                                </div>
                            </div>

                            <div>
                                <p className="text-lg px-8 font-semibold ml-8">
                                    MUSCLE/JOINTS/BONES
                                </p>

                                <div className="ml-8" onChange={handleMuscleCheck}>
                                    <Checkbox label="Numbness" />
                                    <Checkbox label="Joint Pain" />
                                    <Checkbox label="Muscle Weakness" />
                                    <Checkbox label="Joint Swelling" />
                                </div>
                            </div>

                            <div>
                                <p className="text-lg px-8 font-semibold ml-8">EARS</p>

                                <div className="ml-8" onChange={handleEarsCheck}>
                                    <Checkbox label="Ringing in ears" />
                                    <Checkbox label="Loss of hearing" />
                                </div>
                            </div>

                            <div>
                                <p className="text-lg px-8 font-semibold ml-8">EYES</p>

                                <div className="ml-8" onChange={handleEyesCheck}>
                                    <Checkbox label="Pain" />
                                    <Checkbox label="Redness" />
                                    <Checkbox label="Loss of vision" />
                                    <Checkbox label="Double or blurred vission" />
                                    <Checkbox label="Dryness" />
                                </div>
                            </div>

                            <div>
                                <p className="text-lg px-8 font-semibold ml-8">THROAT</p>

                                <div className="ml-8" onChange={handleThroatCheck}>
                                    <Checkbox label="Frequent sore throats" />
                                    <Checkbox label="Hoarseness" />
                                    <Checkbox label="Difficulty in swalling" />
                                    <Checkbox label="Pain in jaw" />
                                </div>
                            </div>

                            <div>
                                <p className="text-lg px-8 font-semibold ml-8">HEART AND LUNGS</p>

                                <div className="ml-8" onChange={handleHeartAndLungsCheck}>
                                    <Checkbox label="Chest Pain" />
                                    <Checkbox label="Palpitations" />
                                    <Checkbox label="Shortness of breath" />
                                    <Checkbox label="Fainting" />
                                    <Checkbox label="Swollen legs or feet" />
                                    <Checkbox label="Cough" />
                                </div>
                            </div>

                            <div>
                                <p className="text-lg px-8 font-semibold ml-8">Nervous System</p>

                                <div className="ml-8" onChange={handleNervousSystemCheck}>
                                    <Checkbox label="Headaches" />
                                    <Checkbox label="Dizziness" />
                                    <Checkbox label="Fainting" />
                                    <Checkbox label="Numbness" />
                                    <Checkbox label="Memory Loss" />
                                </div>
                            </div>

                            <div>
                                <p className="text-lg px-8 font-semibold ml-8">SKIN</p>

                                <div className="ml-8" onChange={handleSkinCheck}>
                                    <Checkbox label="Redness" />
                                    <Checkbox label="Rash" />
                                    <Checkbox label="Nodules/Bumps" />
                                    <Checkbox label="Hair Loss" />
                                    <Checkbox label="Color changes of hands and feet" />
                                </div>
                            </div>

                            <div>
                                <p className="text-lg px-8 font-semibold ml-8">BLOOD</p>

                                <div className="ml-8" onChange={handleBloodCheck}>
                                    <Checkbox label="Anemia" />
                                    <Checkbox label="Clots" />
                                </div>
                            </div>

                            <div>
                                <p className="text-lg px-8 font-semibold ml-8">
                                    KIDNEY/URINE/BLADDER
                                </p>

                                <div className="ml-8" onChange={handleKidneyCheck}>
                                    <Checkbox label="Frequent or painfull urination" />
                                    <Checkbox label="Blood in urine" />
                                </div>
                            </div>

                            <div>
                                <p className="text-lg px-8 font-semibold ml-8">
                                    STOMACH AND INTENSTINES
                                </p>

                                <div className="ml-8" onChange={handleStomachCheck}>
                                    <Checkbox label="Nausea" />
                                    <Checkbox label="Heartbum" />
                                    <Checkbox label="Stomach Pain" />
                                    <Checkbox label="Vomiting" />
                                    <Checkbox label="Yellow Jaundice" />
                                </div>
                            </div>

                            <div>
                                <p className="text-lg px-8 font-semibold ml-8">
                                    WOMEN ONLY <span className="text-sm">(if applicable)</span>
                                </p>

                                <div className="ml-8" onChange={handleWomenOnlyCheck}>
                                    <Checkbox label="Abnomal Pap Smear" />
                                    <Checkbox label="Irregular Periods" />
                                    <Checkbox label="Bleeding between periods" />
                                    <Checkbox label="PMS" />
                                </div>
                            </div>
                        </div>

                        {/* {display ? (
                            <div>
                                <div>
                                    <h3 className="text-xl px-8 font-bold mt-8">
                                        Doctor Consultation Notes
                                    </h3>
                                    <hr className="my-2 h-px bg-gray-700 border-1 dark:bg-gray-700" />
                                </div>

                                <div className="grid gap-6 mb-6 md:grid-cols-2 px-8">
                                    <TextArea
                                        label="Chief Complaint"
                                        placeholder="Breifly describe the complaints ..."
                                        // ref={currentSymptomsRef}
                                    />
                                    <TextArea
                                        label="History of Presenting Illness"
                                        placeholder="Breifly describe the presenting illness"
                                        // ref={otherConsultanceRef}
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
                                        className="grid gap-6 mb-6 md:grid-cols-4 px-8"
                                        // onChange={handleMedHisCheck}
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
                            </div>
                        ) : null} */}

                        <div className="text-center mt-5">
                            <button
                                type="submit"
                                onClick={submitData}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-md px-20 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
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
