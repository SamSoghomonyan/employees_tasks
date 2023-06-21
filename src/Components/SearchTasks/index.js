import React, { useContext, useEffect } from "react";
import { useState } from "react";
import "./style.css";
import { Context } from "../../App";
function SearchTasks() {
  const { tasks, setTasks } = useContext(Context);
  const [nameLike, setNameLike] = useState("");
  const [descriptionLike, setDescriptionLike] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [searchDate, setSerachData] = useState([]);
  const handelClick = () => {
    // fetch(
    //   `https://rocky-temple-83495.herokuapp.com/tasks?${
    //     nameLike && "name_like"`=${nameLike}`
    //   }&${descriptionLike && "description_like"`=${descriptionLike}`}&${
    //     startDate && "startDate"`=${startDate}`
    //   }&${endDate && "endDate"`=${endDate}`}`
    // )
    //   .then((res) => res.json())
    //   .then((res) => console.log("res", res));
    fetch(
      `https://rocky-temple-83495.herokuapp.com/tasks?${
        nameLike ? "name_like=" + nameLike : ""
      }&${descriptionLike ? "description_like=" + descriptionLike : ""}&${
        startDate ? "startDate=" + startDate : ""
      }&${endDate ? "endDate=" + endDate : ""}`
    )
      .then((res) => res.json())
      .then((res) => setTasks(res));
  };

  return (
    <div className="search">
      <input
        onChange={(e) => setNameLike(e.target.value)}
        type="text"
        placeholder="name_like"
      />
      <input
        onChange={(e) => setDescriptionLike(e.target.value)}
        type="text"
        placeholder="description_like"
      />
      <input
        onChange={(e) => setStartDate(e.target.value)}
        type="date"
        placeholder="startDate"
      />
      <input
        onChange={(e) => setEndDate(e.target.value)}
        type="date"
        placeholder="endDate"
      />
      <button onClick={handelClick} className="buttonSearch">
        Search
      </button>
    </div>
  );
}

export default SearchTasks;
