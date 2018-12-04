import React, { Component } from 'react';
import {withTheme} from './ThemeProvider'

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className={this.props.on ? 'dark' : 'light'}>
        {this.props.title}
        <button onClick={this.props.toggle}>{this.props.on ? 'Switch to Light' : 'Switch to Dark'}</button>
      </div>
    );
  }
}

export default withTheme(App);