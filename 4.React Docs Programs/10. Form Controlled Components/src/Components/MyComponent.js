import React from 'react';

class MyComponent extends React.Component {
    state = {
        name: ''
    }

    onChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        return ( 
            <div>
                <label for='name-input'>Name: </label>
                <input 
                    id="name-input"
                    onChange={this.onChange}
                    value={this.state.name}
                />
            </div>
        )
    }
}



export default MyComponent;

