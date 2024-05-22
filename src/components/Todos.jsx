import { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";

export default function Todos({ todo }) {

    const { updateTodo, deleteTodo, toggleCompleteTodo } = useContext(TodoContext)

    const [edittedTodoTask, setEdittedTodoTask] = useState(todo.task);
    const [isEditAble, setIsEditAble] = useState(false);
    const [isTaskCompleted, setIsTaskCompleted] = useState(todo.isCompleted);

    const trashTodo = () => {
        deleteTodo(todo.id);
    }

    const editTodo = () => {
        setIsEditAble(true);
    }

    const saveUpdatedTodo = () => {
        updateTodo(todo.id, { ...todo, task: edittedTodoTask });
        setIsEditAble(false);
    }

    const toggleCompleteTodoInfo = () => {
        toggleCompleteTodo(todo.id);
        setIsTaskCompleted(!todo.isCompleted);
    }
    const a = () => {
        if (isEditAble) {
            saveUpdatedTodo();
            console.log(edittedTodoTask)
        } else {
            editTodo();
            console.log(edittedTodoTask)
        }
    }
    return (
        <>
            <div className="flex flex-col w-64 c-sm:w-full border-2 border-red-700 px-3 py-3 bg-yellow-200 my-3 mx-3">
                <div className={`border border-x-0 border-t-0 pb-2 border-black ${todo.isCompleted ? "line-through text-gray-400" : ""}`}>
                    <p
                        contentEditable={isEditAble}
                        onInput={(e) => setEdittedTodoTask(e.target.innerHTML)} // onChange event will not work here because its not the input or textarea field that's a reason that here I have used onInput event and please make sure you don't use e.target.value with onInput event.
                    >
                        {todo.task}
                    </p>
                </div>
                <div className="flex justify-around items-center pt-2">
                    <button
                        className=""
                        onClick={a}
                        disabled={isTaskCompleted}
                    >
                        {isEditAble ? "Save" : "Edit"}
                    </button>

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