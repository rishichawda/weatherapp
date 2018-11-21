import axios from 'axios';

const API_KEY = 'fa92596bd08548678781cc549802e2e6';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){

  const url = `${ROOT_URL}&q=${city}`;
  const request = axios.get(url);
  return {
    type : FETCH_WEATHER,
    payload : request
  };
}
