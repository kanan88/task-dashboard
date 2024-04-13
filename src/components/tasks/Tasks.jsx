import { useContext, useEffect } from "react";
import TaskItem from "./TaskItem";
import Preloader from "../layout/Preloader";
import TasksContext from "@/context/tasks/tasksContext";

const Tasks = () => {
  const tasksContext = useContext(TasksContext);
  const { getTasks, loading, tasks } = tasksContext;

  useEffect(() => {
    getTasks();
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">Tasks</h4>
      </li>
      {!loading && tasks?.length === 0 ? (
        <p className="center">No tasks to show...</p>
      ) : (
        tasks?.map((task) => <TaskItem key={task.id} task={task} />)
      )}
    </ul>
  );
};

export default Tasks;
