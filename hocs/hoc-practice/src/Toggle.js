import React, { Component } from 'react';

class Toggler extends Component {
    constructor(){
        super()

        this.state = {
            on: false
        }
    }

    toggle = () => {
        this.setState(({on}) => ({on: !on}))
    }
    render() {
        const { component , ...props } = this.props;
        const C = component;
        return (
            <C on={this.state.on} toggle={this.toggle}{...props}/>
        );
    }
}

export default Toggler;

export const withToggler = C => props => <Toggler component={C}{...props}/>