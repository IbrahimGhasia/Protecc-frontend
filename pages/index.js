import Link from "next/link"
import Image from "next/image"
export default function Home() {
    return (
        <div className="">
            <Image src="/Medical.jfif" layout="fill" objectFit="cover" priority />
            {/* <Navbar /> */}
            <div className="grid v-screen place-items-center mt-10 relative">
                <h1 className="text-5xl md:text-8xl text-center mt-20 font-bold text-black">
                    Protecc
                </h1>

                <div className="">
                    <p className="md:text-2xl px-20 mt-7 text-center text-black">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec facilisis ex
                        nec ipsum molestie, a lacinia arcu sollicitudin. Aenean justo lacus, euismod
                        molestie finibus sit amet, sodales nec sem. Suspendisse eget luctus orci, et
                        egestas mauris. Donec efficitur feugiat tincidunt.
                    </p>
                </div>

                <div className="grid v-screen place-items-center mt-10">
                    <div className="grid-cols-2">
                        <Link href="/patient_home">
                            <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                Sign in as Patient
                            </button>
                        </Link>

                        <Link href="/doctor_home">
                            <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                Sign in as Doctor
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
