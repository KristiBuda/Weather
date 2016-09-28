import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = { term: ''};
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onFormSubmit(event){
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({term: ''});
  }

  onInputChange(event){
    this.setState({term: event.target.value});
  }
  render(){
    return(
      <div class="container">
        <div class="row">
        <div class="col-md-4 col-md-offset-3">
            <form onSubmit={this.onFormSubmit} class="search-form">
                <div class="form-group has-feedback">
            		  <label for="search" class="sr-only">Search</label>
                  <input placeholder="Search a city" className="form-control" name="search" id="search"
                    value={this.state.term}
                    onChange={this.onInputChange}
                  />
              		<span class="glyphicon glyphicon-search form-control-feedback"></span>
            	  </div>
            </form>
          </div>
        </div>
      </div>
    )
  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather}, dispatch);
}
export default connect(null, mapDispatchToProps)(SearchBar);
