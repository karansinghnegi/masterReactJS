import React from 'react';

class StatefullComponent extends React.Component {
     firstName = this.props.name.split(" ")[0];
     state = {
         name: this.firstName,
     }

    render() {
        return (
            <h1>Hello, {this.state.name}</h1>
        )
    }
}

export default StatefullComponent;