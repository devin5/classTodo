import React from "react";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1 onClick={() => this.props.toggle(this.props.todo.id)} className={this.props.todo.completed ? "completed" : null}>
        {this.props.todo.task}
      </h1>
    );
  }
}
