import React, { Component } from "react";
import "./AddTask.css";

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: "",
    checked: false,
    date: this.minDate,
  };

  handleDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";

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
          min={this.minDate}
          max={this.maxDate}
          onChange={this.handleDate}
        />
        <br />
        <button>Dodaj</button>
        <hr />
      </div>
    );
  }
}

export default AddTask;
