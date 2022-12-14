import Navbar_Doc from "../Components/Header/Navbar_Doc"
import FileInput from "../Components/UI/FileInput"
import Input from "../Components/UI/Input"
import Select from "../Components/UI/Select"
import TextArea from "../Components/UI/TextArea"
import dynamic from "next/dynamic"
import { useRef, useState, useEffect } from "react"
import { WidgetProps } from "@worldcoin/id"
import { useNotification } from "@web3uikit/core"
import { useAccount } from "wagmi"
import lit from "../lib/lit"
import tableland from "../lib/tableland"
import { useRouter } from "next/router"

const WorldIDWidget = dynamic(() => import("@worldcoin/id").then((mod) => mod.WorldIDWidget), {
    ssr: false,
})

const widgetProps = {
    actionId: "wid_staging_0772643bf0d8ca641df9ae8fa2c22de0",
    signal: "user-id-1",
    enableTelemetry: true,
    appName: "Protecc",
    signalDescription: "Get your ticket to ConfCon 2023",
    theme: "dark",
    debug: true, // Recommended **only** for development
    onSuccess: (result) => console.log(result),
    onError: ({ code, detail }) => console.log({ code, detail }),
    onInitSuccess: () => console.log("Init successful"),
    onInitError: (error) => console.log("Error while initialization World ID", error),
}

