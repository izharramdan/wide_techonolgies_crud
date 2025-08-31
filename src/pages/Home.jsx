import { useState } from "react";
import Counter from "../components/Counter";
import Form from "../components/Form";
import Todo from "../components/Todo";

export default function Home() {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <div className="p-6 text-center space-y-6">
      {/* <h1 className="text-2xl font-bold">Home Page</h1> */}
      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={() => setActiveComponent("counter")}
          className="px-4 py-2 bg-green-500 rounded"
        >
         Counter
        </button>
        <button
          onClick={() => setActiveComponent("form")}
          className="px-4 py-2 bg-blue-500 rounded"
        >
          Form
        </button>
        <button
          onClick={() => setActiveComponent("todo")}
          className="px-4 py-2 bg-purple-500 rounded"
        >
          Todo
        </button>
      </div>
      <div className="mt-6">
        {activeComponent === "counter" && <Counter />}
        {activeComponent === "form" && <Form />}
        {activeComponent === "todo" && <Todo />}
      </div>
    </div>
  );
}
