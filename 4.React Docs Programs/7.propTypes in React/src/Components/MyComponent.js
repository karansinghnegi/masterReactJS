import React from 'react';
import propTypes from 'prop-types'

class MyComponent extends React.Component {

    render() {
        return ( 
            <div>
                <p>Prop-Types in React</p>
            </div>
        )
    }
}

MyComponent.propTypes = {
    name: propTypes.string.isRequired,
    age: propTypes.number.isRequired,
    obj: propTypes.shape({
        love: propTypes.string,
        life: propTypes.string
    }).isRequired
}

export default MyComponent;

