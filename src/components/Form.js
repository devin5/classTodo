import React, { Component } from 'react'


class Form extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            input:"" 
        }
    }

    handleChange = () => {
        se
    }

    render(){
        return(
            <form>
                <input value={this.state.input}
                name={input}
                id={input}
                placeholder={"new todo"}
                onChange={}>
                </input>
            </form>
        )
    }
}