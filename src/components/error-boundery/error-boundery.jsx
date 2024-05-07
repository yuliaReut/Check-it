import React, { Component } from 'react';
import {PropTypes} from 'prop-types';
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    console.error(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>О, нет! Ошибка!</h1>
          <p>Исправьте, пожалуйста, следующие ошибки в приложении САМИ. Или попросите помощи у Юлии Реутовой=).</p>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
};

export default ErrorBoundary;
