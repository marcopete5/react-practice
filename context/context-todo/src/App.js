import React, { Component } from 'react';
import Form from './Form'
import TodoList from './TodoList'

class App extends Component {
  render() {
    return (
      <div>
        <Form button='Submit' type='add' />
        <TodoList />
      </div>
    );
  }
}

export default App;
