import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';

class SlackChannel extends React.Component {
  render() {
    return (
      <Col lg={12}>
        <img className="slack-channel" src="./images/Slack Channel.svg" />
      </Col>
    )
  }
}

module.exports = SlackChannel;
