import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../App";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";
function EditEmployee() {
  const { data, setData } = useContext(Context);
  const [employee, setEmployee] = useState({});
  const [name, setName] = useState(employee.name);
  const [surname, setSurname] = useState(employee.surname);
  const [email, setEmail] = useState(employee.email);
  const [position, setPosition] = useState(employee.position);
  const Navigae = useNavigate();
  const { id } = useParams();
  console.log("id", id);
  console.log("employee", employee);
  useEffect(() => {
    data.filter((item) => {
      if (item.id == id) {
        setEmployee(item);
        setEmail(item.email);
        setName(item.name);
        setPosition(item.position);
        setSurname(item.surname);
      }
    });
  }, [id]);
  const handleEdit = () => {
    const editEmpoye = {
      name: name,
      surname: surname,
      email: email,
      position: position,
      id: id,
    };
    setData(
      data.map((item) => {
        if (item.id == id) {
          return (item = editEmpoye);
        } else {
          return item;
        }
      })
    );
    fetch(`https://rocky-temple-83495.herokuapp.com/employees/${id}`, {
      method: "PUT",
      body: JSON.stringify(editEmpoye),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    Navigae("/employees");
  };
  return (
    <div className="create">
      <h1> Edit employee</h1>
      <form>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Surname
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </label>
        <label>
          Position
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button onClick={handleEdit} className="createToNav">
          Edit
        </button>
      </form>
    </div>
  );
}

export default EditEmployee;
