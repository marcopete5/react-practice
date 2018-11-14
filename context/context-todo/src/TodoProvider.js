import React, { Component } from 'react';
import axios from 'axios';

const TodoContext = React.createContext();

class TodoProvider extends Component {
    constructor(){
        super()

        this.state = {
            todos: [],
            toggleForm: true
        }
    }
    toggle = () => {
        this.setState({toggleForm: false})
    }

    editTodos = (id, updatedTodo) => {
        axios.put('https://api.vschool.io/marcus/todo/' + id, updatedTodo).then(res => {
            this.setState(prevState => {
                return {
                    todos: prevState.todos.map(todo => todo._id === id ? todo = updatedTodo : todo),
                    toggleForm: true
                }
            })
        })
    }

    deleteTodos = id => {
        axios.delete('https://api.vschool.io/marcus/todo/' + id).then(res => {
            this.setState(prevState => {
                return {
                    todos: prevState.todos.filter(todo => todo._id !== id)
                }
            })
        })
        
    }

    getTodos = () => {
        axios.get('https://api.vschool.io/marcus/todo').then(res => {
            this.setState({todos: res.data})
        })
    }

    handleSubmit = newTodo => {
        axios.post('https://api.vschool.io/marcus/todo', newTodo).then(res => {
            this.setState(prevState => {
                return {
                    todos: [...prevState.todos, res.data]
                }
            })
        })
    }

    render() {
        console.log({...this.state})
        return (
            <TodoContext.Provider value={{
                toggle: this.toggle,
                editTodos: this.editTodos,
                deleteTodos: this.deleteTodos,
                getTodos: this.getTodos,
                handleSubmit: this.handleSubmit,
                ...this.state
            }}>
                {this.props.children}
            </TodoContext.Provider>
        );
    }
}

export default TodoProvider;

export const withTodos = C => props => (
    <TodoContext.Consumer>
        {value => <C {...value}{...props}/>}
    </TodoContext.Consumer>
)