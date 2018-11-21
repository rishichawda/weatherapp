import React, {Component} from 'react';
import { connect } from 'react-redux';
import Data from '../components/data';
import GoogleMap from '../components/google_map';
// import ReactCSSdivansitionGroup from 'react-divansition-group';

class WeatherList extends Component{
  renderWeather(cityData){
    const temp = cityData.list.map(weather => weather.main.temp);
    const press = cityData.list.map(weather => weather.main.pressure);
    const humid = cityData.list.map(weather => weather.main.humidity);
    const {lon,lat} = cityData.city.coord;
    return (
      <div className="container p-0 mt-5">
          <p className="alert-warning text-center text-dark">Weather details for {cityData.city.name}</p>
        <div className="row w-100 m-0 text-white">
            <div className="col-sm-4 align-middle text-center">
            <p className="lead">Temperature</p>
            <Data color='red' data={temp} unit='°C'/>
            </div>
            <div className="col-sm-4 align-middle text-center">
            <p className="lead">Pressure</p>
            <Data color='green' data={press} unit='HPA'/>
            </div>
            <div className="col-sm-4 align-middle text-center">
            <p className="lead">Humidity</p>
            <Data color='blue' data={humid} unit='%'/>
            </div>
          </div>
        <div className="row w-100 text-white">
      <div className="row w-100 ml-3 text-white"><GoogleMap key={"map"+cityData.city.name} mapid={cityData.city.name} lat={lat} lon={lon} title={cityData.city.name}/></div>
      </div>
      </div>
      
    );
  }
  render(){
    if(this.props.weather[0]!==undefined){
        return (
            <div className="container-fluid p-4">
              {this.renderWeather(this.props.weather[0])}
            </div>
        );
      } 
      if(this.props.weather.length!==0) { 
        return (
        <div className="jumbotron-fluid mt-2 p-5">
           <div className="container p-5 text-center text-white">
             <h1 className="animated bounceIn">Oops! </h1>
                <h4>Looks like you put a wrong city name! Perhaps a spelling error? </h4>
           </div>
         </div>
         );
    }  else { 
       return  (
         <div className="jumbotron-fluid mt-2 p-5">
           <div className="container p-5 text-center text-white">
             <h1 className="display-7">Hello, there! Thanks for looking me up! </h1>
             <p className="lead">I can help you with knowing average weather stats for the next five days! </p>
             <p className="lead"> Just type the name of your city on the search bar on top. </p>
           </div>
         </div>
       ) ;
      }
  }
  }
function mapStateToProps({weather}){
  return ({weather});
}
export default connect(mapStateToProps)(WeatherList);
