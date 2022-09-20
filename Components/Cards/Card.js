import { useState } from "react"
import React from "react"
import Link from "next/link"

const Card = () => {
    return (
        <a
            href="#"
            class="block p-8 max-w-auto mx-auto my-4 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Cold and Cough
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
                Consulting Doctor :-{" "}
                <a class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    Dr. Mehta
                </a>
            </p>
            <p class="font-normal text-gray-700 dark:text-gray-400">
                Prescribed Medicines :- Vicks Action 500
            </p>
            <p class="font-normal text-gray-700 dark:text-gray-400">
                Doctor Notes :- General Viral Cold
            </p>
        </a>
    )
}

export default Card
