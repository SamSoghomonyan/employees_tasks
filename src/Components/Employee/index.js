import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
function Employee({
  name,
  surname,
  email,
  id,
  position,
  handleDelete,
  handleEdit,
}) {
  const Navigate = useNavigate();
  const handleOwnPage = (id) => {
    Navigate(`/ownPage/${id}`);
  };
  return (
    <div>
      <div onClick={() => handleOwnPage(id)} className="emloyee">
        <div className="element ">
          <p>Name: {name}</p>
          <p>Surname: {surname}</p>
          <p>Email: {email}</p>
          <p>Id:{id}</p>
          <p>Position:{position}</p>
        </div>
        <div className="editDelete">
          <button onClick={(e) => handleDelete(id, e)}>Delete</button>
          <button onClick={(e) => handleEdit(id, e)}>Edit</button>
        </div>
      </div>
    </div>
  );
}

export default Employee;
