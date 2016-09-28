import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import Weather from '../containers/weather';


export default class App extends Component {
  render() {
    return (
      <div className="jumbotron buda-jumbotron">
        <div className="container">
          <SearchBar />
          <div className="buda-weatherdata">
          <Weather />
          </div>
        </div>
      </div>
    );
  }
}
