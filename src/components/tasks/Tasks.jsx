import { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import Preloader from "../layout/Preloader";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:5001/tasks/");
    const data = await res.json();

    setTasks(data);
    setLoading(false);
  };

  if (loading) {
    return <Preloader />;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">Tasks</h4>
      </li>
      {!loading && tasks.length === 0 ? (
        <p className="center">No tasks to show...</p>
      ) : (
        tasks.map((task) => <TaskItem key={task.id} task={task} />)
      )}
    </ul>
  );
};

export default Tasks;
