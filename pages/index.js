import Link from "next/link"
import Image from "next/image"
import Navbar_home from "../Components/Header/Navbar_home"
import { Accordion } from "flowbite-react"

export default function Home() {
    return (
        <div className="bg-gradient-to-r from-indigo-700 to-indigo-300 ">
            <Navbar_home />
            <div className="flex-wrap flex justify-center align-center w-full h-screen">
                <div className="flex items-start my-auto">
                    <img className=" w-20 self-start" src="/injection.svg"></img>
                    <img className=" w-80" src="/docicon.png"></img>
                    <img className=" w-16 self-start" src="/thermo.svg"></img>
                </div>
                <div className="flex flex-col mx-10 my-auto">
                    <p className="text-white text-6xl self-center my-5">Private On-Chain </p>
                    <p className="text-white text-6xl self-center my-5">Health Records</p>
                    <div className="flex justify-center align-middle my-5">
                        <p className="text-white text-2xl content-evenly mx-3">Powered by :-</p>
                        <img src="/1icon.svg"></img>
                        <img src="/2icon.svg"></img>
                        <img src="/3icon.svg"></img>
                        <img src="/4icon.svg"></img>
                        <img src="/5icon.svg"></img>
                        <img src="/6icon.svg"></img>
                        <img src="/7icon.svg"></img>
                    </div>
                </div>
            </div>

            <p className="text-2xl text-center">Frequently Asked Questions :-</p>
            <div className="bg-white w-1/2 mx-auto rounded-md mt-5">
                <Accordion>
                    <Accordion.Panel>
                        <Accordion.Title>What is Protecc?</Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
                                dolore optio similique asperiores delectus repudiandae veritatis
                                ducimus sed eius libero, aperiam praesentium explicabo suscipit
                                aliquid natus iusto! Iste, earum dignissimos!
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>What is Protecc?</Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
                                dolore optio similique asperiores delectus repudiandae veritatis
                                ducimus sed eius libero, aperiam praesentium explicabo suscipit
                                aliquid natus iusto! Iste, earum dignissimos!
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>What is Protecc?</Accordion.Title>
                        <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
                                dolore optio similique asperiores delectus repudiandae veritatis
                                ducimus sed eius libero, aperiam praesentium explicabo suscipit
                                aliquid natus iusto! Iste, earum dignissimos!
                            </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                </Accordion>
            </div>
        </div>
    )
}
