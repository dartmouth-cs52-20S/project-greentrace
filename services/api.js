/* eslint-disable object-curly-newline */
import axios from 'axios';
import { AsyncStorage } from 'react-native';

// const API_URL = 'https://greentrace-server.herokuapp.com/api';
const API_URL = 'http://localhost:9090/api';

export const ActionTypes = {
  STORE_LOCATION: 'STORE_LOCATION',
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
  FETCH_MESSAGES: 'FETCH_MESSAGES',
  FETCH_MESSAGE: 'FETCH_MESSAGE',
  UPDATE_USER: 'UPDATE_USER',
  GET_USER: 'GET_USER',
  GET_RISK: 'GET_RISK',
  NUM_CONTACTS: 'NUM_CONTACTS',
  NUM_SYMPTOMS: 'NUM_SYMPTOMS',
  NUM_TESTED: 'NUM_TESTED',
  NUM_POSITIVE: 'NUM_POSITIVE',
};

export const getLocations = () => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios.get(`${API_URL}/location`)
        .then((response) => {
          resolve(response.data.message);
          dispatch({ type: ActionTypes.STORE_LOCATION, payload: response.data.message });
        })
        .catch((error) => {
          console.log(`backend api error in getLocations: ${error}`);
          reject(error);
        });
    });
  };
};

export function sendLocation({ sourceUserID, latitude, longitude, dataCollectionTimestamp }) {
  console.log('snedlocation', { sourceUserID, latitude, longitude, dataCollectionTimestamp });
  axios.post(`${API_URL}/location`, { sourceUserID, longitude: Number(longitude), latitude: Number(latitude), dataCollectionTimestamp })
    .then((response) => {
      console.log('sendlocation -> response');
      console.log(response.data);
    })
    .catch((error) => {
      console.log(`backend api error inSendLocation: ${error}`);
    });
}

export const signup = ({ email, password }) => {
  return (dispatch) => {
    axios.post(`${API_URL}/signup`, { email, password }).then((response) => {
      AsyncStorage.setItem('currUser', JSON.stringify(response.data.user));
      dispatch({ type: ActionTypes.AUTH_USER, payload: response.data });
    }).catch((error) => {
      dispatch({ type: ActionTypes.AUTH_ERROR });
    });
  };
};

export const signin = ({ phraseToken, password }) => {
  return (dispatch) => {
    axios.post(`${API_URL}/signin`, { phraseToken, password }).then((response) => {
      AsyncStorage.setItem('currUser', JSON.stringify(response.data.user));
      AsyncStorage.getItem('currUser').then((result) => { console.log(result); }).catch((error) => { console.log(error); });

      dispatch({ type: ActionTypes.AUTH_USER, payload: response.data });
    }).catch((error) => {
      dispatch({ type: ActionTypes.AUTH_ERROR });
      console.log('entered error');
      console.log('line 89 error', error);
    });
  };
};

export const fetchMessages = () => {
  return (dispatch) => {
    console.log('fetchMessages');
    AsyncStorage.getItem('currUser')
      .then((user) => {
        if (user !== null) {
          const parsed = JSON.parse(user);
          axios.get(`${API_URL}/user/${parsed.id}/messages`).then((response) => {
            dispatch({ type: ActionTypes.FETCH_MESSAGES, payload: response.data });
          });
        }
      })
      .catch((err) => { console.log('fetch message error line 98', err); return null; });
  };
};

export const setCurrMessage = (id) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.FETCH_MESSAGE, payload: id });
  };
};

export const sendMessage = (message) => {
  console.log('in send message', message);
  return (dispatch) => {
    AsyncStorage.getItem('currUser')
      .then((currUser) => {
        const parsed = JSON.parse(currUser);
        const parsedId = parsed.id;
        axios.post(`${API_URL}/user/${parsedId}/messages`, message).then((response) => {
          dispatch({ type: ActionTypes.SEND_MESSAGE, payload: response.data });
        });
      })
      .catch((err) => {
        console.log('error sending message line 130', err);
      });
  };
};

export const getRiskScore = () => {
  return (dispatch) => {
    AsyncStorage.getItem('currUser')
      .then((result) => {
        if (result !== null) {
          const parsed = JSON.parse(result);
          axios.get(`${API_URL}/user/${parsed.id}/risk`)
            .then((response) => {
              dispatch({ type: ActionTypes.GET_RISK, payload: response.data });
            })
            .catch((err) => { console.log('getRiskScore error line 161', err); });
        }
      })
      .catch((error) => {
        console.log('getRiskScore error line 166', error);
      });
  };
};

export const getUser = (id) => {
  return (dispatch) => {
    axios.get(`${API_URL}/user/${id}`)
      .then((response) => {
        dispatch({ type: ActionTypes.GET_USER, payload: response.DATA });
      })
      .catch((error) => {
        console.log('ERROR ERROR! NO USER EXISTS AT THAT ID!');
      });
  };
};

export const getHeatpmap = () => {
  return axios.get(`${API_URL}/heatmap`)
    .then((response) => {
      return response.data.message;
    })
    .catch((error) => {
      console.log(`backend api error in getHeatpmap: ${error}`);
    });
};

export const updateUser = (id, update) => {
  axios.put(`${API_URL}/user/${id}`, update)
    .then((response) => {
      AsyncStorage.setItem('currUser', JSON.stringify(response.data));
      return response;
    })
    .catch((error) => {
      console.log('Backend API error', error);
      return error;
    });
};

export const getNumContactsPositive = () => {
  return (dispatch) => {
    AsyncStorage.getItem('currUser')
      .then((result) => {
        if (result !== null) {
          const parsed = JSON.parse(result);
          console.log('ayo, id: ', parsed.id);
          axios.get(`${API_URL}/user/${parsed.id}/numcontacts`)
            .then((res) => {
              dispatch({ type: ActionTypes.NUM_CONTACTS, payload: res.data });
            })
            .catch((err) => {
              console.log('error getting number of contacts line 216', err);
            });
        }
      })
      .catch((error) => {
        console.log('error finding curr user 221', error);
      });
  };
};

export const getNumSymptoms = () => {
  return (dispatch) => {
    AsyncStorage.getItem('currUser')
      .then((result) => {
        if (result !== null) {
          const parsed = JSON.parse(result);
          console.log('ayo, id: ', parsed.id);
          axios.get(`${API_URL}/user/${parsed.id}/numSymptoms`)
            .then((res) => {
              dispatch({ type: ActionTypes.NUM_SYMPTOMS, payload: res.data });
            })
            .catch((err) => {
              console.log('error getting number of symptoms line 241', err);
            });
        }
      })
      .catch((error) => {
        console.log('error finding curr user 246', error);
      });
  };
};

export const getNumTested = () => {
  return (dispatch) => {
    axios.get(`${API_URL}/stats`)
      .then((result) => {
        dispatch({ type: ActionTypes.NUM_TESTED, payload: result.data });
      })
      .catch((error) => {
        console.log('error fetching number of users tested', error);
      });
  };
};

export const getNumPositive = () => {
  return (dispatch) => {
    axios.get(`${API_URL}/numPositive`)
      .then((result) => {
        console.log('what is being sent: ', result.data);
        dispatch({ type: ActionTypes.NUM_POSITIVE, payload: result.data });
      })
      .catch((error) => {
        console.log('error getting number of positive cases', error);
      });
  };
};
