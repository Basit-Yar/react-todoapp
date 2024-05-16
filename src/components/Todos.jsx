

export default function Todos() {
    return (
        <>
            <div className="flex flex-col md:w-64 border-2 border-red-700 px-3 py-3 bg-yellow-200 my-3 mx-3">
                <div className="border border-x-0 border-t-0 pb-2 border-black">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit nam tempora unde consequatur, necessitatibus obcaecati aspernatur nihil odit optio possimus modi? Architecto eius ea facilis.</p>
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