import React from 'react';
import SearchBar from '../container/search_bar';
import WeatherList from '../container/weather_list';
import '../index.css';

export default class App extends React.Component {
  render() {
    return (
      <div>
      <SearchBar />
      <WeatherList />
      </div>
    );
  }
}
