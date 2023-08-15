import { AiFillDelete } from "react-icons/ai";
import PropTypes from "prop-types";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import "../styles/Task.css";
import { useState } from "react";

function Task({ task }) {
  const { deleteTask } = useContext(TaskContext);
  const [status, setStatus] = useState(false);

  const handleDelete = (e) => {
    e.preventDefault();
    deleteTask(task.id);
  };

  const handleComplete = (e) => {
    e.preventDefault();

    if (status == false) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  };

  return (
    <div
      className="task_content flex justify-between py-2 mb-3 px-5 items-center rounded-md xs:w-72 sm:w-96 md:w-11/12 mx-auto"
      onClick={handleComplete}
      style={
        status ? { backgroundColor: "#e0cbdc" } : { textDecoration: "none" }
      }
    >
      <div>
        <h3
          style={
            status
              ? { textDecoration: "line-through", backgroundColor: "#e0cbdc" }
              : { textDecoration: "none" }
          }
        >
          {task.taskContent}
        </h3>
      </div>

      <div onClick={handleDelete}>
        <AiFillDelete className="icon_btn-delete" />
      </div>
    </div>
  );
}

export default Task;

Task.propTypes = {
  task: PropTypes.object.isRequired,
};
