import React from "react";
import { data } from "./data";
import Todo from "./components/Todo";
import Form from "./components/Form";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: data
    };
  }

  toggle = id => {
    this.setState({
      todos: this.state.todos.map(i => {
        if (i.id === id) {
          return { ...i, completed: !i.completed };
        } else {
          return i;
        }
      })
    });
  };

  filter = () => {
    this.setState({
      todos: this.state.todos.filter(item => !item.completed)
    });
  };
  
  addTodo = todo => {
    console.log("im the todo", todo);
    this.setState({
      todos: [
        ...this.state.todos,
        {
          task: todo,
          id: Date.now(),
          completed: false
        }
      ]
    });
  };

  render() {
    return (
      <div className="App">
      <h1>todo app</h1>
        <Form add={this.addTodo} />

        {this.state.todos.map(i => (
          <Todo toggle={this.toggle} todo={i} />
        ))}
        <button onClick={this.filter}>delete completed</button>
      </div>
    );
  }
}

export default App;
