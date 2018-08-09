import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {

  constructor(props) {
    super (props);

    this.state = {term: ''};
    // take the function, bind it to "this", replace function
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange (e) {
    // console.log(e.target.value);
    this.setState({term: e.target.value});
  }

  onFormSubmit(e) {
    e.preventDefault(); // (in this case: submit action is not triggered until sumbit)

    this.props.fetchWeather(this.state.term);
    this.setState({term: ''})
  }

  render() {
    // form tag has several ways of submitting on default
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder= "Get a five-day forecast of your favorite cites!"
          className= "form-control"
          value= {this.state.term}
          onChange= {this.onInputChange}
        />
        <span className="input-group-button">
          <button action="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
