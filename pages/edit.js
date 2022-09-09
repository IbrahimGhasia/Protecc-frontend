import Input from "../Components/UI/Input";
import Select from "../Components/UI/Select";
import Navbar from "../Components/Header/Navbar";
export default function (props) {
    return (
        <div>
            <Navbar />
            <div>
                <h3 className="text-xl px-8">Personal Information</h3>
                <hr className="my-2 h-px bg-gray-700 border-2 dark:bg-gray-700" />
            </div>
            <form>
                <div className="grid gap-6 mb-6 md:grid-cols-2 px-8">
                    <Input
                        type="text"
                        label="First Name"
                        placeholder="Enter Your First Name"
                    />
                    <Input
                        type="text"
                        label="Last Name"
                        placeholder="Enter Your Last Name"
                    />
                </div>

                <div className="grid gap-6 mb-6 md:grid-cols-2 px-8">
                    <Input
                        type="number"
                        label="Age"
                        placeholder="Enter Your Age"
                    />

                    <Select />
                </div>
            </form>
        </div>
    );
}
