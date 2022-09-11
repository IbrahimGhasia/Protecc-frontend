import Input from "../Components/UI/Input";
import Select from "../Components/UI/Select";
import Navbar from "../Components/Header/Navbar";
import TextArea from "../Components/UI/TextArea";
import { useRef, useState } from "react";
import Checkbox from "../Components/UI/Checkbox";

export default function Home(props) {
    // For geting checkbox values ...
    const [medHisChecked, setMedHisChecked] = useState([]);

    const handleMedHisCheck = (event) => {
        let updatedList = [...medHisChecked];
        if (event.target.checked) {
            updatedList = [...medHisChecked, event.target.value];
        } else {
            updatedList.splice(medHisChecked.indexOf(event.target.value), 1);
        }
        setMedHisChecked(updatedList);
    };

    /*------ Refs ------*/
    const fnameRef = useRef();
    const lnameRef = useRef();
    const ageRef = useRef();
    const sexRef = useRef();
    const dobRef = useRef();
    const occupationRef = useRef();
    const emrgencyContactRef = useRef();
    const aadhaarIDRef = useRef();
    const addressRef = useRef();
    const marStatusRef = useRef();
    const currentSymptomsRef = useRef();
    const otherConsultanceRef = useRef();
    const familyDiseaseRef = useRef();
    const socialHistoryRef = useRef();
    const alergiesRef = useRef();

    /*------ Submit Button Handler ------*/
    const submitData = (event) => {
        event.preventDefault();
        const editFormData = {
            FirstName: fnameRef.current.value,
            LastName: lnameRef.current.value,
            Age: ageRef.current.value,
            Sex: sexRef.current.value,
            DateOfBirth: dobRef.current.value,
            Occupation: occupationRef.current.value,
            EmergencyContact: emrgencyContactRef.current.value,
            AadhaardId: aadhaarIDRef.current.value,
            MaratialStatus: marStatusRef.current.value,
            CurrentSymptoms: currentSymptomsRef.current.value,
            OtherConsultance: otherConsultanceRef.current.value,
            FamilyDiseases: familyDiseaseRef.current.value,
            SocialHistory: socialHistoryRef.current.value,
            alergiesRef: alergiesRef.current.value,
        };
        console.log(editFormData);
        console.log(medHisChecked);
    };

    return (
        <div>
            <Navbar />
            <div>
                <h3 className="text-xl px-8 font-bold">Personal Information</h3>
                <hr className="my-2 h-px bg-gray-700 border-2 dark:bg-gray-700" />
            </div>
            <form>
                <div className="grid gap-6 mb-6 md:grid-cols-2 px-8">
                    <Input
                        type="text"
                        label="First Name"
                        placeholder="Enter Your First Name"
                        ref={fnameRef}
                    />
                    <Input
                        type="text"
                        label="Last Name"
                        placeholder="Enter Your Last Name"
                        ref={lnameRef}
                    />
                </div>

                <div className="grid gap-6 mb-6 md:grid-cols-3 px-8">
                    <Input
                        type="number"
                        label="Age"
                        placeholder="Enter Your Age"
                        ref={ageRef}
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
                    />
                </div>

                <div className="grid gap-6 mb-6 md:grid-cols-3 px-8">
                    <Input
                        type="text"
                        label="Occupation"
                        placeholder="Enter your Occupation"
                        ref={occupationRef}
                    />

                    <Input
                        type="text"
                        label="Emergency Contact"
                        placeholder="Enter Emergency Contact"
                        ref={emrgencyContactRef}
                    />

                    <Input
                        type="number"
                        label="Aadhaar ID"
                        placeholder="Enter your Aadhaar Card Number"
                        ref={aadhaarIDRef}
                    />
                </div>

                <div className="grid gap-6 mb-6 md:grid-cols-2 px-8">
                    <TextArea
                        label="Address"
                        placeholder="Enter your permanent address"
                        ref={addressRef}
                    />
                    <Input
                        type="text"
                        label="Marital Status"
                        placeholder="Enter your Martial Status"
                        ref={marStatusRef}
                    />
                </div>

                <div>
                    <h3 className="text-xl px-8 font-bold">
                        Medical Information
                    </h3>
                    <hr className="my-2 h-px bg-gray-700 border-2 dark:bg-gray-700" />
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
                    <h3 className="text-xl px-8 font-bold">
                        Past Medical History
                    </h3>
                    <hr className="my-2 h-px bg-gray-700 border-2 dark:bg-gray-700" />
                </div>

                <p className="text-lg px-8">
                    Do you now or have you ever had :
                </p>
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
                    <hr className="my-2 h-px bg-gray-700 border-2 dark:bg-gray-700" />
                </div>

                <p className="text-lg px-8 mb-4">
                    In the past month, have you had any of the following
                    problems?
                </p>

                <div className="grid grid-cols-4 gap-6">
                    <div>
                        <p className="text-lg px-8 font-semibold ml-8">
                            GENERAL
                        </p>

                        <div className="ml-8">
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

                        <div className="ml-8">
                            <Checkbox label="Numbness" />
                            <Checkbox label="Joint Pain" />
                            <Checkbox label="Muscle Weakness" />
                            <Checkbox label="Joint Swelling" />
                        </div>
                    </div>

                    <div>
                        <p className="text-lg px-8 font-semibold ml-8">EARS</p>

                        <div className="ml-8">
                            <Checkbox label="Ringing in ears" />
                            <Checkbox label="Loss of hearing" />
                        </div>
                    </div>

                    <div>
                        <p className="text-lg px-8 font-semibold ml-8">EYES</p>

                        <div className="ml-8">
                            <Checkbox label="Pain" />
                            <Checkbox label="Redness" />
                            <Checkbox label="Loss of vision" />
                            <Checkbox label="Double or blurred vission" />
                            <Checkbox label="Dryness" />
                        </div>
                    </div>

                    <div>
                        <p className="text-lg px-8 font-semibold ml-8">
                            THROAT
                        </p>

                        <div className="ml-8">
                            <Checkbox label="Frequent sore throats" />
                            <Checkbox label="Hoarseness" />
                            <Checkbox label="Difficulty in swalling" />
                            <Checkbox label="Pain in jaw" />
                        </div>
                    </div>

                    <div>
                        <p className="text-lg px-8 font-semibold ml-8">
                            HEART AND LUNGS
                        </p>

                        <div className="ml-8">
                            <Checkbox label="Chest Pain" />
                            <Checkbox label="Palpitations" />
                            <Checkbox label="Shortness of breath" />
                            <Checkbox label="Fainting" />
                            <Checkbox label="Swollen legs or feet" />
                            <Checkbox label="Cough" />
                        </div>
                    </div>

                    <div>
                        <p className="text-lg px-8 font-semibold ml-8">
                            Nervous System
                        </p>

                        <div className="ml-8">
                            <Checkbox label="Headaches" />
                            <Checkbox label="Dizziness" />
                            <Checkbox label="Fainting" />
                            <Checkbox label="Numbness" />
                            <Checkbox label="Memory Loss" />
                        </div>
                    </div>

                    <div>
                        <p className="text-lg px-8 font-semibold ml-8">SKIN</p>

                        <div className="ml-8">
                            <Checkbox label="Redness" />
                            <Checkbox label="Rash" />
                            <Checkbox label="Nodules/Bumps" />
                            <Checkbox label="Hair Loss" />
                            <Checkbox label="Color changes of hands and feet" />
                        </div>
                    </div>

                    <div>
                        <p className="text-lg px-8 font-semibold ml-8">BLOOD</p>

                        <div className="ml-8">
                            <Checkbox label="Anemia" />
                            <Checkbox label="Clots" />
                        </div>
                    </div>

                    <div>
                        <p className="text-lg px-8 font-semibold ml-8">
                            KIDNEY/URINE/BLADDER
                        </p>

                        <div className="ml-8">
                            <Checkbox label="Frequent or painfull urination" />
                            <Checkbox label="Blood in urine" />
                        </div>
                    </div>

                    <div>
                        <p className="text-lg px-8 font-semibold ml-8">
                            STOMACH AND INTENSTINES
                        </p>

                        <div className="ml-8">
                            <Checkbox label="Nausea" />
                            <Checkbox label="Heartbum" />
                            <Checkbox label="Stomach Pain" />
                            <Checkbox label="Vomiting" />
                            <Checkbox label="Yellow Jaundice" />
                        </div>
                    </div>

                    <div>
                        <p className="text-lg px-8 font-semibold ml-8">
                            WOMEN ONLY
                        </p>

                        <div className="ml-8">
                            <Checkbox label="Abnomal Pap Smear" />
                            <Checkbox label="Irregular Periods" />
                            <Checkbox label="Bleeding between periods" />
                            <Checkbox label="PMS" />
                        </div>
                    </div>
                </div>

                <hr className="my-2 h-px bg-gray-700 border-2 dark:bg-gray-700" />

                <div className="grid gap-6 mb-6 md:grid-cols-3 px-8 mt-5">
                    <Input
                        type="text"
                        label="Family Diseases"
                        placeholder="Enter your Family Diseases"
                        ref={familyDiseaseRef}
                    />
                    <Input
                        type="text"
                        label="Social History (Habits, recent travels, exposure to pets)"
                        placeholder="Enter your Social History"
                        ref={socialHistoryRef}
                    />

                    <Input
                        type="text"
                        label="Alergies"
                        placeholder="Specify Alergies If you have any"
                        ref={alergiesRef}
                    />
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        onClick={submitData}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
