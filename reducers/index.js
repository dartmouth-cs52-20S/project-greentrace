import { combineReducers } from 'redux';

import LocationsReducer from './locationsReducer';
import AuthReducer from './auth_reducer';
import MessagesReducer from './messagesReducer';

const rootReducer = combineReducers({
  locs: LocationsReducer,
  auth: AuthReducer,
  messages: MessagesReducer,
});

export default rootReducer;
