import { useEffect, useState } from "react";
import EmployeeItem from "./EmployeeItem";

const EmployeeListModal = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getEmployees();
  }, []);

  const getEmployees = async () => {
    setLoading(true);
    const res = await fetch("http://localhost:5001/employees");
    const data = await res.json();

    setEmployees(data);
    setLoading(false);
  };

  return (
    <div id="employee-list-modal" className="modal">
      <div className="modal-content">
        <h4>Employee List</h4>
        <ul className="collection">
          {!loading &&
            employees.map((emp) => (
              <EmployeeItem key={emp.id} employee={emp} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default EmployeeListModal;
