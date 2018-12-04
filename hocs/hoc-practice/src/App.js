import React, { Component } from 'react';
import Menu from './Menu'
import Card from './Card'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Card />
      </div>
    );
  }
}

export default App;