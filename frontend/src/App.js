import TodoInput from "./component/TodoInput/TodoInput";
import TodoTaskList from "./component/TodoTaskList/TodoTaskList";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
// let data = [{ title: "Cricket" }, { title: "playing" }];
function App() {
  const URL = (path) => {
    return `http://localhost:3333/${path}`;
  };

  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get(URL("taskitems"))
      .then((data) => {
        setItems(data.data);
      })
      .catch((err) => console.log(err));
  }, [items]);

  const newTask = (title) => {
    axios
      .post(URL("taskitem"), {
        title,
      })
      .then((data) => {
        setItems(data.data);
      });
    // setItems([{ title: title }, ...items]);
  };
  const updateTask = (data) => {
    setItems(data.data);
  };

  return (
    <>
      <TodoInput newTask={newTask}></TodoInput>
      <TodoTaskList items={items} updateTask={updateTask}></TodoTaskList>
    </>
  );
}

export default App;
