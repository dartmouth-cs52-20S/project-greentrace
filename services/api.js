import axios from 'axios';

const API_URL = 'https://greentrace-server.herokuapp.com/api/events';

export const getLocations = () => {
  return new Promise((resolve, reject) => {
    axios.get(API_URL)
      .then((response) => {
        console.log('getlocations -> response');
        console.log(response.data.message);
        resolve(response.data.message);
      })
      .catch((error) => {
        console.log(`backend api error: ${error}`);
        reject(error);
      });
  });
};

export const sendLocation = ({ latitude, longitude }) => {
  return new Promise((resolve, reject) => {
    axios.post(API_URL, { longitude: Number(longitude), latitude: Number(latitude) })
      .then((response) => {
        console.log('sendlocation -> response');
        console.log(response.data);
        console.log(response.data.message);
        resolve(response.data.message);
      })
      .catch((error) => {
        console.log(`backend api error: ${error}`);
        reject(error);
      });
  });
};
