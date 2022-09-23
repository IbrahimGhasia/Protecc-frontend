/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./node_modules/flowbite-react/**/*.js",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                my_bg_img: "url('/pic.jpg')",
            },
        },
    },
    plugins: [require("flowbite/plugin")],
    darkMode: "class",
}
