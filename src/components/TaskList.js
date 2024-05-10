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
        <ul>{activeTasks}</ul>
      </div>
      <hr />
      <div className="done">
        <h4>Zadania zrobione(0)</h4>
        <ul>{doneTasks}</ul>
      </div>
      <hr />
    </>
  );
};

export default TaskList;