export default function Home() {
    const dispatch = useNotification()
    const [walletConnected, setWalletConnected] = useState()
    const [spinner, setSpinner] = useState()
    const { isConnected, address } = useAccount()

    const router = useRouter()

    const fullNameRef = useRef()
    const mobileNoRef = useRef()
    const specializationRef = useRef()
    const countryRef = useRef()
    const stateRef = useRef()
    const cityRef = useRef()
    const genderRef = useRef()
    const medRegistrationRef = useRef()
    const registrationYearRef = useRef()
    const registrationCouncilRef = useRef()
    const eduDegreeRef = useRef()
    const collegeRef = useRef()
    const yearOfCompletionRef = useRef()
    const experienceRef = useRef()
    const medRegistrationProofRef = useRef()

    useEffect(() => {
        if (isConnected) {
            setWalletConnected(true)
        } else {
            setWalletConnected(false)
        }
    }, [isConnected])

    const submitData = async (event) => {
        event.preventDefault()
        // console.log(medRegistrationProofRef.current.files[1].name)

        const fullName = fullNameRef.current.value.length
        const mobileNo = mobileNoRef.current.value.length
        const specialisation = specializationRef.current.value.length
        const country = countryRef.current.value.length
        const state = stateRef.current.value.length
        const city = cityRef.current.value.length
        const gender = genderRef.current.value.length

        /* ------------------------------ JSON Object of all Values ------------------------------------------*/
        if (
            fullName > 0 &&
            mobileNo > 0 &&
            specialisation > 0 &&
            country > 0 &&
            state > 0 &&
            city > 0 &&
            gender > 0
        ) {
            const doctorEditFormData = {
                FullName: fullNameRef.current.value,
                MobileNo: mobileNoRef.current.value,
                Specialization: specializationRef.current.value,
                Country: countryRef.current.value,
                State: stateRef.current.value,
                City: cityRef.current.value,
                Gender: genderRef.current.value,
                MedicalRegistrationNumber: medRegistrationRef.current.value,
                RegistrationYear: registrationYearRef.current.value,
                RegistrationCouncil: registrationCouncilRef.current.value,
                EducationalDegree: eduDegreeRef.current.value,
                CollegeUniversity: collegeRef.current.value,
                YearOfCompletetion: yearOfCompletionRef.current.value,
                Experience: experienceRef.current.value,
            }
            console.log(doctorEditFormData)
            setSpinner(true)
            // Encrypting the data
            const encryptedEHR = await lit.encryptObject(doctorEditFormData, address)
            dispatch({
                type: "success",
                title: "Encrypted data with Lit",
                message: "Succesfully encrypted your data!",
                position: "bottomL",
            })

            const tableName = await tableland.createTable("doctorProfileStage2")

            await tableland.writeToTable(tableName, encryptedEHR)
            console.log("Table created and written to")

            dispatch({
                type: "success",
                title: "TableLand write done",
                message: "Data securely saved to Polygon!",
                position: "bottomL",
            })

            dispatch({
                type: "success",
                title: "Data Submitted",
                message: "Data Submitted Successfully",
                position: "bottomL",
            })

            router.push("/doctor_home")
        } else {
            dispatch({
                type: "error",
                title: "Incomplete data field",
                message: "Please fill all the * (mandatory) data field",
                position: "bottomL",
            })
        }
    }

    return (
        <div>
            <Navbar_Doc />
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
                                label="Full Name"
                                placeholder="Enter Your Full Name"
                                ref={fullNameRef}
                                required="required"
                            />
                            <Input
                                type="number"
                                label="Mobile Number"
                                placeholder="Enter Your Mobile Number"
                                ref={mobileNoRef}
                                required="required"
                            />
                        </div>

                        <div className="grid gap-6 mb-6 md:grid-cols-5 px-8">
                            <Input
                                type="text"
                                label="Specialisation"
                                placeholder="Enter your specialisation"
                                ref={specializationRef}
                                required="required"
                            />
                            <Input
                                type="text"
                                label="Country"
                                placeholder="Enter name of your country"
                                required="required"
                                ref={countryRef}
                            />
                            <Input
                                type="text"
                                label="State"
                                placeholder="Enter name of your state"
                                required="required"
                                ref={stateRef}
                            />
                            <Input
                                type="text"
                                label="City"
                                placeholder="Enter name of your city"
                                required="required"
                                ref={cityRef}
                            />
                            <Select
                                label="Gender"
                                title="Select your Gender"
                                opt1="Male"
                                opt2="Female"
                                opt3="Non-Binary"
                                opt4="Don't want to disclose"
                                ref={genderRef}
                            />
                        </div>

                        <h3 className="text-xl px-8 font-bold">Profile Verification</h3>
                        <hr className="my-2 h-px bg-gray-700 border-1 dark:bg-gray-700" />

                        <div className="grid gap-6 mb-6 md:grid-cols-3 px-8">
                            <Input
                                type="number"
                                label="Medical Registration Number"
                                placeholder="Enter your medical registration number"
                                ref={medRegistrationRef}
                            />
                            <Input
                                type="number"
                                label="Registration year"
                                placeholder="Enter the registration year"
                                ref={registrationYearRef}
                            />
                            <Input
                                type="text"
                                label="Registration Council"
                                placeholder="Enter your registration council"
                                ref={registrationCouncilRef}
                            />
                        </div>

                        <div className="grid gap-6 mb-6 md:grid-cols-0 px-8">
                            <FileInput
                                label="Medical Registration Proof"
                                ref={medRegistrationProofRef}
                            />
                        </div>

                        <h3 className="text-xl px-8 font-bold">Educational Qualification</h3>
                        <hr className="my-2 h-px bg-gray-700 border-1 dark:bg-gray-700" />

                        <div className="grid gap-6 mb-6 md:grid-cols-2 px-8">
                            <TextArea
                                label="Educational Degree"
                                placeholder="Enter your educational degree"
                                ref={eduDegreeRef}
                            />

                            <TextArea
                                label="College/University"
                                placeholder="Enter your College/University"
                                ref={collegeRef}
                            />
                        </div>

                        <div className="grid gap-6 mb-6 md:grid-cols-2 px-8">
                            <Input
                                type="text"
                                label="Year of Completeion"
                                placeholder="Enter your year of completion"
                                ref={yearOfCompletionRef}
                            />

                            <Input
                                type="number"
                                label="Experience"
                                placeholder="Enter your years of experience"
                                ref={experienceRef}
                            />
                        </div>

                        <div className="grid gap-6 mb-6 md:grid-cols-0 px-8">
                            <FileInput label="Identity Proof (Upload Govt. ID)" />
                        </div>

                        <div className="grid v-screen place-items-center mt-8">
                            <div className="text-center">
                                {/* <WorldIDWidget {...widgetProps} /> */}

                                <button
                                    type="submit"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-md px-20 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    <a
                                        href={`https://developer.worldcoin.org/hosted/wid_staging_6c961c3261944f2c2062f803aa731c29?signal=${address}`}
                                    >
                                        Verify your Identity with WorldCoin
                                    </a>
                                </button>

                                <div className="text-center mt-5">
                                    {!spinner ? (
                                        <button
                                            type="submit"
                                            onClick={submitData}
                                            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-md px-20 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                            Submit
                                        </button>
                                    ) : (
                                        <button
                                            disabled
                                            type="button"
                                            className="mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-md px-20 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
                                        >
                                            <svg
                                                role="status"
                                                className="inline mr-3 w-4 h-4 text-white animate-spin"
                                                viewBox="0 0 100 101"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                    fill="#E5E7EB"
                                                />
                                                <path
                                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                    fill="currentColor"
                                                />
                                            </svg>
                                            Loading...
                                        </button>
                                    )}
                                </div>
                            </div>
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
