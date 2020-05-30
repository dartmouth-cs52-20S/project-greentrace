import { ActionTypes } from '../services/api';

const initialState = {
  locations: {},
};

const LocationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.STORE_LOCATION:
      console.log('STORE_LOCATION', action.payload);
      return { ...state, locations: action.payload };
    default:
      return state;
  }
};

export default LocationsReducer;
