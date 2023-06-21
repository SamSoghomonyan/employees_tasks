import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import Task from "../task";
import { Context, TasksData } from "../../App";
import SearchTasks from "../SearchTasks";
function Tasks() {
  const Navigate = useNavigate();
  const { tasks, setTasks } = useContext(Context);
  const createTask = () => {
    Navigate("/create/task");
  };
  const handeleDelete = (id, e) => {
    setTasks(tasks.filter((task) => task.employeeId !== id));
    e.stopPropagation();
    fetch(`https://rocky-temple-83495.herokuapp.com/employees/${id}`, {
      method: "DELETE",
    });
  };
  const handleEdit = (id, e) => {
    e.stopPropagation();
    Navigate(`/edit/task/${id}`);
  };
  return (
    <div>
      <button onClick={createTask} className="button">
        Create Task
      </button>
      <div className="search">
        <SearchTasks />
      </div>
      <div>
        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              {...task}
              handeleDelete={handeleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Tasks;
