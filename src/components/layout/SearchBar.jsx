import React, { useRef } from "react";
import { useContext } from "react";
import TasksContext from "@/context/tasks/tasksContext";

const SearchBar = () => {
  const tasksContext = useContext(TasksContext);
  const { searchTasks } = tasksContext;

  const text = useRef("");

  const onChange = (e) => {
    searchTasks(text.current.value);
  };

  return (
    <nav style={{ marginBottom: "30px" }} className="blue">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              id="search"
              type="search"
              placeholder="Search tasks..."
              ref={text}
              onChange={onChange}
            />
            <label className="label-icon" htmlFor="search">
              <i className="material-icons">search</i>
            </label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
