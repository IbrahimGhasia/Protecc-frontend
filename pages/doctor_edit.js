import Navbar_Doc from "../Components/Header/Navbar_Doc"
import FileInput from "../Components/UI/FileInput"
import Input from "../Components/UI/Input"
import Select from "../Components/UI/Select"
import TextArea from "../Components/UI/TextArea"

export default function Home() {
    return (
        <div>
            <Navbar_Doc />
            <div>
                <h3 className="text-xl px-8 font-bold">Personal Information</h3>
                <hr className="my-2 h-px bg-gray-700 border-2 dark:bg-gray-700" />
            </div>
            <form>
                <div className="grid gap-6 mb-6 md:grid-cols-2 px-8">
                    <Input
                        type="text"
                        label="Full Name"
                        placeholder="Enter Your Full Name"
                        // ref={fnameRef}
                    />
                    <Input
                        type="number"
                        label="Mobile Number"
                        placeholder="Enter Your Mobile Number"
                    />
                </div>

                <div className="grid gap-6 mb-6 md:grid-cols-5 px-8">
                    <Input
                        type="text"
                        label="Specialisation"
                        placeholder="Enter your specialisation"
                        // ref={fnameRef}
                    />
                    <Input type="text" label="Country" placeholder="Enter name of your country" />
                    <Input type="text" label="State" placeholder="Enter name of your state" />
                    <Input type="text" label="City" placeholder="Enter name of your city" />
                    <Select
                        label="Gender"
                        title="Select your Gender"
                        opt1="Male"
                        opt2="Female"
                        opt3="Non-Binary"
                        opt4="Don't want to disclose"
                        // ref={sexRef}
                    />
                </div>

                <h3 className="text-xl px-8 font-bold">Profile Verification</h3>
                <hr className="my-2 h-px bg-gray-700 border-2 dark:bg-gray-700" />

                <div className="grid gap-6 mb-6 md:grid-cols-3 px-8">
                    <Input
                        type="number"
                        label="Medical Registration Number"
                        placeholder="Enter your medical registration number"
                        // ref={fnameRef}
                    />
                    <Input
                        type="number"
                        label="Registration year"
                        placeholder="Enter the registration year"
                    />
                    <Input
                        type="text"
                        label="Registration Council"
                        placeholder="Enter your registration council"
                    />
                </div>

                <div className="grid gap-6 mb-6 md:grid-cols-0 px-8">
                    <FileInput label="Medical Registration Proof" />
                </div>

                <h3 className="text-xl px-8 font-bold">Educational Qualification</h3>
                <hr className="my-2 h-px bg-gray-700 border-2 dark:bg-gray-700" />

                <div className="grid gap-6 mb-6 md:grid-cols-2 px-8">
                    <TextArea
                        label="Educational Degree"
                        placeholder="Enter your educational degree"
                    />

                    <TextArea
                        label="College/University"
                        placeholder="Enter your College/University"
                    />
                </div>

                <div className="grid gap-6 mb-6 md:grid-cols-2 px-8">
                    <Input
                        type="text"
                        label="Year of Completeion"
                        placeholder="Enter your year of completion"
                    />

                    <Input
                        type="number"
                        label="Experience"
                        placeholder="Enter your years of experience"
                    />
                </div>

                <div className="grid gap-6 mb-6 md:grid-cols-0 px-8">
                    <FileInput label="Identity Proof (Upload Govt. ID)" />
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        // onClick={submitData}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}
