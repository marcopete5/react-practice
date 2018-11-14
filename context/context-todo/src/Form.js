import React, { Component } from 'react';

import {withTodos} from './TodoProvider';

class Form extends Component {
    constructor(){
        super()

        this.state = {
            title: '',
            description: ''
        }
    }

    handleChange = e => {
        let {name, value} = e.target;
        this.setState({[name]: value})
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.type === 'add' ? this.props.handleSubmit(this.state) : this.props.editTodos(this.props.id, this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange} name='title' placeholder='title' value={this.state.title} />
                <input type="text" onChange={this.handleChange} name='description' placeholder='description' value={this.state.description} />
                <button>{this.props.button}</button>
            </form>
        );
    }
}

export default withTodos(Form);