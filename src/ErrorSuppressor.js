import React, { Component } from 'react';

class ErrorSuppressor extends Component {
  componentDidCatch(error) {
    console.error('An error occurred:', error); // Optional: Log the error for debugging
  }

  render() {
    return this.props.children;
  }
}

export default ErrorSuppressor;
