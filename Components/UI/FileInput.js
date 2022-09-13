import React from "react"

const FileInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                htmlFor={props.label}
            >
                {props.label}
            </label>
            <input
                className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id={props.label}
                type="file"
                multiple
                ref={ref}
            />
        </div>
    )
})
export default FileInput
