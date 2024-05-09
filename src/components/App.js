import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  state = {
    tasks: [
      {
        id: 1,
        text: "Learn React",
        date: "2024-05-08",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "Learn Redux",
        date: "2024-05-08",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: "Learn Typescript",
        date: "2024-05-08",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 4,
        text: "Learn Javascript",
        date: "2024-05-08",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 5,
        text: "Learn NextJS",
        date: "2024-05-08",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 6,
        text: "Learn Something",
        date: "2024-05-08",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 7,
        text: "Clean car",
        date: "2024-05-08",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 8,
        text: "Go to Reda",
        date: "2024-05-08",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 9,
        text: "Love Agata",
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
    console.log("change w APP o id" + id);
  };

  render() {
    return (
      <div className="App">
        TO DO App
        <AddTask />
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
