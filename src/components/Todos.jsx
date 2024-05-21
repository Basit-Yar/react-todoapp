import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";

export default function Todos({ todo }) {

    const { updateTodo, deleteTodo, toggleCompleteTodo } = useContext(TodoContext)

    // const { isDone, setIsDone } = useState(false)

    const trashTodo = () => {
        deleteTodo(todo.id);
    }

    const toggleCompleteTodoInfo = () => {
        toggleCompleteTodo(todo.id);
    }

    return (
        <>
            <div className="flex flex-col md:w-64 border-2 border-red-700 px-3 py-3 bg-yellow-200 my-3 mx-3">
                <div className={`border border-x-0 border-t-0 pb-2 border-black ${todo.isCompleted ? "line-through text-gray-400" : ""}`}>
                    <p>{todo.task}</p>
                </div>
                <div className="flex justify-around items-center pt-2">
                    <button>Edit</button>
                    <button
                        className=""
                        onClick={trashTodo}
                    >
                        Delete
                    </button>
                    <input
                        style={{ accentColor: "red", height: "16px", width: "16px" }}
                        type="checkbox"
                        checked={todo.isCompleted}
                        onChange={toggleCompleteTodoInfo}
                    />
                </div>
            </div>
        </>
    );
}