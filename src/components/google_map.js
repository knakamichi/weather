import React, {Component} from 'react';

class GoogleMap extends Component {

  componentDidMount(){
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center:
        // lat: this.props.lat,
        // lng: this.props.lng
        new google.maps.LatLng(this.props.lat, this.props.lng)

    });
  }

  // this.refs.map => gives direct reference to html component below
  render(){
    return <div ref="map" />;
  }
}

export default GoogleMap;
