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
  console.log(event.target.value);
  this.setState({
    term: event.target.value
  });
}

onFormSubmit(event){
  event.preventDefault();
   this.props.fetchWeather(this.state.term);
   this.setState({ term : '' });
}

  render(){
    return (
      <nav className="navbar navbar-toggleable-md">
  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <a className="navbar-brand" href="#">
    <img src="src/images/logo.jpg" style={{width : '52px' , height : '52px'}} className="img img-fluid"/>
    <h2 className="appname"> Weather App </h2>
  </a>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <div className="navbar-nav mr-auto">
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
        placeholder="Get a five day forecast for a city."
        id = "search"
        className="form-control"
        value={this.state.term}
        onChange={this.onInputChange}
        />
        <span className="input-group-btn" style={{marginLeft: '11px'}}>
          <button role="button" type="submit" className="btn btn-secondary">Search</button>
        </span>
      </form>
    </div>
    <div className="form-inline my-2 my-lg-0">
    </div>
  </div>
</nav>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({fetchWeather},dispatch);
}

export default connect(null,mapDispatchToProps)(SearchBar);
