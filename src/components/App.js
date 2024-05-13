import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  counter = 9;
  state = {
    tasks: [
      {
        id: 0,
        text: "Learn React",
        date: "2024-05-08",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "Learn Redux",
        date: "2024-05-08",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "Learn Typescript",
        date: "2024-05-08",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: "Learn Javascript",
        date: "2024-05-08",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 4,
        text: "Learn NextJS",
        date: "2024-05-08",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 5,
        text: "Learn Something",
        date: "2024-05-08",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 6,
        text: "Clean car",
        date: "2024-05-08",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 7,
        text: "Read a book",
        date: "2024-05-08",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 8,
        text: "Go for a trip to USA",
        date: "2024-05-08",
        important: false,
        active: true,
        finishDate: null,
      },
    ],
  };

  deleteTask = (id) => {
    // console.log("delete elementu o id", id);
    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex((task) => task.id === id);
    // tasks.splice(index, 1);
    // this.setState({ tasks });
    let tasks = [...this.state.tasks];
    tasks = tasks.filter((task) => task.id !== id);
    this.setState({
      tasks,
    });
  };

  changeTaskStatus = (id) => {
    // console.log("change w APP o id" + id);
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks,
    });
  };

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text: text,
      date: date,
      important: important,
      active: true,
      finishDate: null,
    };
    this.counter++;

    this.setState((prevState) => {
      return {
        tasks: [...prevState.tasks, task],
      };
    });
    return true;
  };

  render() {
    return (
      <div className="App">
        <h1>TO DO App</h1>
        <AddTask add={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
