import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../App";

import "./style.css";
import { json, useNavigate } from "react-router-dom";

function CreateEmployee(id) {
  const navigat = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const { data, setData } = useContext(Context);
  const handleClick = () => {
    const newEmoloyee = {
      name: name,
      surname: surname,
      position: position,
      email: email,
    };

    if (name && surname && position && email) {
      setData([...data, newEmoloyee]);
      console.log("Mtav");
      fetch("https://rocky-temple-83495.herokuapp.com/employees", {
        method: "POST",
        body: JSON.stringify(newEmoloyee),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      navigat("/employees");
    }
  };
  return (
    <div className="create">
      <h1> Create a new Employee</h1>
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
        <button onClick={handleClick} className="createToNav">
          Create
        </button>
      </form>
    </div>
  );
}

export default CreateEmployee;
