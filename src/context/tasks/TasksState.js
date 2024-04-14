import { useReducer } from "react";

import TasksContext from "./tasksContext";
import TasksReducer from "./tasksReducer";

import {
  GET_TASKS,
  ADD_TASK,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_TASK,
  DELETE_TASK,
  TASKS_ERROR,
  SET_LOADING,
  SEARCH_TASKS,
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
        payload: err.response.statusText,
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
        payload: err.response.statusText,
      });
    }
  };

  // Update the task on server
  const updateTask = async (task) => {
    try {
      setLoading();
      setCurrent(task);

      const res = await fetch(`http://localhost:5001/tasks/${task.id}`, {
        method: "PUT",
        body: JSON.stringify(task),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      dispatch({
        type: UPDATE_TASK,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: TASKS_ERROR,
        payload: err.response.statusText,
      });
    }
  };

  // Delete the task
  const deleteTask = async (id) => {
    try {
      setLoading();

      await fetch(`http://localhost:5001/tasks/${id}`, {
        method: "DELETE",
      });

      dispatch({
        type: DELETE_TASK,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: TASKS_ERROR,
        payload: err.response.statusText,
      });
    }
  };

  // Set current task
  const setCurrent = (task) =>
    dispatch({
      type: SET_CURRENT,
      payload: task,
    });

  // Clear current task
  const clearCurrent = (task) =>
    dispatch({
      type: CLEAR_CURRENT,
    });

  // Search tasks
  const searchTasks = async (text) => {
    try {
      setLoading();

      const res = await fetch(`http://localhost:5001/tasks?q=${text}`);
      const data = await res.json();

      dispatch({
        type: SEARCH_TASKS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: TASKS_ERROR,
        payload: err.response.statusText,
      });
    }
  };

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <TasksContext.Provider
      value={{
        tasks: state.tasks,
        loading: state.loading,
        current: state.current,
        getTasks,
        addTask,
        deleteTask,
        updateTask,
        setCurrent,
        clearCurrent,
        searchTasks,
      }}
    >
      {props.children}
    </TasksContext.Provider>
  );
};

export default TasksState;
