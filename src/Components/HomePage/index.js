import React from "react";
import "./style.css";
import { BrowserRouter, useNavigate } from "react-router-dom";
function HomePage() {
  const Navigate = useNavigate();
  const handelHome = () => {
    Navigate("/");
  };
  const handelEmployees = () => {
    Navigate("/employees");
  };
  const handelTasks = () => {
    Navigate("/tasks");
  };
  return (
    <div className="home">
      <h1 onClick={handelHome}>Home</h1>
      <h1 onClick={handelEmployees}>Employees</h1>
      <h1 onClick={handelTasks}>Tasks</h1>
    </div>
  );
}

export default HomePage;
