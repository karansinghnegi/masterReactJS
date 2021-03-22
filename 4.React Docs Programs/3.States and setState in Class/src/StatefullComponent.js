import React from 'react';

class StatefullComponent extends React.Component {
     state = {
         toggle: true
     }

     onClick = () => {
        this.setState((prevState, props) => {
            console.log('Hi from setState')
            console.log(props)
            return { toggle: !prevState.toggle }
        })
     }

    render() {
        return (
            <div onClick={this.onClick}>
                Hello, {this.props.name} ! I'm a Component.
                <br />
                Toggle is : {this.state.toggle.toString()}
            </div>
        )
    }
}

export default StatefullComponent;