import React from "react";

const TextArea = React.forwardRef((props, ref) => {
    return (
        <div>
            <label
                htmlFor={props.label}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
                {props.label}
            </label>
            <textarea
                id={props.label}
                rows="3"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder={props.placeholder}
                ref={ref}
            ></textarea>
        </div>
    );
});

export default TextArea;
