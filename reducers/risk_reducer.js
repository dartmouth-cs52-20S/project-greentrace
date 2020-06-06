import { ActionTypes } from '../services/api';

const initialState = {
  riskLevel: null,
  numPositiveContacts: null,
  numSymptoms: null,
  numTested: null,
  numPositive: null,
};

const RiskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_RISK:
      return { ...state, riskLevel: action.payload.message };
    case ActionTypes.NUM_CONTACTS:
      console.log('made it here');
      return { ...state, numPositiveContacts: action.payload.message };
    case ActionTypes.NUM_SYMPTOMS:
      return { ...state, numSymptoms: action.payload.message };
    case ActionTypes.NUM_TESTED:
      return { ...state, numTested: action.payload.message };
    case ActionTypes.NUM_POSITIVE:
      console.log('Number of Positive Cases', action.payload.message);
      return { ...state, numPositive: action.payload.message };
    default:
      return state;
  }
};

export default RiskReducer;
