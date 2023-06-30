import React from "react";
import TodoItem from "../TodoItem/TodoItem";

const TodoTaskList = ({ items, updateTask }) => {
  return (
    <div>
      {items.length > 0 &&
        items.map((item) => {
          return (
            <TodoItem key={item._id} item={item} updateTask={updateTask} />
          );
        })}
    </div>
  );
};

export default TodoTaskList;
