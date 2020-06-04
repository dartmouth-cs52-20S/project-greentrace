import { ActionTypes } from '../services/api';

const initialState = {
  riskLevel: null,
};

const RiskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UPDATE_RISK:
      return { ...state, risk: action.payload };
    default:
      return state;
  }
};

export default RiskReducer;
