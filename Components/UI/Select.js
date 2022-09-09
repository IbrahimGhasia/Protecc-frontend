import React from "react";

const Select = React.forwardRef((props, ref) => {
    return (
        <div>
            <label
                htmlFor={props.label}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
                {props.label}
            </label>
            <select
                id={props.label}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                ref={ref}
            >
                <option defaultValue={""}>{props.title}</option>
                <option value={props.opt1}>{props.opt1}</option>
                <option value={props.opt2}>{props.opt2}</option>
                <option value={props.opt3}>{props.opt3}</option>
                <option value={props.opt4}>{props.opt4}</option>
            </select>
        </div>
    );
});

export default Select;
