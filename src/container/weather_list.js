import React, {Component} from 'react';
import { connect } from 'react-redux';
import Data from '../components/data';
import GoogleMap from '../components/google_map';
// import ReactCSSTransitionGroup from 'react-transition-group';

class WeatherList extends Component{
  renderWeather(cityData){
    const temp = cityData.list.map(weather => weather.main.temp);
    const press = cityData.list.map(weather => weather.main.pressure);
    const humid = cityData.list.map(weather => weather.main.humidity);
    const {lon,lat} = cityData.city.coord;
    return (
      <tr key={cityData.city.name}>
        <td><GoogleMap lat={lat} lon={lon}/></td>
        <td><Data color='red' data={temp} unit='K'/></td>
        <td><Data color='green' data={press} unit='HPA'/></td>
        <td><Data color='blue' data={humid} unit='%'/></td>
      </tr>
    );
  }
  render(){
    return (
      <div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th> City </th>
            <th> Temperature</th>
            <th> Pressure</th>
            <th> Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
      </div>
    );
  }
}
//
// function mapStateToProps(state){
//   return({
//     weather : state.weather
//   });
// }
//With es6 syntax, the above code can be written as
function mapStateToProps({ weather }){
  return ({ weather });
}
export default connect(mapStateToProps)(WeatherList);
