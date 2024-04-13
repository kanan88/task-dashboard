import { useReducer } from "react";

import TasksContext from "./tasksContext";
import TasksReducer from "./tasksReducer";

import {
  GET_TASKS,
  ADD_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  TASKS_ERROR,
  SET_LOADING,
} from "../types";

const TasksState = (props) => {
  const initialState = {
    tasks: null,
    current: null,
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(TasksReducer, initialState);

  // Get tasks from server
  const getTasks = async () => {
    try {
      setLoading();

      const res = await fetch("http://localhost:5001/tasks");
      const data = await res.json();

      dispatch({
        type: GET_TASKS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: TASKS_ERROR,
        payload: err.response.data,
      });
    }
  };

  // Add a new task
  const addTask = async (task) => {
    try {
      setLoading();

      const res = await fetch("http://localhost:5001/tasks", {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      dispatch({
        type: ADD_TASK,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: TASKS_ERROR,
        payload: err.response.data,
      });
    }
  };

  // Update the task

  // Delete the task

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <TasksContext.Provider
      value={{ tasks: state.tasks, loading: state.loading, getTasks, addTask }}
    >
      {props.children}
    </TasksContext.Provider>
  );
};

export default TasksState;
