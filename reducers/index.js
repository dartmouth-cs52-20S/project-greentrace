import { combineReducers } from 'redux';

import LocationsReducer from './locationsReducer';

const rootReducer = combineReducers({
  locs: LocationsReducer,
});

export default rootReducer;
