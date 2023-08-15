import { useState } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";

/* `export const TaskContext = createContext();` is creating a new context object called `TaskContext`
using the `createContext()` function from the React library. This context object can be used to
share data between components in a React application. */
export const TaskContext = createContext();

function TaskContextProvider(props) {
  const [taskArr, setTaskArr] = useState([]);

  /**
   * The addNewTask function adds a new task to the taskArr array if the taskContent property of the task
   * object is not empty.
   */
  const addNewTask = (task) => {
    if (task.taskContent !== "") {
      setTaskArr([task, ...taskArr]);
    }
  };

  /**
   * The deleteTask function filters out a task from an array based on its id and updates the setTaskArr with
   * the filtered array.
   */
  const deleteTask = (id) => {
    const deletedTask = taskArr.filter((task) => {
      return task.id !== id;
    });
    setTaskArr(deletedTask);
  };

  return (
    <TaskContext.Provider value={{ addNewTask, deleteTask, taskArr }}>
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContextProvider;

TaskContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
