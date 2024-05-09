import React from "react";

const Task = (props) => {
  const { text, date, id } = props.task;
  return (
    <div>
      <div>
        <p>
          <strong>{text}</strong> - do <span>{date} </span>
          <button onClick={() => props.change(id)}>zrobione</button>
          <button onClick={() => props.delete(id)}>x</button>
        </p>
      </div>
    </div>
  );
};

export default Task;
