import React from "react";
import "./TodoItem.css";
import axios from "axios";
const TodoItem = ({ item, updateTask }) => {
  const deletehandler = (ev) => {
    ev.preventDefault();
    axios
      .get("http://localhost:3333/deleteTask", {
        params: { id: ev.target.id },
      })
      .then((data) => {
        updateTask(data);
      });
  };
  return (
    <div>
      <div>
        <input type="checkbox" />
        {item.title}
        <span className="deleteTask" id={item._id} onClick={deletehandler}>
          ❌
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
