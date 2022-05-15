import React from "react";
import "./Employee.css";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";

const Employee = ({
  _id,
  firstname,
  lastname,
  email,
  mobile,
  removeEmployee,
  activateEmployee,
  deletedAt,
}) => {
  return (
    <tr>
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>{email}</td>
      <td>{mobile}</td>
      <td>
        <Link to={{ pathname: "/edit", search: _id }}>
          <button className="Action-Button fa fa-pencil"></button>
        </Link>
        {deletedAt == null && (
          <button
            onClick={() => removeEmployee(_id)}
            className="Action-Button3 fa fa-toggle-off"
          ></button>
        )}
        {deletedAt != null && (
          <button
            onClick={() => activateEmployee(_id)}
            className="Action-Button2 fa fa-toggle-on "
          ></button>
        )}
      </td>
    </tr>
  );
};

export default Employee;
