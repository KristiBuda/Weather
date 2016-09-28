import React, { Component } from 'react';
import { connect } from 'react-redux';

class Weather extends Component{

  renderCurrentTemperature(Data){
    const key = Data.city.id;
    const cityName = `${Data.city.name}, ${Data.city.country}`;
    const currentTemp = Math.round(Data.list[0].main.temp- 273.15);
    return(
      <div key={key}>
        <h1>{cityName}</h1>
        <h1>{currentTemp}&deg;C</h1>
        <i className="fa fa-chevron-down fa-4x" aria-hidden="true"></i>
      </div>
    );

  }

  render(){
    return(
      <div  className="container">
        <div className="text-center">
          {this.props.weather.map(this.renderCurrentTemperature)}
        </div>
      </div>
    );
  }
}

function mapStateToProps({weather}){
  return { weather };
}

export default connect(mapStateToProps)(Weather);
