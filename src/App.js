import React from "react";
import { data } from "./data";
import Todo from './components/Todo'
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: data
    };
  }

  render() {
    console.log(this.state.todos);
    return <div className="App">
    
      {this.state.todos.map(i =><Todo todo={i}/>)}
    </div>;
  }
}

export default App;
