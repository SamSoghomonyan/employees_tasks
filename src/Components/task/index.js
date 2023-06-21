import React from "react";
import "./style.css";
function Task({
  name,
  startDate,
  endDate,
  employeeId,
  description,
  handeleDelete,
  handleEdit,
}) {
  return (
    <div>
      <div className="task">
        <div className="element ">
          <p>Name: {name}</p>
          <p>description: {description}</p>
          <p>startDate: {startDate}</p>
          <p>endDate:{endDate}</p>
          <p>employeeId:{employeeId}</p>
        </div>
        <div className="editDelete">
          <button onClick={(e) => handeleDelete(employeeId, e)}>Delete</button>
          <button onClick={(e) => handleEdit(employeeId, e)}>Edit</button>
        </div>
      </div>
    </div>
  );
}

export default Task;
