

export default function DeleteModal() {

    return (
        <div className="w-full backdrop-blur-sm flex justify-center items-center h-svh border-8 fixed top-0">

            <div className="c-sm:w-4/5 sm:w-3/5 md:w-2/5 flex flex-col justify-around bg-white py-7 shadow-md shadow-black">
                <h1 className="text-center text-4xl my-5">Delete Task</h1>

                <div className="mx-14 bg-blue-100 border-l-4 border-blue-600 pl-1 pr-2 py-2 my-5">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae voluptatem facilis</p>
                </div>

                <div className="w-full flex justify-around my-5">
                    <button className="px-4 py-1 rounded-lg shadow-md shadow-black bg-red-600">Delete</button>
                    <button className="px-4 py-1 rounded-lg shadow-md shadow-black bg-transparent border border-black">Cancel</button>
                </div>

            </div>
        </div>
    );
}