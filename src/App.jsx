import Form from "./components/Form";
import Todos from "./components/Todos";

function App() {
  return (

    <>
      <div className="border-2 border-red-600">
        <div className="bg-yellow-200 py-5 px-8 sticky left-0 top-0">

          <Form />
        </div>

        <div className="bg-violet-300 py-5 md:px-8 flex flex-wrap justify-center">
          <Todos />
          <Todos />
          <Todos />
          <Todos />
          <Todos />
          <Todos />
          <Todos />
          <Todos />
          <Todos />
          <Todos />
          <Todos />
        </div>
      </div>
    </>
  )
}

export default App
