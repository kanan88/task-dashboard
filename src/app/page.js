"use client";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import { useEffect } from "react";
import SearchBar from "@/components/layout/SearchBar";
import Tasks from "@/components/tasks/Tasks";
import AddBtn from "@/components/layout/AddBtn";
import AddTaskModal from "@/components/tasks/AddTaskModal";
import EditTaskModal from "@/components/tasks/EditTaskModal";
import AddEmployeeModal from "@/components/employees/AddEmployeeModal";
import EmployeeListModal from "@/components/employees/EmployeeListModal";

import TasksState from "@/context/tasks/TasksState";

const Home = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <TasksState>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddTaskModal />
        <EditTaskModal />
        <AddEmployeeModal />
        <EmployeeListModal />
        <Tasks />
      </div>
    </TasksState>
  );
};

export default Home;
