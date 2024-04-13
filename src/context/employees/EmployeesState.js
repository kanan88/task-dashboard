import { useReducer } from "react";

import EmployeesContext from "./employeesContext";
import EmployeesReducer from "./employeesReducer";

import {
  GET_EMPLOYEES,
  ADD_EMPLOYEE,
  DELETE_EMPLOYEE,
  SET_LOADING,
  EMPLOYEES_ERROR,
} from "../types";

const EmployeesState = (props) => {
  const initialState = {
    employees: null,
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(EmployeesReducer, initialState);

  // Get employees from server
  const getEmployees = async () => {
    try {
      setLoading();

      const res = await fetch("http://localhost:5001/employees");
      const data = await res.json();

      dispatch({
        type: GET_EMPLOYEES,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: EMPLOYEES_ERROR,
        payload: err.response.statusText,
      });
    }
  };

  // Add a new employee

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <EmployeesContext.Provider
      value={{
        employees: state.employees,
        loading: state.loading,
        getEmployees,
      }}
    >
      {props.children}
    </EmployeesContext.Provider>
  );
};

export default EmployeesState;
