import { ActionTypes } from '../services/api';

const initialState = {
  covid: false,
  tested: false,
  id: '',
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.GET_USER:
      return {
        ...state, id: '', symptoms: action.payload.symptoms, covid: action.payload.covid, tested: action.payload.tested,
      };
    default:
      return state;
  }
};

export default UserReducer;
