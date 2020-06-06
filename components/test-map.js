/* eslint-disable global-require */
import React, { Component } from 'react';
import axios from 'axios';
import {
  Image, StyleSheet, Text, ImageBackground,
} from 'react-native';

const ROOT_URL = 'https://maps.googleapis.com/maps/api/staticmap?';
const API_KEY = 'AIzaSyDRuuhosfoCgLG2yRAGekZl7GlWVSmySmk';

class MapImage extends Component {
  async getMapImage() {
    //   return (`${ROOT_URL}center=40.714728,-73.998672&zoom=12&size=400x400&maptype=roadmap&key=${API_KEY}`);
    axios.get(`${ROOT_URL}center=40.714728,-73.998672&zoom=12&size=400x400&maptype=roadmap&key=${API_KEY}`)
      .then((response) => {
        console.log('response', response);
        return response.responseURL;
      })
      .catch((error) => {
        console.log(error);
      });

    //   const defaultBackground = require('../img/default-background.png');
    //   return defaultBackground;
  }

  render() {
    // console.log('response', this.getMapImage());
    return (
      <ImageBackground source={{ uri: `${ROOT_URL}center=40.714728,-73.998672&zoom=12&size=400x400&maptype=roadmap&key=${API_KEY}` }} style={styles.image}>
        <Text>This is a test</Text>
        <Image source={{ uri: `${ROOT_URL}center=40.714728,-73.998672&zoom=12&size=400x400&maptype=roadmap&key='${API_KEY}'` }} style={styles.image} />
        <Text>This is a test</Text>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    // flex: 1,
    resizeMode: 'cover',
    // width: 100,
    // height: 100,
    justifyContent: 'center',
  },
  text: {
    color: 'grey',
    fontSize: 30,
    fontWeight: 'bold',
  },
});


// const MapImage = () => {
//   console.log(getMapImage());
//   return (
//     <Image source={{ uri: getMapImage() }} />
//   );
// };

export default MapImage;
