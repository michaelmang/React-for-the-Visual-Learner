import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>Hello React via a project!</div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
