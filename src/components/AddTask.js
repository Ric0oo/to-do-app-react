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

  handleText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleCheckbox = (e) => {
    this.setState({
      checked: e.target.checked,
    });
  };

  handleClick = () => {};

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";

    return (
      <div className="form">
        <input
          type="text"
          placeholder="Dodaj zadanie"
          value={this.state.text}
          onChange={this.handleText}
        />
        <input
          id="important"
          type="checkbox"
          checked={this.state.checked}
          onChange={this.handleCheckbox}
        />
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
        <button onChange={this.handleClick}>Dodaj</button>
        <hr />
      </div>
    );
  }
}

export default AddTask;
