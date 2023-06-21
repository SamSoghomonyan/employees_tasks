import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import EditEmployee from "./Components/EditData";
import CreateEmployee from "./Components/CreateEmployee";
import Tasks from "./Components/Tasks";
import CrateTask from "./Components/CreateTask";
import Employees from "./Components/Employees";
import EditTask from "./Components/EditTask";
import HomePage from "./Components/HomePage";
import OwnEmployeePage from "./Components/OwnEmployeePage";
export const Context = createContext([]);
export const TasksData = createContext([]);
function App() {
  const [data, setData] = useState([]);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch("https://rocky-temple-83495.herokuapp.com/employees")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  useEffect(() => {
    fetch("https://rocky-temple-83495.herokuapp.com/tasks")
      .then((res) => res.json())
      .then((res) => setTasks(res));
  }, []);
  return (
    <div>
      <Context.Provider value={{ data, setData, tasks, setTasks }}>
        <BrowserRouter>
          <HomePage />
          <Routes>
            <Route path="/employees" element={<Employees />} />
            <Route path="/create/Employee" element={<CreateEmployee />} />
            <Route path="/editEmployee/:id" element={<EditEmployee />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/create/task" element={<CrateTask />} />
            <Route path="/edit/task/:id" element={<EditTask />} />
            <Route path="/ownPage/:id" element={<OwnEmployeePage />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
