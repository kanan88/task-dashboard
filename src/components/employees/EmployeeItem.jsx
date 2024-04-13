import { useContext } from "react";
import PropTypes from "prop-types";
import EmployeesContext from "@/context/employees/employeesContext";
import M from "materialize-css/dist/js/materialize.min.js";

const EmployeeItem = ({ employee }) => {
  const employeesContext = useContext(EmployeesContext);
  const { deleteEmployee } = employeesContext;

  const onDelete = () => {
    deleteEmployee(employee.id);
    M.toast({ html: "Employee was deleted successfully." });
  };

  return (
    <div>
      <li className="collection-item">
        <div>
          {employee.firstName} {employee.lastName}
          <a href="#!" className="secondary-content" onClick={onDelete}>
            <i className="material-icons grey-text">delete</i>
          </a>
        </div>
      </li>
    </div>
  );
};

EmployeeItem.propTypes = {
  employee: PropTypes.object.isRequired,
};

export default EmployeeItem;
