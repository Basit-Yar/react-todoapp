

function Form() {
    return (
        <>
            <div className="flex border-2 border-green-700 rounded-lg">
                <input
                    className="w-full px-3 py-2 rounded-l-md bg-gray-100 placeholder-gray-400 focus:outline-none focus:bg-blue-100"
                    type="text"
                    placeholder="create todo..."
                />
                <button
                    className="px-6 py-2 bg-green-700 text-gray-100 font-bold rounded-r-md"
                >
                    Add
                </button>
            </div>
        </>
    )
}
export default Form;