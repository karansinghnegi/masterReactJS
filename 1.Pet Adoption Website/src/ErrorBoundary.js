import React, { Component } from 'react';
import { Link, Redirect } from '@reach/router'

class ErrorBoundary extends Component {
    state = { hasError: false , redirect: false}

    static getDerivedStateFromError () {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.log("Error Boundary Caught an Error", error, info)
    }
    
    componentDidUpdate() {
        if(this.state.hasError) {
            setTimeout(() => this.setState({
                redirect: true
            }), 5000)
        }
    }


    render() {
        if (this.state.redirect) {
            return <Redirect to="/" />
        }
        
        if(this.state.hasError) {
            return (
                <h1>There was an Error Boy !, Click here
                    <Link to="/">to Go back to HomePage or wait for 5seconds</Link>
                </h1>
            )
        }

        return this.props.children;
    }

} 

export default ErrorBoundary;