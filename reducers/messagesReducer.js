import { ActionTypes } from '../services/api';

const initialState = {
  messages: [],
  currMessage: '',
};

const MessagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_MESSAGES:
      return { ...state, messages: action.payload };
    case ActionTypes.FETCH_MESSAGE:
      return { ...state, currMessage: action.payload };
    default:
      return state;
  }
};

export default MessagesReducer;
