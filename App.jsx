import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const addTask = (text) => {
    if (!text.trim()) return;

    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#1e1e1e" : "#ffffff";
    document.body.style.color = darkMode ? "#ffffff" : "#000000";
  }, [darkMode]);

  return (
    <div className="app">
      <h1>Interactive Task Dashboard</h1>

      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <TaskForm addTask={addTask} />

      <h3>
        Total: {tasks.length} | Completed: {tasks.filter(t => t.completed).length}
      </h3>

      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />
    </div>
  );
}

export default App;
