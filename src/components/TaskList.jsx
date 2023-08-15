import Task from "./Task";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";
import "../styles/TaskList.css";

function TaskList() {
  const { taskArr } = useContext(TaskContext);

  return (
    <div className="flex flex-col text-center mx-auto">
      <div>
        <h2 className="taskList_title text-2xl">My Tasks</h2>
      </div>
      <div className="flex-col mx-auto mt-6 md:w-11/12">
        {taskArr.map((task) => {
          return <Task key={task.id} task={task} status={false} />;
        })}
      </div>
    </div>
  );
}

export default TaskList;
