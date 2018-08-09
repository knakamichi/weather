import axios from 'axios';

const API_KEY = 'e9cb8bbf6a5224e628cd62f2834d0042';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`; // = 'ROOT_URL' + API_KEY;

export const FETCH_WEATHER = 'FETCH_WEATHER';
// action for making ajax (api) requests
// API requires city name and country code, so pass it to the function
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  // send a promise request
  const request = axios.get(url);

  // console.log('Request', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
