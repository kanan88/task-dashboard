import { useContext, useEffect } from "react";
import EmployeeItem from "./EmployeeItem";
import EmployeesContext from "@/context/employees/employeesContext";

const EmployeeListModal = () => {
  const employeesContext = useContext(EmployeesContext);
  const { employees, getEmployees, loading } = employeesContext;

  useEffect(() => {
    getEmployees();
    //eslint-disable-next-line
  }, []);

  return (
    <div id="employee-list-modal" className="modal">
      <div className="modal-content">
        <h4>Employee List</h4>
        <ul className="collection">
          {!loading &&
            employees?.map((emp) => (
              <EmployeeItem key={emp.id} employee={emp} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default EmployeeListModal;
