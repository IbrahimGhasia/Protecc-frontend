import WWDCard from "../Components/Cards/WWDCard"
import Navbar_home from "../Components/Header/Navbar_home"

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
                    <p className="text-white text-6xl font-semibold self-center my-5">
                        Private On-Chain
                    </p>
                    <p className="text-white text-6xl font-semibold self-center my-5">
                        Health Records
                    </p>
                    <div className="flex justify-center align-middle my-5">
                        <p className="text-white text-2xl content-evenly mx-3">Powered by :-</p>
                        <img src="/1icon.svg" className="mx-1"></img>
                        <img src="/2icon.svg" className="mx-1"></img>
                        <img src="/3icon.svg" className="mx-1"></img>
                        <img src="/4icon.svg" className="mx-1"></img>
                        <img src="/5icon.svg" className="mx-1"></img>
                        <img src="/6icon.svg" className="mx-1"></img>
                        <img src="/7icon.svg" className="mx-1"></img>
                    </div>
                </div>
            </div>

            <p className="text-6xl text-center text-white text-bold my-10">⚒️What we do :</p>

            <div className="mx-5 grid gap-3 md:grid-cols-2">
                <WWDCard
                    ques="What is PROTECC?"
                    answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, quam? Commodi dolore velit tempore culpa molestias, adipisci accusamus, laboriosam quos voluptatum, praesentium quam sapiente amet tempora inventore? Officiis, architecto quis."
                />
                <WWDCard
                    ques="What is PROTECC?"
                    answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, quam? Commodi dolore velit tempore culpa molestias, adipisci accusamus, laboriosam quos voluptatum, praesentium quam sapiente amet tempora inventore? Officiis, architecto quis."
                />
                <WWDCard
                    ques="What is PROTECC?"
                    answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, quam? Commodi dolore velit tempore culpa molestias, adipisci accusamus, laboriosam quos voluptatum, praesentium quam sapiente amet tempora inventore? Officiis, architecto quis."
                />
                <WWDCard
                    ques="What is PROTECC?"
                    answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, quam? Commodi dolore velit tempore culpa molestias, adipisci accusamus, laboriosam quos voluptatum, praesentium quam sapiente amet tempora inventore? Officiis, architecto quis."
                />
            </div>
        </div>
    )
}
