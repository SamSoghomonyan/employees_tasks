import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../App";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";
function EditTask() {
  const { tasks, setTasks } = useContext(Context);
  const [employee, setEmployee] = useState({});
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [tasksid, setID] = useState("");
  const Navigae = useNavigate();
  const { id } = useParams();
  console.log("tasks", tasks);
  useEffect(() => {
    tasks.filter((item) => {
      if (item.employeeId == id) {
        setEmployee(item);
        setDescription(item.description);
        setName(item.name);
        setStartDate(item.startDate);
        setEndDate(item.endDate);
        setID(item.id);
      }
    });
  }, [id]);
  const handleEdit = () => {
    const editTasks = {
      name: name,
      description: description,
      startDate: startDate,
      endDate: endDate,
      id: tasksid,
      employeeId: id,
    };
    setTasks(
      tasks.map((item) => {
        if (item.employeeId == id) {
          return (item = editTasks);
        } else {
          return item;
        }
      })
    );
    fetch(`https://rocky-temple-83495.herokuapp.com/employees/${id}`, {
      method: "PUT",
      body: JSON.stringify(editTasks),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    Navigae("/tasks");
  };
  return (
    <div className="create">
      <h1> Edit Task</h1>
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
          start Date
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <label>
          end Date
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
        <button onClick={handleEdit} className="createToNav">
          Edit
        </button>
      </form>
    </div>
  );
}

export default EditTask;
