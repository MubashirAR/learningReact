import React, { Component } from "react";

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }
    componentDidCatch = (error, info) => {
        console.log('componentDidCatch');
        console.log(error);
        
        
        this.setState({
            hasError:true,
            errorMessage: error
        })
    }
    render() {
        if (this.state.hasError) {
            
            return (
                // <h1>Something went wrong</h1>
                <p>this.state.errorMessage</p>
            )

        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;