import { ActionTypes } from '../services/api';

const initialState = {
  messages: [],
  currMessage: '',
};

const MessagesReducer = (state = initialState, action) => {
  console.log('PRINT THIS PLEASE');
  switch (action.type) {
    case ActionTypes.FETCH_MESSAGES:
      return { ...state, messages: action.payload };
    case ActionTypes.FETCH_MESSAGE:
      console.log(action.payload);
      return { ...state, currMessage: action.payload };
    case ActionTypes.SEND_MESSAGE:
      return { ...state, covid: action.payload.covid, tested: action.payload.tested };
    default:
      return state;
  }
};

export default MessagesReducer;
