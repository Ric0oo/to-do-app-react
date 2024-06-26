import React from "react";

const Task = (props) => {
  const style = {
    color: "red",
  };

  const { text, date, id, active, important, finishDate } = props.task;

  if (active) {
    return (
      <div>
        <div>
          <p>
            <strong style={important ? style : null}>{text}</strong> - do{" "}
            <span>{date} </span>
            <button onClick={() => props.change(id)}>zrobione</button>
            <button onClick={() => props.delete(id)}>x</button>
          </p>
        </div>
      </div>
    );
  } else {
    const endTime = new Date(finishDate).toLocaleString();
    return (
      <div>
        <p>
          <strong>{text}</strong>
          <em> (zrobić do - {date})</em>
          <br /> Potwierdzenie wykonania<span> {endTime} </span>{" "}
          <button onClick={() => props.delete(id)}>x</button>
        </p>
      </div>
    );
  }
};

export default Task;
