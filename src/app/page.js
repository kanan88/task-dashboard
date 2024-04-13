"use client";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import { useEffect } from "react";
import SearchBar from "../../components/layout/SearchBar";
import Tasks from "../../components/tasks/Tasks";
import AddBtn from "../../components/layout/AddBtn";
import AddTaskModal from "../../components/tasks/AddTaskModal";

const Home = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddTaskModal />
        <Tasks />
      </div>
    </>
  );
};

export default Home;
