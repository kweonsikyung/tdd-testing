import React, { useState } from "react";
import "./App.css";
import List from "./List/List";
import { todoData } from "./mocking/todo-data";

interface TaskProps {
  id: number;
  title: string;
  isDone: boolean;
}

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>(todoData);

  const handleTaskChange = (id: number, isChecked: boolean) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isDone: isChecked } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h4>TODO APP</h4>
      <List tasks={tasks} onChange={handleTaskChange} />
    </div>
  );
}

export default App;
