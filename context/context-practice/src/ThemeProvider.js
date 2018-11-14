import React, {Component} from 'react';
const {Provider, Consumer} = React.createContext()

class ThemeProvider extends Component {
    constructor(){
        super()
        
        this.state = {
            theme: "dark"
        }

    }

    toggleTheme = () => {
        this.setState(prevState => ({
            theme: prevState.theme === "dark" ? "light" : "dark"
          }))
    }

    render(){
        return (
            <Provider value={{
                    toggleTheme: this.toggleTheme,
                    ...this.state
                }}>
                {this.props.children}
            </Provider>
        )
    }
}

export default ThemeProvider

export const withTheme = Component => props => (
    <Consumer>
      {value => <Component {...value}{...props}/>}
    </Consumer>
  )