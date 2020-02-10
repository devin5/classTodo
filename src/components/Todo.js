import React from "react";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1 className={this.props.todo.completed ? "completed" : null}>
        {this.props.todo.task}
      </h1>
    );
  }
}
