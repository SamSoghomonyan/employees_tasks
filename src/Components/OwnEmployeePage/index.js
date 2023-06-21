import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../../App";
import "./style.css";
function OwnEmployeePage() {
  const { id } = useParams();
  console.log("id", id);
  const { tasks, setTasks, data, setData } = useContext(Context);
  const [ownEmploye, setOwnEmoloye] = useState({});
  const [ownTask, setOwnTask] = useState([]);
  useEffect(() => {
    console.log("id", id);
    fetch(`https://rocky-temple-83495.herokuapp.com/employees/${id}`)
      .then((res) => res.json())
      .then((res) => setOwnEmoloye(res));
  }, [id]);
  useEffect(() => {
    fetch(`https://rocky-temple-83495.herokuapp.com/tasks?employeeId=${id}`)
      .then((res) => res.json())
      .then((res) => setOwnTask(res));
  }, [id]);
  console.log("tasks", ownTask);
  return (
    <div>
      <div className="employee">
        <p>name:{ownEmploye.name}</p>
        <p>surname:{ownEmploye.surname}</p>
        <p>position:{ownEmploye.position}</p>
        <p>email:{ownEmploye.email}</p>
        <p>id:{ownEmploye.id}</p>
      </div>
      {ownTask.map((item) => {
        return (
          <div className="employee">
            <p>name:{item.name}</p>
            <p>description:{item.description}</p>
            <p>startDate:{item.startDate}</p>
            <p>endDate:{item.endDate}</p>
            <p>employeeId:{item.employeeId}</p>
          </div>
        );
      })}
    </div>
  );
}

export default OwnEmployeePage;
