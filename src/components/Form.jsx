import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext"


function Form() {

    const [task, setTask] = useState("");
    const { addTodo } = useContext(TodoContext);

    const addTask = () => {
        addTodo({task: task, isCompleted : false});
        console.log("clicked")
    }


    return (
        <>
            <div className="flex border-2 border-green-700 rounded-lg">
                <input
                    className="w-full px-3 py-2 rounded-l-md bg-gray-100 placeholder-gray-400 focus:outline-none focus:bg-blue-100"
                    type="text"
                    placeholder="create todo..."
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button
                    className="px-6 py-2 bg-green-700 text-gray-100 font-bold rounded-r-md"
                    onClick={addTask}
                >
                    Add
                </button>
            </div>
        </>
    )
}
export default Form;