import { useEffect, useState } from "react";

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
    return <h4>Loading...</h4>;
  }

  return (
    <ul className="collection-with-header">
      <li className="collection-header">
        <h4 className="center">Tasks</h4>
      </li>
      {!loading && tasks.length === 0 ? (
        <p className="center">No tasks to show...</p>
      ) : (
        tasks.map((task) => <li key={task.id}>{task.message}</li>)
      )}
    </ul>
  );
};

export default Tasks;
