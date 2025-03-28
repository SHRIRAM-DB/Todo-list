import React from "react";

function ShowTask({ tasklist, setTasklist, task, setTask }) {
  function handleDelete(id) {
    const updateTask = tasklist.filter((todo) => id !== todo.id);
    setTasklist(updateTask);
  }

  function handleEdit(id) {
    const selectedTask = tasklist.find((todo) => id === todo.id);
    setTask(selectedTask);
  }

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{tasklist.length}</span>
        </div>
        <button className="clearAll" onClick={() => setTasklist([])}>
          Clear All
        </button>
      </div>
      <ul>
        {task !== "" &&
          tasklist.map((task) => (
            <li key={task.id}>
              <p>
                <span className="name">{task.name}</span>
                <span className="time">{task.time}</span>
              </p>
              <i
                onClick={() => handleEdit(task.id)}
                className="bi bi-pencil-square"
              ></i>
              <i
                onClick={() => handleDelete(task.id)}
                className="bi bi-trash"
              ></i>
            </li>
          ))}
      </ul>
    </section>
  );
}

export default ShowTask;
