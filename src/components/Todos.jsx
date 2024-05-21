

export default function Todos({ todo }) {
    
    return (
        <>
            <div className="flex flex-col md:w-64 border-2 border-red-700 px-3 py-3 bg-yellow-200 my-3 mx-3">
                <div className="border border-x-0 border-t-0 pb-2 border-black">
                    <p>{todo.task}</p>
                </div>
                <div className="flex justify-around items-center pt-2">
                    <button>Edit</button>
                    <button>Delete</button>
                    <input type="checkbox" />
                </div>
            </div>
        </>
    );
}