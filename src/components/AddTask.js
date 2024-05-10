import React, { Component } from "react";
import "./AddTask.css";

class AddTask extends Component {
  state = {
    text: "",
    checked: false,
    date: "",
  };
  render() {
    return (
      <div className="form">
        <input
          type="text"
          placeholder="Dodaj zadanie"
          value={this.state.text}
        />
        <input id="important" type="checkbox" checked={this.state.checked} />
        <label htmlFor="important">Ważne</label>
        <br />
        <label htmlFor="date">Do kiedy zrobić</label>
        <input
          type="date"
          value={this.state.date}
          min={"2023-01-01"}
          max={"2026-12-31"}
        />
        <br />
        <button>Dodaj</button>
        <hr />
      </div>
    );
  }
}

export default AddTask;
