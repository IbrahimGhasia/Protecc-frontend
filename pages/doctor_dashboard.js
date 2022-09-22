import Navbar_Doc from "../Components/Header/Navbar_Doc"
import Link from "next/link"
export default function Home(props) {
    return (
        <div>
            <Navbar_Doc />
            <Link href="/patient_edit">
                <button>Consultation Notes</button>
            </Link>
        </div>
    )
}
