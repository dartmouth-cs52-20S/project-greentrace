import { combineReducers } from 'redux';

import LocationsReducer from './locationsReducer';
import AuthReducer from './auth_reducer';
import MessagesReducer from './messagesReducer';
import RiskReducer from './risk_reducer';

const rootReducer = combineReducers({
  locs: LocationsReducer,
  auth: AuthReducer,
  messages: MessagesReducer,
  risk: RiskReducer,
});

export default rootReducer;
