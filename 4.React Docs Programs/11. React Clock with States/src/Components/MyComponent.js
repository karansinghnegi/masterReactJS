import React from 'react';

class MyComponent extends React.Component {
    state = {
        date: new Date()
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }


    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(), 1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return ( 
            <div>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}



export default MyComponent;

