import React from 'react';
import ReactDOM from 'react-dom';

import Header from './neighborhoods/Header.js';
import SectionA from './neighborhoods/Section A.js';
import SectionB from './neighborhoods/Section B.js';
import SectionC from './neighborhoods/Section C.js';
import Footer from './neighborhoods/Footer.js';

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-page">
        <Header/>
        <SectionA/>
        <SectionB/>
        <SectionC/>
        <Footer/>
      </div>
    )
  }
}

module.exports = LandingPage;
