import Input from "../Components/UI/Input";
import Select from "../Components/UI/Select";
import Navbar from "../Components/Header/Navbar";
import TextArea from "../Components/UI/TextArea";
import { useRef } from "react";

export default function (props) {
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
        };
        console.log(editFormData);
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
                        label="Maratial Status"
                        placeholder="Enter your Maratial Status"
                        ref={marStatusRef}
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
