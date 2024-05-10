import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active === true);
  const done = props.tasks.filter((task) => !task.active);
  console.log(done, active);
  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  const doneTasks = done.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  return (
    <>
      <div className="active">
        <h2>Zadania do zrobienia</h2>
        <ul>
          {activeTasks.length > 0 ? activeTasks : <p>Brak zadań, jest ok !</p>}
        </ul>
      </div>
      <hr />
      <div className="done">
        <h4>
          Zadania zrobione <em>({done.length})</em>
        </h4>
        {done.length > 5 && (
          <span style={{ fontSize: "10px", fontWeight: "bold" }}>
            Wyświetlonych jest jedynie 5 ostatnich zadań
          </span>
        )}
        {doneTasks.slice(0, 5)}
      </div>
      <hr />
    </>
  );
};

export default TaskList;
