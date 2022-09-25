import PrescriptionCard from "../Components/Cards/PrescriptionCard"
import Navbar_Doc from "../Components/Header/Navbar_Doc"
import TextArea from "../Components/UI/TextArea"
import { useRef } from "react"
import { useNotification } from "@web3uikit/core"

export default function Home() {
    const prescriptionRef = useRef()
    const dispatch = useNotification()

    const handleSubmit = (event) => {
        if (prescriptionRef.current.value.length > 0) {
            event.preventDefault()
            preData = {
                Prescription: prescriptionRef.current.value,
            }
        } else {
            dispatch({
                type: "error",
                title: "Incomplete data field",
                message: "Please fill all the * (mandatory) data field",
                position: "bottomL",
            })
        }
    }
    const today = new Date()
    const yyyy = today.getFullYear()
    let mm = today.getMonth() + 1 // Months start at 0!
    let dd = today.getDate()

    if (dd < 10) dd = "0" + dd
    if (mm < 10) mm = "0" + mm

    const formattedToday = dd + "/" + mm + "/" + yyyy
    return (
        <div>
            <Navbar_Doc />
            <div className="flex justify-center text-center mt-2 mb-2">
                <PrescriptionCard>
                    <div className="text-center">
                        <h2 className="text-2xl font-bold">Dr. Noman Kankroliwala</h2>
                        <p className="">🏥123 Lorem Avenue, Region, City 1023</p>
                        <p className="mb-4">☎️8866685052</p>
                        <hr className="my-2 h-px bg-gray-700 border-2 dark:bg-gray-700" />
                    </div>

                    <div>
                        <h4 className="text-left text-lg">
                            Name: Ibrahim Ghasia
                            <span className="text-right ml-20 text-sm">{formattedToday}</span>
                        </h4>

                        <form>
                            <textarea
                                id="prescription"
                                rows="10"
                                className="mt-5 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Add the patient Prescription here ..."
                                // ref={ref}
                                // value=""
                                required
                            ></textarea>

                            <h4 className="text-right text-lg mt-3">Signature</h4>
                            <h4 className="text-right text-lg">Dr. Noman</h4>

                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-md px-10 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Prescribe
                            </button>
                        </form>
                    </div>
                </PrescriptionCard>
            </div>
        </div>
    )
}
