import { useState, useEffect } from "react";
import axios from "axios";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const fetchTasks = () => {
    axios.get("/api/tasks").then(res => {
      setTasks(res.data);
    });
  };

  const addTask = () => {
    if (!title.trim()) return;
    axios.post("/api/tasks", { title }).then(() => {
      setTitle("");
      fetchTasks();
    });
  };

  const deleteTask = (id) => {
    axios.delete(`/api/tasks/${id}`).then(() => {
      fetchTasks();
    });
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container">
      <h1>📝 Task Manager</h1>

      <div className="input-row">
        <input
          type="text"
          placeholder="Enter new task"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className="task-item">
            <label>
              <input
                type="checkbox"
                onChange={() => deleteTask(task.id)}
              />
              <span>{task.title}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
