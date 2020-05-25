import { ActionTypes } from '../services/api';

const initialState = {
  messages: [],
  currMessage: {},
  covid: false,
  tested: false,
};

const MessagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_MESSAGES:
      return { ...state, messages: action.payload };
    case ActionTypes.FETCH_MESSAGE:
      return { ...state, currMessage: action.payload };
    case ActionTypes.SEND_MESSAGE:
      return { ...state, covid: action.payload.covid, tested: action.payload.tested };
    default:
      return state;
  }
};

export default MessagesReducer;
