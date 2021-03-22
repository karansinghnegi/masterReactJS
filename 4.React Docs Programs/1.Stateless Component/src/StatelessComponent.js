import React from 'react';
import PropTypes from 'prop-types'

const StatelessComponent = props => {
    return <h1>My name is {props.name}</h1>
}

StatelessComponent.propTypes = {
    name: PropTypes.string.isRequired
}

export default StatelessComponent;