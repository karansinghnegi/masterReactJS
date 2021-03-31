import React from 'react';

class MyComponent extends React.Component {

    input = React.createRef();
    handleSubmit = this.handleSubmit.bind(this);

    handleSubmit(event) {
        alert('A name was submitted: ' + this.input.current.value)
    }


    render() {
        console.log(this.input)

        return ( 
          <form onSubmit={this.handleSubmit}>
              <label>
                  Name:
                  <input type="text" ref={this.input} defaultValue="Leenu" />
              </label>
              <input type="submit" value="Submit" />
          </form>
        )
    }
}



export default MyComponent;

