import toast, { Toaster } from "react-hot-toast"
const ErrorModal = (props) => {
    toast(`${props.title} : ${props.message}`, {
        icon: "🔴",
    })
    return (
        <div>
            <Toaster
                toastOptions={{
                    className: "",
                    style: {
                        border: "1px solid red",
                        padding: "16px",
                        color: "red",
                    },
                }}
            />
        </div>
    )
}
export default ErrorModal
