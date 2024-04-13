import React from "react";
import PropTypes from "prop-types";

const EmployeeItem = ({ employee }) => {
  return (
    <div>
      <li className="collection-item">
        <div>
          {employee.firstName} {employee.lastName}
          <a href="!#" className="secondary-content">
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
