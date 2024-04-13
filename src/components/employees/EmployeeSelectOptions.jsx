import { useContext, useEffect } from "react";
import EmployeesContext from "@/context/employees/employeesContext";

const EmployeeSelectOptions = () => {
  const employeesContext = useContext(EmployeesContext);
  const { getEmployees, employees, loading } = employeesContext;

  useEffect(() => {
    getEmployees();
    //eslint-disable-next-line
  }, []);

  return (
    !loading &&
    employees !== null &&
    employees.map((emp) => (
      <option key={emp.id} value={`${emp.firstName} ${emp.lastName}`}>
        {emp.firstName} {emp.lastName}
      </option>
    ))
  );
};

export default EmployeeSelectOptions;
