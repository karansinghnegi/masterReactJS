import React from 'react';

class MyButton extends React.Component {
    render() {
        return (
            <button style={ {color: this.props.newProps} }>Hello World!</button>
        )
    }
}

export default MyButton;