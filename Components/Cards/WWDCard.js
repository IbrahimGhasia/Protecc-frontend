import react from "react"

const WWDCard = ({ ques, answer }) => {
    return (
        <div className="mx-3 mb-5">
            <a class=" block p-8 w-96 mx-auto my-4 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {ques}
                </h5>
                <p class="text-lg font-normal text-gray-700 dark:text-gray-400">{answer}</p>
            </a>
        </div>
    )
}

export default WWDCard
