import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  const tasks = props.tasks.map((task) => <Task key={task.id} task={task} />);

  return (
    <>
      <div className="active">
        <h2>Zadania do zrobienia</h2>
        {tasks}
      </div>
      <hr />
      <div className="done">
        <h4>Zadania zrobione(0)</h4>
      </div>
      <hr />
    </>
  );
};

export default TaskList;