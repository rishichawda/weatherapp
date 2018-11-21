import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions';

class SearchBar extends Component{
  const
  constructor(props){
    super(props);
    this.state = {term : ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }


onInputChange(event){
  this.setState({
    term: event.target.value
  });
}

onFormSubmit(event){
    event.preventDefault();
    var map = 
   this.props.fetchWeather(this.state.term);
   this.setState({ term : '' });
}

  render(){
    return (

      <nav className="navbar navbar-light">
        <a className="navbar-brand text-white">
          Weather App 
        </a>
        <form className="form-inline" onSubmit={this.onFormSubmit}>
          <input placeholder="Get a five day forecast for a city." id = "search" className="form-control mr-2" value={this.state.term} onChange={this.onInputChange} required/>
          <button type="submit" className="btn btn-outline-light my-2 my-0">Search</button>
        </form>
      </nav>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather},dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);
