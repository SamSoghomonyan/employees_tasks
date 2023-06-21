import React, { useContext, useEffect, useState } from "react";
import Employee from "../Employee";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { Context } from "../../App";
function Employees() {
  const { data, setData } = useContext(Context);
  const [checkDelete, setCheckDelete] = useState(false);
  console.log("first", checkDelete);
  const Navigat = useNavigate();
  const handleDelete = (id, e) => {
    setData(data.filter((item) => item.id !== id));
    e.stopPropagation();
    fetch(`https://rocky-temple-83495.herokuapp.com/employees/${id}`, {
      method: "DELETE",
    });
  };

  const createEmployee = () => {
    Navigat("/create/Employee");
  };
  const handleEdit = (id, e) => {
    e.stopPropagation();
    Navigat(`/editEmployee/${id}`);
  };
  return (
    <div className="employees">
      <button onClick={createEmployee} className="button">
        Create Employee
      </button>
      {data.map((item) => {
        return (
          <Employee
            id={item.id}
            {...item}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        );
      })}
    </div>
  );
}

export default Employees;
