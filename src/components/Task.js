import React from "react";

const Task = (props) => {
  const { text, date } = props.task;
  return (
    <div>
      <div>
        <p>
          <strong>{text}</strong> - do <span>{date}</span>
          <button>zrobione</button>
          <button>x</button>
        </p>
      </div>
    </div>
  );
};

export default Task;
