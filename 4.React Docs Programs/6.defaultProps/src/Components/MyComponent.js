import React from 'react';

class MyComponent extends React.Component {
    static defaultProps = {
        age: 'Karan',
        sex: 'Male'
    }
 
    render() {
        console.log(this.props)
        return ( 
            <div>
                <p>
                    Hi, Understanding defaultProps
                </p>
                <p>{console.log(this.props)}</p>
            </div>
        )
    }
}

export default MyComponent;