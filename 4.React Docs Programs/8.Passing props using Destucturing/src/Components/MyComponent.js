import React from 'react';

class MyComponent extends React.Component {

    render() {
        return ( 
            <div>
                {console.log(this.props, 'My Component')}
            </div>
        )
    }
}



export default MyComponent;

