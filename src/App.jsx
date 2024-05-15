import Form from "./components/Form";
import Todos from "./components/Todos";

function App() {
  return (

    <>
      <div className="border-2 border-red-600">
        <div className="bg-yellow-300 py-5 px-8">

          <Form />
        </div>

        <div>
          <Todos />
        </div>
      </div>
    </>
  )
}

export default App
