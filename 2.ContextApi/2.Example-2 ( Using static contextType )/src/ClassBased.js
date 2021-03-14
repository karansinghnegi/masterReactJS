import React, { Component } from 'react';
import ThemeContext from './ThemeContext';

class ClassBased extends Component {
  static contextType = ThemeContext;

  render() {
    const color = this.context;
    console.log(color)
    return (
      <h1 style={ {color: color}}>Second Way of Consuming ContextAPI in Class Based Components</h1>
    )
  }

}

export default ClassBased;