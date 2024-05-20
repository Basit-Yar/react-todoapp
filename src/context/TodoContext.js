import { createContext } from "react";

const TodoContext = createContext({

    todos : [
        {
            id : 1,
            task : "What you have to do...",
            isCompleted : false
        }
    ],
    addTodo : (task) => {},
    updateTodo : (id, task) => {},
    deleteTodo : (id) => {},
    toggleCompleteTodo : (id) => {}
});

export default TodoContext;