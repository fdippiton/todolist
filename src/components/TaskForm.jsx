import { useContext } from "react";
import { useState } from "react";
import { TaskContext } from "../context/TaskContext";
import { v4 as uuidv4 } from "uuid";
import "../styles/TaskForm.css";
import { SiAddthis } from "react-icons/si";

function TaskForm() {
  const [input, setInput] = useState("");
  const { addNewTask } = useContext(TaskContext);

  /**
   * The handleInput function updates the state variable "input" with the value of the input element.
   */
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  /**
   * The handleSubmit function is used to handle form submission by preventing the default behavior,
   * adding a new task with a unique id and task content to a list, and resetting the input field.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    addNewTask({
      id: uuidv4(),
      taskContent: input,
    });
    setInput("");
  };

  return (
    <div className="flex justify-center mt-6">
      <form className="flex py-10" onSubmit={handleSubmit}>
        <input
          className="input_task placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:ring-1 sm:text-sm mr-4 w-96 "
          placeholder="New task..."
          type="text"
          onChange={handleInput}
          value={input}
        />
        <button className="add_task-btn rounded-md px-4 flex">
          <SiAddthis className="mr-2" />
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
