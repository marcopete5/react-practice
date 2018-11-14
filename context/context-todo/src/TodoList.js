import React, { Component } from 'react';
import Todo from './Todo'

import {withTodos} from './TodoProvider'

class TodoList extends Component {

    componentDidMount(){
        this.props.getTodos()
    }

    render() {
        const todos = this.props.todos.map(todo => <Todo key={todo._id} allTodos={todo} />)
        return (
            <div>
                {todos}
            </div>
        );
    }
}

export default withTodos(TodoList);