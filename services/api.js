/* eslint-disable object-curly-newline */
import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { SENDGRID_API_KEY } from 'react-native-dotenv';

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
          // console.log('getlocations -> response');
          // console.log(response.data.message);
          resolve(response.data.message);
          dispatch({ type: ActionTypes.STORE_LOCATION, payload: response.data.message });
        })
        .catch((error) => {
          console.log(`backend api error: ${error}`);
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
      console.log(`backend api error: ${error}`);
    });
}

export const signup = ({ email, password }) => {
  return (dispatch) => {
    console.log('test');
    axios.post(`${API_URL}/signup`, { email, password }).then((response) => {
      console.log('test');
      const { token } = response.data;
      // eslint-disable-next-line no-shadow
      const { email, id } = response.data.user;
      console.log('stuff returned from axios call', token, email, id);

      const msg = {
        personalizations: [{ to: [{ email }] }], from: { email: 'greentracedartmouth@gmail.com' }, subject: 'Your GreenTrace Token', content: [{ type: 'text/plain', value: `${token}` }],
      };
      axios.post('https://api.sendgrid.com/v3/mail/send', msg, { headers: { Authorization: `Bearer ${SENDGRID_API_KEY}` } }).then(() => {
        console.log('success');
      }).catch(() => {
        console.log('not success');
      });
      AsyncStorage.setItem('currUser', JSON.stringify(response.data.user));
      AsyncStorage.setItem('token', JSON.stringify(response.data.token));
      // AsyncStorage.setItem('currUser', response.data.id);
      dispatch({ type: ActionTypes.AUTH_USER, payload: response.data });
    }).catch((error) => {
      console.log(error);
      dispatch({ type: ActionTypes.AUTH_ERROR });
    });
  };
};

export const changePassword = ({ id, email, password, newPass }) => {
  return axios.post(`${API_URL}/user/${id}/changePassword`, { email, password, newPass })
    .then((response) => {
      return 'success';
    }).catch((error) => {
      return 'not success';
    });
};

export const signin = ({ email, password }) => {
  return axios.post(`${API_URL}/signin`, { email, password }).then((response) => {
    // console.log('data', response.data);
    // console.log('user', response.data.user);
    AsyncStorage.setItem('currUser', JSON.stringify(response.data.user));
    AsyncStorage.setItem('token', JSON.stringify(response.data.token));
    AsyncStorage.getItem('currUser').then((result) => { console.log(result); }).catch((error) => { console.log(error); });
    return 'success';
  }).catch((error) => {
    return 'not success';
  });
};

export const fetchMessages = () => {
  return (dispatch) => {
    console.log('fetchMessages');
    AsyncStorage.getItem('currUser')
      .then((user) => {
        if (user !== null) {
          const parsed = JSON.parse(user);
          // console.log('fetch messages user line 98', parsed.id);
          axios.get(`${API_URL}/user/${parsed.id}/messages`).then((response) => {
            // console.log('in return dispatch', response.data);
            // dispatch({ type: ActionTypes.FETCH_MESSAGES, payload: response.data.message });
            // console.log('in return dispatch message', response.data.messages);
            // console.log('in API, line 105', response.data);
            // console.log(tempArray);
            console.log('api.js line 113', response.data);
            dispatch({ type: ActionTypes.FETCH_MESSAGES, payload: response.data });
          });
        }
      })
      .catch((err) => { console.log('fetch message error line 98', err); return null; });
  };
  // const user = '5ecb16e40801600038902185';
  // const user = '5ed0202dc1ce1b00386f034f';
  // const user = '5ed2a1f2a3c6ac0038eb7895';
  // axios.get(`${API_URL}/user/${user}/messages`).then((response) => {
  //   console.log('in fetchmessages axios get call');
  //   console.log(response);
  //   dispatch({ type: ActionTypes.FETCH_MESSAGES, payload: response.data.message });
  // });
};

export const setCurrMessage = (id) => {
  return (dispatch) => {
    dispatch({ type: ActionTypes.FETCH_MESSAGE, payload: id });
  };
};

export const sendMessage = (message) => {
  console.log('in send message', message);
  // const user = '5ecb16e40801600038902185';
  // const user = '5ed0202dc1ce1b00386f034f';
  // const user = '5ed2a1f2a3c6ac0038eb7895';
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
    // axios.post(`${API_URL}/user/${user}/messages`, message).then((response) => {
    //   dispatch({ type: ActionTypes.SEND_MESSAGE, payload: response.data });
    // });
    // axios.post(`${API_URL}/user/${AsyncStorage.getItem('currUser')}/messages`, message).then((response) => {
    //   dispatch({ type: ActionTypes.UPDATE_USER, payload: response.data });
    // });
    // userId: '5ecb18190801600038902186',
  }; // consol.e.olog()''getHeadtMapp,', erorro
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
      console.log(`backend api error: ${error}`);
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
