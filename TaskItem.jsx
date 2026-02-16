function TaskItem({ task, deleteTask, toggleTask }) {
  return (
    <div style={{ margin: "10px" }}>
      <span
        onClick={() => toggleTask(task.id)}
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          cursor: "pointer",
          marginRight: "10px"
        }}
      >
        {task.text}
      </span>

      <button onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </div>
  );
}

export default TaskItem;
