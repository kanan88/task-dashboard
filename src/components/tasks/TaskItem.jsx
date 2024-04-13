import Moment from "react-moment";
import PropTypes from "prop-types";
import { useContext } from "react";
import TasksContext from "@/context/tasks/tasksContext";
import M from "materialize-css/dist/js/materialize.min.js";

const TaskItem = ({ task }) => {
  const tasksContext = useContext(TasksContext);
  const { deleteTask, setCurrent } = tasksContext;

  const onDelete = () => {
    deleteTask(task.id);
    M.toast({ html: "Task Deleted" });
  };

  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-task-modal"
          className={`modal-trigger ${
            task.attention ? "red-text" : "blue-text"
          }`}
          onClick={() => setCurrent(task)}
        >
          {task.message}
        </a>
        <br />
        <span className="gray-text">
          <span className="black-text">ID #{task.id}</span> last updated by{" "}
          <span className="black-text">{task.employee}</span> on{" "}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{task.date}</Moment>
        </span>
        <a href="#!" onClick={onDelete} className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
};

export default TaskItem;
