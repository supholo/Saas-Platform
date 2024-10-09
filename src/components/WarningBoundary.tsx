import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

class WarningBoundary extends Component<Props> {
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (error.message.includes('Support for defaultProps will be removed')) {
      // Suppress the warning
      console.log('Suppressed defaultProps warning');
    } else {
      // Re-throw if it's not the warning we're looking for
      throw error;
    }
  }

  render() {
    return this.props.children;
  }
}

export default WarningBoundary;