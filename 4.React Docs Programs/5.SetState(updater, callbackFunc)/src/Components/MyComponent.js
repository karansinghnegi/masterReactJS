import React from 'react';

class MyComponent extends React.Component {
    state = { greetings: 'Hello' }

    clickHandler = () => this.setState({
        greetings: 'Hello World !'
    }, console.log('Immediate Happening after setState Call'))

    render() {
        return ( 
            <div>
                <p>{this.state.greetings}</p>
                <button onClick={this.clickHandler}>Click Me</button>
            </div>
        )
    }
}

export default MyComponent;