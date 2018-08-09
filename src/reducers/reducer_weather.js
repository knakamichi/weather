import FETCH_WEATHER from '../actions/index';

export default function (state = [], action) {
  // console.log('Action recieved.', action);
  switch (action.type) {
    case FETCH_WEATHER:
    // return only the data inside payload (console log returned action for info) + creates a copy of state
      // create a new array with a.p.d, (if inside state is an array too) put the data inside state and push it in the new array and flatten it out.
      return [action.payload.data, ...state ]; // returns [city, city, city] NOT [city, [city, city]]
      // = return state.concat([action.payload.data]);


      // never manipulate state directly! we want to return a completely new instance of state.
      // BAD code
      // return state.push(action.payload.data)
  }
  return state;
}
