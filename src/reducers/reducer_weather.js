import {FETCH_WEATHER} from '../actions';

export default function(state = [],action){
  // console.log('action recieved' , action);
  switch (action.type) {
    case FETCH_WEATHER:
        // return state.concat([ action.payload.data ]);
        // With es6 syntax, the above line of code can be written as
        return [ action.payload.data , ...state ];
  }
  return state;
}
