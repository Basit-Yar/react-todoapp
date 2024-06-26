import { useEffect, useState } from "react";
import Form from "./components/Form";
import Todos from "./components/Todos";
import TodoContext from "./context/TodoContext";
import DeleteContext from "./context/DeleteContext";
import DeleteModal from "./components/DeleteModal";

function App() {

  const [todos, setTodos] = useState([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleteTodoId, setDeleteTodoId] = useState(null);

  // here you have to keep the same name which you have defined in the TodoContext.js then only the fuctionality work otherwise it won't wrok! yeh aapko same name rakhna hai tabhi usme iski functionality jayegi...
  const addTodo = (todo) => {

    // setTodos(todo)  
    // 👆 Note : you don't have to set like this because in this scenerio, we have already some todos and if we set in this way then all the todos which is stored in the todos will be lost and there would be only one todo remain which you are going to set here.. --> What should be done here is that we should have the previous state and in this state we will add the todo. So for this we can do it in this way 

    // setTodos( (previous) => [...todos, todo]);
    // 👆 Note : well, I have fullfilled the above requirement and previous is just a object which has all the todo that are stored in todos so for this we use the spread operator to store the individual todo and in the last which we are getting --> todo..! But there is a mistake in this code we can't pass the todo directly.. umm..Why ? because if you see the TodoContext.js so this is an object so we can do it in this way...

    setTodos((prev) => [...prev, { id: Date.now(), ...todo }]);
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map(prevTodo => prevTodo.id === id ? todo : prevTodo));
  }

  const deleteTodo = (id) => {
    setIsDeleteModalOpen(true);
    setDeleteTodoId(id);
  }

  const confirmDeleteInfo = (isConfirm) => {
    setConfirmDelete(isConfirm);
    setIsDeleteModalOpen(false);
    if (isConfirm && deleteTodoId !== null){
      setTodos((prev) => prev.filter(todo => todo.id != deleteTodoId))
    }
    setDeleteTodoId(null);
  }


  const toggleCompleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.map(todo => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo));
  }

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos_storage"));
    if (storedTodos && storedTodos.length > 0) { // you can only give this condition --> storedTodos.length > 0
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos_storage", JSON.stringify(todos));
  }, [todos]);

  return (

    <TodoContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo, toggleCompleteTodo }}>
      <div className="border-2 border-red-600">
        <div className="bg-yellow-200 py-5 px-8 sticky left-0 top-0">

          <Form />
        </div>

        <div className="bg-violet-300 py-5 md:px-8 flex flex-wrap justify-center">
          {todos.map((todo) => {
            return (
              <Todos todo={todo} />
            )
          })}
        </div>
      </div>
      <DeleteContext.Provider value={{ confirmDeleteInfo }}>

        {isDeleteModalOpen && <DeleteModal />}

      </ DeleteContext.Provider>
    </ TodoContext.Provider>
  )
}

export default App
