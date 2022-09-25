const PrescriptionCard = (props) => {
    return (
        <div>
            <div class="p-6 max-w-2xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                {props.children}
            </div>
        </div>
    )
}

export default PrescriptionCard
