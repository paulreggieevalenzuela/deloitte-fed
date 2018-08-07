import React, { Component } from 'react';

// Components
import Banner from './Banner';
import Content from './Content';

class Home extends Component {
  render() {
    return (
      <div className="app">
        <Banner />
        <Content />
      </div>
    );
  }
}

export default Home;
