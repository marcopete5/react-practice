import React, { Component } from 'react';
const {Provider, Consumer} = React.createContext()

class ThemeProvider extends Component {
    constructor(){
        super()

        this.state = {
            title: 'Hello Place',
            on: false,
        }
    }

    toggle = () => {
        console.log('hello')
        this.setState(({on}) => ({on: !on}))
    }

    render() {
        return (
            <Provider value={{
                toggle: this.toggle,
                ...this.state,
            }}>
                {this.props.children}
            </Provider>
        );
    }
}

export default ThemeProvider;

export const withTheme = C => props => (
    <Consumer>
        {value => <C {...value}{...props} />}
    </Consumer>
)