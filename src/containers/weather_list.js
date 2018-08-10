import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/charts';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

  renderWeather (cityData) {
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273.15);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const {lng, lat} =  cityData.city.coord;

    return (
      <tr key={name}>
        <td><GoogleMap lng={lng} lat={lat} /></td>
      {/* chart component に渡してコード簡略化 */}
        <td><Chart data={temps} color="orange" units="°c"/></td>
        <td><Chart data={pressures} color="green" units="hPa"/></td>
        <td><Chart data={humidities} color="gray" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°c)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }){
  return { weather };
}
// same code above with ES6
// function mapStateToProps(state) {
//   return {
//     // see weather reducer for why state.weather
//     weather: state.weather
//   }
// }

export default connect(mapStateToProps)(WeatherList);
