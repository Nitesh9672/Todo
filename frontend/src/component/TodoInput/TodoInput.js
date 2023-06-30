import React, { useRef } from "react";

const TodoInput = ({ newTask }) => {
  const title = useRef("");
  const tasksumbitHandler = (e) => {
    e.preventDefault();
    // console.log(title.current.value);
    newTask(title.current.value);
  };
  return (
    <div>
      <input type="text" placeholder="Enter The Task" ref={title} />
      <br />
      <button onClick={tasksumbitHandler}>Add Task</button>
    </div>
  );
};

export default TodoInput;
