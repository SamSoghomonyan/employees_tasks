import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Context } from "../../App";
import { useNavigate } from "react-router-dom";
function CrateTask() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndState] = useState("");
  const [selectOption, setSelectOption] = useState("");
  const [data, setDate] = useState([]);
  const { tasks, setTasks } = useContext(Context);
  console.log("data tasks", data);
  const navigae = useNavigate();
  const handeOption = (e) => {
    setSelectOption(e.target.value);
  };
  useEffect(() => {
    fetch("https://guarded-plains-35621.herokuapp.com/employees")
      .then((res) => res.json())
      .then((res) => setDate(res));
  }, []);
  const createTask = (id) => {
    const task = {
      name: name,
      description: description,
      startDate: startDate,
      endDate: endDate,
      employeeId: selectOption,
    };
    setTasks([...tasks, task]);
    fetch("https://rocky-temple-83495.herokuapp.com/tasks", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        description: description,
        startDate: startDate,
        endDate: endDate,
        employeeId: selectOption,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    navigae("/tasks");
  };

  return (
    <div className="create">
      <h1> Create a new Task</h1>
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
          description
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Start Date
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <label>
          End Date
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndState(e.target.value)}
          />
        </label>
        <label>
          employeeId
          <select onChange={(e) => handeOption(e)}>
            {data.map((item) => {
              return (
                <option value={item.id} key={item.id}>
                  {item.id}
                </option>
              );
            })}
          </select>
        </label>
        <button onClick={createTask} className="createToNav">
          Create Task
        </button>
      </form>
    </div>
  );
}

export default CrateTask;
