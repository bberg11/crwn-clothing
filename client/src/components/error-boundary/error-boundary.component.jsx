import React from 'react';

import './error-boundary.styles.scss';

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log({
      error,
      info,
    });
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <div className="error-image-overlay">
          <div className="error-image-container" />
          <div className="error-image-text">Sorry, something went wrong</div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
