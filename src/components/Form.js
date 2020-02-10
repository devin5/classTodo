import React, { Component } from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
      e.preventDefault()
    this.props.add(this.state.input);
  };

  render() {
    return (
        <>
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.input}
          name="input"
          id="input"
          placeholder={"new todo"}
          onChange={this.handleChange}
        />
        <button type="submit">add todo</button>
      </form>
      
      </>
    );
  }
}
