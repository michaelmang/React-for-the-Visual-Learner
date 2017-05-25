import React from 'react';
import ReactDOM from 'react-dom';

class DemoLink extends React.Component {
  render() {
    return (
      <div>
        <a href="#">
          <span className="demo-link">
          Demo
          </span>
        </a>
      </div>
    )
  }
}

module.exports = DemoLink;
