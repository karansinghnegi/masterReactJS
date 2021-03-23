import React from 'react';

class MyComponent extends React.Component {

    render() {
        let newProps = 'red'
        return ( 
            <div>

                {/* {this.props.children} */}
                {React.Children.map(this.props.children, child => {
                    return React.cloneElement(child, {newProps}, null)
                })}
            </div>
        )
    }
}



export default MyComponent;

